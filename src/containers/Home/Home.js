import React, {useEffect, useState,useRef} from "react";
import { makeStyles } from '@material-ui/core/styles'
import { Typography, ButtonBase } from '@material-ui/core'
import {black, white, whiteSecondary, blackSecondary} from '../../palette'

const useStyles = makeStyles({
    root: {
		display:'flex',
		height:'100vh',
		overflow:'hidden',
	},
	left:{
		width:'50%',
		background:black,
		display:'flex',
		justifyContent:'center',
		color:white,
	},
	right:{
		width:'50%',
		background:white,
		color:black,
		display:'flex',
		justifyContent:'center',
	},
	text:{
		fontSize:70,
	},
	buttonBase:{
		marginTop:'30vh',
		width:'30vw',
		maxWidth:'20vh',
		height:'30vw',
		maxHeight:'20vh',
		display:'flex',
		alignItems:'center',
		justifyContent:'center'
	},
	lightButton:{
		border:`2px solid ${white}`,
		borderRadius:3,
		'&:hover':{
			background:blackSecondary,
		}
	},
	darkButton:{
		border:`2px solid ${black}`,
		borderRadius:3,
		'&:hover':{
			background:whiteSecondary,
		}
	}
});

const generateParticleStyle = s => {
	return {
		position:'absolute',
		left:s.x-10,
		top:s.y,
		width:20,
		textAlign:'center',
		color:s.position==='left'?white:black
	}
	
}

const screenHeight = window.innerHeight;
const screenWidth = window.innerWidth;

const generateParticle = ({num=1},squares) => {
	let velocity = 1;
	for(let i=0; i<num; i++){
		let square = {
			velocity, 
			x: (screenWidth*0.05)+Math.floor((screenWidth*0.9)*Math.random()),
			y:0,
			acc:0.05, //acceleration
 			text:Math.random()<0.5?'0':'I'
		}
		if(square.x>screenWidth/2){
			square.position='right'
		}else{
			square.position='left'
		}
		squares.push(square);
	}
}


function Home() {
	const classes = useStyles();
	const squares = useRef();
	const [particleArr, setParticleArr] = useState();
	const [buttonOpacity, setButtonOpacity] = useState(-1);

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
			let particleNum = Math.floor(2*Math.random())
			generateParticle({num:particleNum},squares.current)
			generateCount+=1;
			if(generateCount>50)clearInterval(generateIntervalRef)
		},75)
		let renderIntervalRef;
		renderIntervalRef = setInterval(()=>{
			if(!renderParticle(squares.current)){
				clearInterval(renderIntervalRef);
				setButtonOpacity(0);
			}
		},10)
	}, [])

	useEffect(()=>{
		if(buttonOpacity<0 || buttonOpacity>=1)return;
		setTimeout(()=>setButtonOpacity(buttonOpacity+0.01),10)
	},[buttonOpacity])

  	return (
		<div className={classes.root}>
				<div className={classes.left}>
					<ButtonBase className={`${classes.buttonBase} ${classes.lightButton}`} style={{opacity:buttonOpacity}}>
						<Typography className={classes.text} style={{color:white}}>夜</Typography>
					</ButtonBase>
				</div>
				<div  className={classes.right}>
					<ButtonBase className={`${classes.buttonBase} ${classes.darkButton}`}  style={{opacity:buttonOpacity}}>
						<Typography className={classes.text} style={{color:black}}>昼</Typography>
					</ButtonBase>
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