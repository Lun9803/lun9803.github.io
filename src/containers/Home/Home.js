import React, {useEffect, useState} from "react";
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import {black, white} from '../../palette'

const useStyles = makeStyles({
	root:{
		background:black,
		height:'100vh',
		display:'flex',
		justifyContent:'space-around'
	},
	timeSection:{
		paddingTop:'2.5%'
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
	}
});

const formatTime = num => {
	if((num+'').length===1)return '0'+num;
	return num+''
}

function Home() {
	const classes = useStyles();
	const [time, setTime] = useState(new Date());

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
			</div>
		</div>
	);
}

export default Home;