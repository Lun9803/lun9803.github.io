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
    let date = event.time.split(' ')[0]
    if(!eventsObj[date])return;
    eventsObj[date] = eventsObj[date].filter(el=>el.time!==event.time||el.title!==event.title||event.description!==el.description)
    localStorage.setItem('onetime_events',JSON.stringify(eventsObj))
}