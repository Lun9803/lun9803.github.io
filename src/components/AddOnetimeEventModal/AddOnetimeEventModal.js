import React,{ useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Paper, Typography, InputAdornment, IconButton, ThemeProvider, createMuiTheme, InputBase } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit'
import { black, white, blackSecondary } from '../../palette';
import moment from 'moment'  
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DateTimePicker } from '@material-ui/pickers';

const pickerTheme = createMuiTheme({
    palette: {
        secondary: {
            main: white,
        },
        primary:{
            main:blackSecondary
        }
    },
});

const useStyles = makeStyles({
    modal:{
        width:'100vw',
        height:'100vh',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    paper:{
        marginTop:'-10vh',
        width:'35%',
        maxHeight:'80vh',
        padding:24,
        background:black,
        border:`1px solid ${white}`
    },
    timePicker:{
        width:'100%',
        '& input':{
            color:white,
            padding:12,
            fontSize:20,
            paddingLeft:0,
        },
    },
    title:{
        fontSize:24,
        color:white,
        marginBottom:16
    },
    inputTitle:{
        fontSize:20,
        color:white,
        marginBottom:8
    },
    inputBase:{
        color: white,
        fontSize:16,
        padidng:12,
        width:'100%',
        borderBottom:`1px solid ${white}`
    },
    block:{
        marginBottom:24
    }
})
  
function AddEventModal(props) {
    const classes = useStyles();
    const {
        modalOpen,
        setModalOpen
    } = props;
    const [date, setDate] = useState(moment());
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    return (
        <ThemeProvider theme={pickerTheme}>
            <Modal className={classes.modal} open={modalOpen} onClose={()=>setModalOpen(false)}>
                <Paper className={classes.paper}>
                    <Typography className={classes.title}>添加一次性事务</Typography>
                    <div className={classes.block}>
                        <Typography className={classes.inputTitle}>标题</Typography>
                        <InputBase
                            value={title}
                            placeholder={'事务标题，不超过30字'}
                            onChange={event=>{if(event.target.value.length<=30)setTitle(event.target.value)}}
                            className={classes.inputBase}
                        />
                    </div>
                    <div className={classes.block}>
                        <Typography className={classes.inputTitle}>备注</Typography>
                        <InputBase
                            value={description}
                            placeholder={'事务标题，不超过200字'}
                            onChange={event=>{if(event.target.value.length<=200)setDescription(event.target.value)}}
                            className={classes.inputBase}
                            multiline={true}
                            rows={4}
                        />
                    </div>
                    <div className={classes.block}>
                        <Typography className={classes.inputTitle}>时间</Typography>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <DateTimePicker 
                                className={classes.timePicker} 
                                value={date} 
                                onChange={setDate} 
                                minDate={new Date()}
                                format="yyyy 年 MM 月 dd 日  HH 时 mm 分"
                                allowKeyboardControl={false}
                                InputProps={{
                                    endAdornment: (
                                    <InputAdornment position="end" style={{marginLeft:0}}>
                                        <IconButton style={{padding:0}}>
                                            <EditIcon style={{width:24,height:24,color:white}} />
                                        </IconButton>
                                    </InputAdornment>
                                    ),
                                    disableUnderline:true
                                }}
                            />
                        </MuiPickersUtilsProvider>
                    </div>
                </Paper>
            </Modal>
        </ThemeProvider>
    );
}

export default AddEventModal;
  