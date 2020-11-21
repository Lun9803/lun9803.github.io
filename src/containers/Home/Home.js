import React, {useEffect, useState} from "react";
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Tabs, Tab } from '@material-ui/core'
import {black, white } from '../../palette'

const useStyles = makeStyles({
	root:{
		background:black,
		height:'100vh',
		display:'flex',
		justifyContent:'space-around'
	},
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
		minWidth:70
	},
});

const formatTime = num => {
	if((num+'').length===1)return '0'+num;
	return num+''
}

const generateWeekCalender = time => {
	if(!time)return [];
	let day = time.getDay();
	let date = time.getDate();
	let month = time.getMonth()+1;
	let year = time.getFullYear();
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
	const getDate = date => {
		if(month===2){
			if( ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0))return date>29?date-29:date;
			return date>28?date-28:date;
		}
		if([1,3,5,7,8,10,12].includes(month)){
			return date>31?31-date:date;
		}
		if([4,6,9,11].includes(month)){
			return date>30?30-date:date;
		}
	}
	for(let i=0; i<7; i++){
		calArr[i] = {
			name: getDayName(i+day),
			date: getDate(date + i)
		}
	}
	return calArr;
}


function Home() {
	const classes = useStyles();
	const [time, setTime] = useState(new Date());
	const [tab, setTab] = useState(0);

	useEffect(()=>{
		setInterval(()=>{
			let newTime = new Date()
			setTime(newTime)
		},[500])
	},[])

  	return (
		<div className={classes.root}>
			<div className={classes.timeSection}>
				<div className={classes.timeBlock}>
					<Typography className={classes.timeText}>{formatTime(time.getHours())}</Typography>
					<Typography className={classes.timeSubText}>hr</Typography>
				 	<Typography className={classes.timeText} style={{marginLeft:24}}>{formatTime(time.getMinutes())}</Typography>
					<Typography className={classes.timeSubText}>min</Typography>
				</div>
				<div className={classes.timeBlock} style={{marginTop:30}}>
	  				<Typography className={classes.monthText} style={{marginRight:20}}>{time.getFullYear()+' 年'}</Typography>
	  				<Typography className={classes.monthText}>{time.getMonth()+1+' 月'}</Typography>
				</div>
				<div className={classes.calender} style={{marginTop:20}}>
					<Tabs
						style={{width:'100%'}}
						classes={{indicator:classes.tabIndicator}}
						value={tab}
						onChange={(event, value)=>setTab(value)}
						>
						{
							generateWeekCalender(time).map((el,index)=>(
								<Tab 
									className={classes.tab}
									key={el.name+'-'+el.date}  
									icon={<Typography style={{color:white}}>{el.name+(index===0?'  (今日)':'')}</Typography>}  
									label={<Typography style={{color:white,fontSize:24}}>{el.date}</Typography>}
								/>
							))	  
						}
					</Tabs>
				</div>
			</div>
		</div>
	);
}

export default Home;