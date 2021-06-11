import React, {useEffect, useState,useRef} from "react";
import { makeStyles } from '@material-ui/core/styles'
import { white} from '../../palette'

const useStyles = makeStyles({
	root: {
			flexGrow:1
	},
});

const generateParticleStyle = s => {
	return {
		position:'absolute',
		left:s.x-10,
		top:s.y,
		width:20,
		textAlign:'center',
		color:white
	}
	
}

const screenHeight = window.innerHeight;

const generateParticle = ({num=1,minX,maxX},squares) => {
	for(let i=0; i<num; i++){
		let square = {
			velocity:1, 
			x: Math.floor(minX+(maxX-minX)*Math.random()),
			y:0,
			acc:0.05, //acceleration
 			text:Math.random()<0.5?'0':'1'
		}
		squares.push(square);
	}
}


function CodeDrop() {
	const classes = useStyles();
	const squares = useRef();
	const conatainerRef = useRef();
	const [particleArr, setParticleArr] = useState();
	const [buttonOpacity, setButtonOpacity] = useState(-1);

	const renderParticle = (currentSquares) => {	
		if(currentSquares.length===0)return true;
		for(let i=0; i<currentSquares.length; i++){
			let s = currentSquares[i];
			s.y += s.velocity;
			s.velocity += s.acc;
			if(s.y>screenHeight){
				currentSquares.splice(i,1)
			}
		}
		setParticleArr([...currentSquares])
	}	

	useEffect(()=>{
		squares.current = [];
		let generatorInterval = setInterval(()=>{
			if(document.hidden)return;
			let minX = conatainerRef.current.getBoundingClientRect().left;
			let maxX = conatainerRef.current.getBoundingClientRect().right;
			let particleNum = Math.floor(2*Math.random())
			generateParticle({num:particleNum,minX,maxX},squares.current)
		},250)
		let renderInterval = setInterval(()=>{
			if(document.hidden)return;
			renderParticle(squares.current)
		},10)
		return ()=>{
			clearInterval(generatorInterval)
			clearInterval(renderInterval)
		}
	}, [])

	useEffect(()=>{
		if(buttonOpacity<0 || buttonOpacity>=1)return;
		setTimeout(()=>setButtonOpacity(buttonOpacity+0.01),10)
	},[buttonOpacity])

	return (
		<div className={classes.root} ref={conatainerRef}>
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

export default CodeDrop;