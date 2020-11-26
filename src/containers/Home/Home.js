import React, {useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles'
import {black } from '../../palette'
import TimeSection from '../../components/TimeSection/TimeSection'
import CodeDrop from '../../components/CodeDrop/CodeDrop'
import { cleanExpiredEvents } from '../../utilities'

const useStyles = makeStyles({
	root:{
		background:black,
		height:'100vh',
		display:'flex',
		justifyContent:'space-around'
	},
});

function Home() {
	const classes = useStyles();

	useEffect(()=>{
		cleanExpiredEvents()
	},[])

  	return (
		<div className={classes.root}>
			{
				window.innerWidth>700 && <CodeDrop />
			}
			<TimeSection/>
			{
				window.innerWidth>700 && <CodeDrop />
			}
		</div>
	);
}

export default Home;