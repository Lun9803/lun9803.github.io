import React, {useEffect, useState} from "react";
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Tabs, Tab, Tooltip } from '@material-ui/core'
import { blackSecondary, white } from '../../palette'
import moment from 'moment'
// import { getEvents } from '../../utilities'

const useStyles = makeStyles({
	timeSection:{
		paddingTop:'2.5%',
		display:'flex',
		flexDirection:'column',
		alignItems:'center'
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
		fontSize:16,
		color:white,
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
        minWidth:70,
        '&:hover':{
            background:blackSecondary
        }
    },
    popper:{
        '& div':{
            background:blackSecondary,
            padding:12
        }
    },
    toolTipText:{
        fontSize:13.75,
        color:white,
        whiteSpace:'pre-wrap'
    },
    eventsSection:{

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
    // const [events, setEvents] = useState([]);


	useEffect(()=>{
        // localStorage.setItem(
        //     'user_events',
        //     JSON.stringify({'2020-11-23':['1','2','3']})
        // )
		setInterval(()=>{
			let newTime = moment()
			setTime(newTime)
		},[500])
    },[])
    
    const onCalenderTabChange = value => {
        setTab(value);
        // setEvents(getEvents(moment().add(value,'days').format('YYYY-MM-DD')))
    }

  	return (
        <div className={classes.timeSection}>
            <div className={classes.timeBlock}>
                <Typography className={classes.timeText}>{formatTime(time.hour())}</Typography>
                <Typography className={classes.timeSubText}>时</Typography>
                <Typography className={classes.timeText} style={{marginLeft:24}}>{formatTime(time.minute())}</Typography>
                <Typography className={classes.timeSubText}>分</Typography>
            </div>
            <div className={classes.timeBlock} style={{marginTop:30}}>
                <Typography className={classes.monthText} style={{marginRight:20}}>{time.year()+' 年'}</Typography>
                <Typography className={classes.monthText}>{time.month()+1+' 月'}</Typography>
            </div>
            <div className={classes.calender} style={{marginTop:20}}>
                <Tabs
                    style={{width:'100%'}}
                    classes={{indicator:classes.tabIndicator}}
                    value={tab}
                    onChange={(event, value)=>onCalenderTabChange(value)}
                    >
                    {
                        generateWeekCalender(time).map((el,index)=>(
                            <Tooltip 
                                key={el.name+'-'+el.date+'-tooltip'} 
                                title={<Typography className={classes.toolTipText}>{`${el.fullDate}`}</Typography>} 
                                placement='top'
                                PopperProps={{className:classes.popper}}
                            >
                                <Tab 
                                    className={classes.tab}
                                    key={el.name+'-'+el.date}  
                                    icon={<Typography style={{color:white}}>{el.name+(index===0?'  (今日)':'')}</Typography>}  
                                    label={<Typography style={{color:white,fontSize:24}}>{el.date}</Typography>}
                                />
                            </Tooltip>
                        ))	  
                    }
                </Tabs>
            </div>
            <div className={classes.eventsSection}>
                {/* {
                    events.length===0?
                    <Typography style={{color:white}}>当日无事项</Typography>
                    :
                    <Typography style={{color:white}}>{`当日有${events.length}事项`}</Typography>
                } */}
            </div>
        </div>
	);
}

export default TimeSection;