import { useContext } from "react";
import { Box, Dialog, withStyles, makeStyles, Typography, ListItem, List } from "@material-ui/core";
import { GoogleLogin } from 'react-google-login';
import { AccountContext } from "../../context/AccountProvider";

const useStyles = makeStyles({
    component: {
        display: 'flex'

    },
    leftComponent: {
        padding: '56px 0 56px 56px',


    },
    qrcode: {
        height: 264,
        width: 264,
        padding: '50px 0 0 50px'

    },
    title: {
        fontSize: 26,
        marginBottom: '25px',
        color: '#525252',
        fontFamily: 'Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif',
        fontWeight: '300'
    },
    list: {
        '&> *': {
            fontSize: 18,
            padding: 0,
            marginTop: 15,
            lineHeight: '28px',
            fontFamily: 'Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif',
        }
    }
})
const style = {
    dialogPaper: {
        height: '95%',
        width: '60%',
        marginTop: '10%',
        boxShadow: 'none',
        borderRadius: 0,
        maxHeight: '100%',
        maxWidth: '100%'
    }
}
const Login = ({ classes }) => {
    const classname = useStyles();
    const qrcode = 'https://www.ginifab.com/feeds/qr_code/img/qr_code_scanner.jpg';
    const clientId = '987482291410-u38v37rkgnp2bqkcrbosq78sil1neiko.apps.googleusercontent.com';

    const { account, setAccount } = useContext(AccountContext);


    const onloginSuccess = (res) => {
        console.log("login successful", res.profileObj);
        setAccount(res.profileObj);

    }

    const onloginFailure = () => {
        console.log("login failed");
    }

    return (
        <Dialog
            open={true}
            classes={{ paper: classes.dialogPaper }}
            BackdropProps={{ style: { backgroundColor: 'unset' } }}
        >
            <Box className={classname.component}>


                <Box className={classname.leftComponent}>
                    <Typography className={classname.title}>To use WhatsApp on your computer</Typography>
                    <List className={classname.list}>
                        <ListItem>1. Open Whatsapp on your phone</ListItem>
                        <ListItem>2. Tap menu or settings and select Linked Devices</ListItem>
                        <ListItem>3. Open Whatsapp on your phone</ListItem>
                    </List>
                </Box>
                <Box>
                    <img src={qrcode} alt='qr' className={classname.qrcode} />
                    <GoogleLogin
                        clientId={clientId}
                        buttonText=""
                        isSignedIn={true}
                        onSuccess={onloginSuccess}
                        onFailure={onloginFailure}
                        cookiePolicy={'single_host_origin'}

                    />

                </Box>
            </Box>
        </Dialog>
    )
}
export default withStyles(style)(Login);
