export const getEvents = date => {
    if(localStorage.hasOwnProperty('user_events')){
        return JSON.parse(localStorage.getItem('user_events'))[date]||[]
    }else{
        return [];
    }
}