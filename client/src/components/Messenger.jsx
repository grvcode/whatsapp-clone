import { AppBar, Toolbar, makeStyles, Box } from '@material-ui/core';
import { React, useContext } from 'react';
//comp
import Login from './account/login';
import { AccountContext } from '../context/AccountProvider';
import ChatBox from './ChatBox.jsx';

const useStyles = makeStyles({
    component: {
        background: '#DCDCDC',
        height: '100vh'
    },
    loginHeader: {
        height: 200,
        background: '#00bfa5',
        boxShadow: 'none'
    }
})
const Messenger = () => {
    const classes = useStyles();
    const { account } = useContext(AccountContext);
    return (
        <Box className={classes.component}>
            <AppBar className={classes.loginHeader}>
                <Toolbar></Toolbar>
            </AppBar>
            {account ? <ChatBox /> : <Login />}
        </Box >
    )

}

export default Messenger;