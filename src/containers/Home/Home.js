import React, {useEffect, useState,useRef} from "react";
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import {black, white} from '../../palette'

const useStyles = makeStyles({
    root: {
			display:'flex',
			height:'100vh',
			overflow:'hidden',
		},
		left:{
			width:'50%',
			background:black,
			textAlign:'end',
			color:white,
		},
		right:{
			width:'50%',
			background:white,
			color:black,
		},
		text:{
			fontSize:50,
			letterSpacing:3,
			margin:'5vh 2.5vw',
		}
});

const generateParticleStyle = s => {
	return {
		position:'absolute',
		left:s.x,
		top:s.y,
		color:s.position==='left'?white:black
	}
	
}

const generateParticle = ({num=1},squares) => {
	let velocity = 1;
	let windowWidth = window.innerWidth;
	for(let i=0; i<num; i++){
		let square = {
			velocity, 
			x: Math.floor(windowWidth*Math.random()),
			y:0,
			acc:0.05, //acceleration
 			text:Math.random()<0.5?'0':'1'
		}
		if(square.x>windowWidth/2){
			square.position='right'
		}else{
			square.position='left'
		}
		squares.push(square);
	}
}

const screenHeight = window.innerHeight;

function Home() {
	const classes = useStyles();
	const squares = useRef();
	const [particleArr, setParticleArr] = useState();

	const renderParticle = (currentSquares) => {	
		if(currentSquares.length===0)return true;
		let movingParticleCount = 0;	
		for(let i=0; i<currentSquares.length; i++){
			let s = currentSquares[i];
			if(Math.abs(s.velocity)<0.05 && s.y>=screenHeight*0.9)continue;
			movingParticleCount += 1;
			s.y += s.velocity;
			s.velocity += s.acc;
			if(s.y>screenHeight*0.9 && s.velocity>0){
				// currentSquares.splice(i,1)
				s.velocity *= -0.5;
			}
		}
		setParticleArr([...currentSquares])
		return movingParticleCount!==0;
	}	

	useEffect(()=>{
		squares.current = [];
		let generateCount = 0;
		let generateIntervalRef;
		generateIntervalRef = setInterval(()=>{
			generateParticle({},squares.current)
			generateCount+=1;
			if(generateCount>50)clearInterval(generateIntervalRef)
		},250)
		let renderIntervalRef;
		renderIntervalRef = setInterval(()=>{
			if(!renderParticle(squares.current))clearInterval(renderIntervalRef)
		},10)
	}, [])

  return (
    <div className={classes.root}>
			<div className={classes.left}>
				<Typography className={classes.text}>Lun's</Typography>
			</div>
			<div  className={classes.right}>
				<Typography className={classes.text}>Gallery</Typography>
			</div>
			{
				particleArr && particleArr.map((s,i)=>(
					<div key={`squre-${i}`} style={generateParticleStyle(s)}>
						{s.text}
					</div>
				))
			}
    </div>
  );
}

export default Home;