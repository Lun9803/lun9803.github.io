import React from "react";
import { makeStyles } from '@material-ui/core/styles'
import {black } from '../../palette'
import TimeSection from '../../components/TimeSection/TimeSection'

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

  	return (
		<div className={classes.root}>
			<TimeSection/>
		</div>
	);
}

export default Home;