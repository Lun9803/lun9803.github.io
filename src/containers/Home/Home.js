import React, {useEffect, useState,useRef} from "react";
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import {black, white} from '../../palette'

const useStyles = makeStyles({
    root: {
			display:'flex',
			height:'100vh',
			overflow:'visible'
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


function Home() {
	const classes = useStyles();
	const squares = useRef();
	const [renderedSquare, setRenderedSquare] = useState();

	const renderSquare = (currentSquares) => {		
		for(let i=0; i<currentSquares.length; i++){
			let s = currentSquares[i];
			s.rotation += 0.5;
			s.y += s.velocity;
			if((s.y+s.size+s.velocity*100)>=window.innerHeight)currentSquares.splice(i,1)
		}
		setRenderedSquare([...currentSquares])
	}	

	const generateSquare = ({maxSize=50, minSize=25},squares) => {
		let velocity = 0.5;
		let windowWidth = window.innerWidth;
		let square = {
			size: Math.floor(25+Math.random()*(maxSize-minSize)),
			velocity, 
			x: Math.floor((windowWidth-maxSize)*Math.random()),
			y:0,
			rotation:Math.floor(360*Math.random())
		}
		squares.push(square);
	}

	useEffect(()=>{
		squares.current = [];
		setInterval(()=>{
			generateSquare({},squares.current)
		},1000)
		setInterval(()=>{
			renderSquare(squares.current)
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
				renderedSquare && renderedSquare.map((s,i)=>(
					<div key={`squre-${i}`} style={{transform:`rotate(${s.rotation}deg)`,position:'absolute',height:s.size,width:s.size,left:s.x,top:s.y,background:'#fff',border:'1px solid black'}}>
						
					</div>
				))
			}
    </div>
  );
}

export default Home;