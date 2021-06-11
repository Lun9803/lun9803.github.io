import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {  Typography,  IconButton, Tooltip } from '@material-ui/core';
import {  white, onetimeEventsColour, blackSecondary } from '../../../palette';
import moment from 'moment'  
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import WarningIcon from '@material-ui/icons/WarningOutlined'
import ScheduleIcon from '@material-ui/icons/ScheduleOutlined'

const useStyles = makeStyles({

	deleteIconButton:{
		'&:hover':{
			background:onetimeEventsColour
		}
	},
	toolTipText:{
		fontSize:13.75,
		color:white,
	},
	popper:{
		'& div':{
			background:blackSecondary,
			padding:8
		}
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
})
  
function OneTimeEventITEM(props) {

	const classes = useStyles();
	const {
		item,
    onDeleteEvent,
    onEditEvent
	} = props;


	return (
    <Tooltip  
      key={item.id} 
      title={item.description} 
      placement='left'
      PopperProps={{className:classes.popper}}
    >
      <div className={classes.eventListItem}>
        {
          moment().diff(moment(item.time),'minutes')>0 ?
          <WarningIcon style={{width:24,height:24,color:onetimeEventsColour}}/> :
          <ScheduleIcon style={{width:24,height:24,color:white}}/>
        }
        <Typography  style={{color:white,fontSize:16,marginRight:12,marginLeft:12}}>{moment(item.time).format('HH:mm')}</Typography>
        <Typography style={{color:white,fontSize:16,flexGrow:1}}>{item.title}</Typography>
        <IconButton className={classes.deleteIconButton} onClick={()=>onEditEvent(item)}>
          <EditIcon style={{width:20,height:20,color:white}}/>
        </IconButton>
        <IconButton className={classes.deleteIconButton} onClick={()=>onDeleteEvent(item)}>
          <DeleteIcon style={{width:20,height:20,color:white}}/>
        </IconButton>
      </div>
    </Tooltip>
	);
}

export default OneTimeEventITEM;
  