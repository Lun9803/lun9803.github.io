import React, {useEffect, useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Tabs, Tab, Tooltip, IconButton, Snackbar } from '@material-ui/core';
import AddButton from '@material-ui/icons/AddCircle'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import WarningIcon from '@material-ui/icons/WarningOutlined'
import ScheduleIcon from '@material-ui/icons/ScheduleOutlined'
import { blackSecondary, white, onetimeEventsColour } from '../../palette';
import moment from 'moment';
import { getEvents, getOneTimeEventsCountOfWeek, sortEventsByTime, deleteEvent } from '../../utilities';
import AddOnetimeEventModal from '../AddOnetimeEventModal/AddOnetimeEventModal'

const useStyles = makeStyles({
	timeSection:{
        paddingTop:'2.5vh',
        height:'97.5vh',
		display:'flex',
		flexDirection:'column',
        alignItems:'center',
        maxWidth:'100%'
	},
	timeText:{
		fontSize:80,
		letterSpacing:10,
		color:white,
		height:93
	},
	timeBlock:{
		display:'flex',
		alignItems:'flex-end'
	},
	timeSubText:{
		fontSize:42,
        color:white,
        marginRight:8
	},
	monthText:{
		fontSize:36,
		latterSpacing:5,
		color:white
	},
	calender:{
		width:'100%',
		display:'flex',
		justifyContent:'space-between',
		alignItems:'flex-end'
	},
	tabIndicator:{
		background:white
	},
	tab:{
        minWidth:60,
        padding:6,
        '&:hover':{
            background:blackSecondary
        }
    },
    popper:{
        '& div':{
            background:blackSecondary,
            padding:8
        }
    },
    toolTipText:{
        fontSize:13.75,
        color:white,
    },
    eventsSection:{
        marginTop:30,
        width:'100%',
        flexGrow:1,
        overflow:'scroll',
        '&::-webkit-scrollbar': {
            width: 0
        }
    },
    badge:{
        width:10,
        height:10,
        borderRadius:5,
        flexShrink:0,
        marginLeft:-6,
        marginTop:-3
    },
    eventListItem:{
        display:'flex',
        alignItems:'center',
        cursor:'pointer',
        padding:12,
        borderBottom:`1px solid ${blackSecondary}`,
        '&:hover':{
            background:blackSecondary
        }
    },
    addEventButton:{
        width:'100%',
        height:'20%',
        display:'flex',
        justifyContent:'center',
        alignItems:'flex-start'
    },
    deleteIconButton:{
        '&:hover':{
            background:onetimeEventsColour
        }
    },
    snackbar:{
        borderRadius:5,
        '& div':{
            background:onetimeEventsColour,
            padding:'8px 20px',
            fontSize:20
        }
    },
    tabScrollButton:{
        color:white,
        '& svg':{
            fontSize:32
        }
    }
});


const formatTime = num => {
	if((num+'').length===1)return '0'+num;
	return num+''
}

const generateWeekCalender = time => {
    if(!time)return [];
	let day = time.day();
	let calArr = []
	const getDayName = day => {
		switch(day % 7){
			case 0: return '日';
			case 1: return '一';
			case 2: return '二';
			case 3: return '三';
			case 4: return '四';
			case 5: return '五';
			case 6: return '六';
			default: return ''
		}
	}
	for(let i=0; i<7; i++){
		calArr[i] = {
			name: getDayName(i+day),
			date: moment().add(i,'days').date(),
			fullDate: moment().add(i,'days').format('YYYY年MM月DD日'),
		}
	}
	return calArr;
}


function TimeSection(props) {
    const classes = useStyles();
	const [time, setTime] = useState(moment());
    const [tab, setTab] = useState(0);
    const [onetimeEvents, setOnetimeEvents] = useState([]);
    const [onetimeEventsCount, setOnetimeEventsCount] = useState([0,0,0,0,0,0,0]);
    const [modalOpen, setModalOpen] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [selectedEvent, setSelectedEvent] = useState();

	useEffect(()=>{
        setOnetimeEventsCount(getOneTimeEventsCountOfWeek());
        setOnetimeEvents(getEvents(moment().add(0,'days').format('YYYY-MM-DD')));
		setInterval(()=>{
			let newTime = moment()
			setTime(newTime)
		},[500])
    },[])
    
    const onCalenderTabChange = value => {
        setTab(value);
        setOnetimeEvents(getEvents(moment().add(value,'days').format('YYYY-MM-DD')))
    }

    const setEvents = () => {
        setOnetimeEvents(getEvents(moment().add(tab,'days').format('YYYY-MM-DD')));
        setOnetimeEventsCount(getOneTimeEventsCountOfWeek());
    }

    const onDeleteEvent = (event) => {
        deleteEvent(event)
        setEvents()
        setSnackbarMessage(`事务“${event.title}”已删除`)
        setSnackbarOpen(true);
        setTimeout(()=>{
            setSnackbarOpen(false)
        },6000)
    }

    const onEditEvent = (event) => {
        setSelectedEvent(event);
        setModalOpen(true);
    }

  	return (
        <div className={classes.timeSection}>
            <div className={classes.timeBlock}>
                <Typography className={classes.timeText}>{formatTime(time.hour())}</Typography>
                <Typography className={classes.timeSubText}>:</Typography>
                <Typography className={classes.timeText}>{formatTime(time.minute())}</Typography>
            </div>
            <div className={classes.timeBlock} style={{marginTop:30}}>
                <Typography className={classes.monthText} style={{marginRight:20}}>{time.year()+' 年'}</Typography>
                <Typography className={classes.monthText}>{time.month()+1+' 月'}</Typography>
            </div>
            <div className={classes.calender} style={{marginTop:20}}>
                <Tabs
                    style={{width:'100%',maxWidth:'100%'}}
                    classes={{indicator:classes.tabIndicator, scrollButtons:classes.tabScrollButton}}
                    value={tab}
                    scrollButtons={"on"}
                    variant={window.innerWidth<500?'scrollable':'fullWidth'}
                    onChange={(event, value)=>onCalenderTabChange(value)}
                    >
                    {
                        generateWeekCalender(time).map((el,index)=>(
                                <Tooltip 
                                    key={el.name+'-'+el.date+'-tooltip'} 
                                    title={
                                        <div>
                                        <Typography className={classes.toolTipText}>{`${el.fullDate}`}</Typography>
                                        {onetimeEventsCount[index]!==0 && <Typography className={classes.toolTipText} style={{color:onetimeEventsColour}}>{`${onetimeEventsCount[index]}个一次性事务`}</Typography>}
                                        </div>
                                    } 
                                    placement='top'
                                    PopperProps={{className:classes.popper}}
                                >
                                    <Tab 
                                        className={classes.tab}
                                        key={el.name+'-'+el.date}  
                                        icon={
                                            <div style={{display:'flex',width:'100%',overflow:'visible'}}>
                                                <Typography style={{color:white,width:'100%',flexShrink:0}}>{el.name+(index===0?'':'')}</Typography>
                                                {onetimeEventsCount[index]!==0 && <div className={classes.badge} style={{background:onetimeEventsColour}}></div>}
                                            </div>
                                        }  
                                        label={<Typography style={{color:white,fontSize:24}}>{el.date}</Typography>}
                                    />
                                </Tooltip>
                        ))	  
                    }
                </Tabs>
            </div>
            <div className={classes.eventsSection}>
                {
                    onetimeEvents.length===0 ?
                    <Typography style={{color:white,fontSize:20,width:'100%',textAlign:'center'}}>今天没事干，好好放松鸭</Typography> :
                    <Typography style={{color:onetimeEventsColour,fontSize:20,marginBottom:16,width:'100%',textAlign:'center'}}>{`今天有${onetimeEvents.length}件事要做，冲鸭！`}</Typography>
                }
                {
                    onetimeEvents && sortEventsByTime(onetimeEvents).map(el=>(
                        <Tooltip 
                            key={el.id} 
                            title={el.description} 
                            placement='left'
                            PopperProps={{className:classes.popper}}
                        >
                            <div className={classes.eventListItem}>
                                {
                                    tab===0 && moment().diff(moment(el.time),'minutes')>0 ?
                                    <WarningIcon style={{width:24,height:24,color:onetimeEventsColour}}/> :
                                    <ScheduleIcon style={{width:24,height:24,color:white}}/>
                                }
                                <Typography  style={{color:white,fontSize:16,marginRight:12,marginLeft:12}}>{moment(el.time).format('HH:mm')}</Typography>
                                <Typography style={{color:white,fontSize:16,flexGrow:1}}>{el.title}</Typography>
                                <IconButton className={classes.deleteIconButton} onClick={()=>onEditEvent(el)}>
                                    <EditIcon style={{width:20,height:20,color:white}}/>
                                </IconButton>
                                <IconButton className={classes.deleteIconButton} onClick={()=>onDeleteEvent(el)}>
                                    <DeleteIcon style={{width:20,height:20,color:white}}/>
                                </IconButton>
                            </div>
                        </Tooltip>
                    ))
                }
            </div>
            <div className={classes.addEventButton}>
                <IconButton onClick={()=>{setSelectedEvent();setModalOpen(true)}}><AddButton style={{width:60,height:60, color:onetimeEventsColour}}/></IconButton>
            </div>
            {
                <AddOnetimeEventModal
                    onAdd={setEvents}
                    modalOpen={modalOpen}
                    setModalOpen={setModalOpen}
                    selectedEvent={selectedEvent}
                />
            }

            <Snackbar
                className={classes.snackbar} 
                anchorOrigin={{vertical:'bottom',horizontal:'left'}} 
                open={snackbarOpen}
                message={snackbarMessage}
            />
        </div>
	);
}

export default TimeSection;

