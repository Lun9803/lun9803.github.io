import moment from 'moment';

export const getEvents = date => {
    // date must be in format YYYY-MM-DD
    if(localStorage.hasOwnProperty('onetime_events')){
        return JSON.parse(localStorage.getItem('onetime_events'))[date]||[]
    }else{
        return [];
    }
}

export const getOneTimeEventsCountOfWeek = () => {
    if(!localStorage.hasOwnProperty('onetime_events')){
        return [0,0,0,0,0,0,0]
    }
    let date = moment();
    let countArr = [];
    let eventsObj = JSON.parse(localStorage.getItem('onetime_events'));
    for(let i=0; i<7; i++){
        let events = eventsObj[date.format('YYYY-MM-DD')];
        countArr.push(events?events.length:0)
        date.add(1,'days')
    }
    return countArr;
}

export const sortEventsByTime = events => {
    return events.sort((a,b)=>moment(a.time).diff(moment(b.time))<0?-1:1)
}   

export const deleteEvent = event => {
    if(!localStorage.hasOwnProperty('onetime_events') || !event)return;
    let eventsObj = JSON.parse(localStorage.getItem('onetime_events'));
    let date = event.id.split('_')[0]
    if(!eventsObj[date])return;
    eventsObj[date] = eventsObj[date].filter(el=>el.id!==event.id)
    localStorage.setItem('onetime_events',JSON.stringify(eventsObj))
}

export const addEvent = event => {
    let eventsObj = {};
    if(localStorage.hasOwnProperty('onetime_events')){
        eventsObj = JSON.parse(localStorage.getItem('onetime_events'));
    }
    let date =  event.id.split('_')[0];
    if(eventsObj[date])eventsObj[date].push(event);
    else{eventsObj[date]=[event]}
    localStorage.setItem('onetime_events',JSON.stringify(eventsObj))
}

export const updateEvent = (oldEvent, newEvent) => {
    deleteEvent(oldEvent);
    addEvent(newEvent);
}

export const cleanExpiredEvents = () => {
    if(!localStorage.hasOwnProperty('onetime_events'))return;
    let eventsObj =  JSON.parse(localStorage.getItem('onetime_events'));
    let newObj = {};
    let date = moment().add(-7,'days').format('YYYY-MM-DD')
    Object.keys(eventsObj).forEach(key=>{
        if(key<date)return;
        newObj[key] = eventsObj[key]
    })
    localStorage.setItem('onetime_events',JSON.stringify(newObj))
}