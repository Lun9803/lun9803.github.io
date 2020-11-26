import React,{ useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Paper, Typography, InputAdornment, IconButton, ThemeProvider, createMuiTheme, InputBase, Snackbar } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit'
import { black, white, blackSecondary, onetimeEventsColour } from '../../palette';
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
        marginTop:'-17vh',
        width:'36%',
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
        fontSize:30,
        color:white,
        marginBottom:16
    },
    inputTitle:{
        fontSize:20,
        color:white,
        marginBottom:8
    },
    inputBase:{
        color:white,
        fontSize:16,
        padidng:12,
        width:'100%',
        borderBottom:`1px solid ${white}`
    },
    block:{
        marginBottom:24
    },
    buttons:{
        marginTop:36,
        display:'flex',
        justifyContent:'flex-end'
    },
    iconButton:{
        '&:hover':{
            background:blackSecondary
        }
    },
    snackbar:{
        borderRadius:5,
        '& div':{
            background:onetimeEventsColour,
            padding:'8px 20px',
            fontSize:20
        }
    }
})
  
function AddEventModal(props) {
    const classes = useStyles();
    const {
        modalOpen,
        setModalOpen,
        onAdd
    } = props;
    const [date, setDate] = useState(moment());
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [minDate, setMinDate] = useState();
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    useEffect(()=>{
        if(modalOpen){
            setDate(moment());
            setMinDate(moment());
        }
    },[modalOpen])

    const onCancel = () => {
        setDate(moment());
        setTitle('');
        setDescription('');
        setModalOpen(false);
    }

    const onConfirm = () => {
        let onetimeEvents = {};
        if(localStorage.hasOwnProperty('onetime_events')){
            onetimeEvents = JSON.parse(localStorage.getItem('onetime_events'))
        };
        let dateStr = moment(date).format('YYYY-MM-DD');
        let obj = {
            time:moment(date).format('YYYY-MM-DD HH:mm'),
            description, 
            title
        }
        if(onetimeEvents[dateStr]){
            onetimeEvents[dateStr].push(obj)
        }else{
            onetimeEvents[dateStr] = [obj]
        }
        localStorage.setItem('onetime_events',JSON.stringify(onetimeEvents))
        setSnackbarMessage(
            `事务“${title}”创建成功，`+
            `约${moment(date).utc().diff(moment().utc(),'hours')>=24?(Math.floor(moment(date).diff(moment(),'hours')/24)+'天'):''}`+
            `${moment(date).utc().diff(moment().utc(),'hours')%24}小时`+
            `${moment(date).utc().diff(moment().utc(),'minutes')%60}分钟后开始`
        )
        setSnackbarOpen(true);
        setTimeout(()=>{
            setSnackbarOpen(false)
        },6000)
        onAdd && onAdd();
        onCancel();
    }

    return (
        <ThemeProvider theme={pickerTheme}>
            <Modal className={classes.modal} open={modalOpen} onClose={()=>setModalOpen(false)}>
                <Paper className={classes.paper} style={{width:window.innerWidth<450?'100%':window.innerWidth<1050?450:undefined}}>
                    <Typography className={classes.title}>添加一次性事务</Typography>
                    <div className={classes.block}>
                        <Typography className={classes.inputTitle}>标题</Typography>
                        <InputBase
                            value={title}
                            placeholder={'必填，不超过30字'}
                            onChange={event=>{if(event.target.value.length<=30)setTitle(event.target.value)}}
                            className={classes.inputBase}
                        />
                    </div>
                    <div className={classes.block}>
                        <Typography className={classes.inputTitle}>备注</Typography>
                        <InputBase
                            value={description}
                            placeholder={'必填，不超过200字'}
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
                                ampm={false}
                                onChange={setDate} 
                                minDate={minDate}
                                format="yyyy 年 MM 月 dd 日  HH 时 mm 分"
                                allowKeyboardControl={false}
                                InputProps={{
                                    endAdornment: (
                                    <InputAdornment position="end" style={{marginLeft:0}}>
                                        <IconButton  className={classes.iconButton} style={{padding:0,width:32,height:32}}>
                                            <EditIcon style={{width:24,height:24,color:white}} />
                                        </IconButton>
                                    </InputAdornment>
                                    ),
                                    disableUnderline:true
                                }}
                            />
                        </MuiPickersUtilsProvider>
                    </div>
                    <div className={classes.buttons}>
                        {
                            title.trim()!=='' && description.trim()!=='' &&
                            <IconButton onClick={onConfirm} className={classes.iconButton} style={{borderRadius:3,padding:'3px 12px',marginRight:12}}>
                                <Typography style={{fontSize:24,color:onetimeEventsColour}}>确定</Typography>
                            </IconButton>
                        }
                        <IconButton onClick={onCancel} className={classes.iconButton} style={{borderRadius:3,padding:'3px 12px'}}>
                            <Typography style={{fontSize:24,color:white}}>取消</Typography>
                        </IconButton>
                    </div>
                </Paper>
            </Modal>
            <Snackbar
                className={classes.snackbar} 
                anchorOrigin={{vertical:'bottom',horizontal:'left'}} 
                open={snackbarOpen}
                message={snackbarMessage}
            />
        </ThemeProvider>
    );
}

export default AddEventModal;
  