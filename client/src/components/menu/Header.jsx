import { Box, makeStyles } from "@material-ui/core";
import ChatIcon from '@mui/icons-material/Chat';
import { display } from "@mui/system";
import { useContext } from "react";

import { AccountContext } from "../../context/AccountProvider";
import HeaderMenu from "./HeaderMenu";



const useStyles = makeStyles({
    header: {
        height: 35,
        background: '#ededed',
        padding: '10px',
        display: 'flex',
        alignItems: 'center'

    },
    avatar: {
        height: 37,
        width: 37,
        borderRadius: '50%'

    },
    icons: {
        marginLeft: 'auto',
        '&>*': {
            marginLeft: '2',
            padding: 8,
            color: '#919191'
        },
        '&:first-child': {
            fontSize: 22,
            marginRight: 8
        }


    }
})
const Header = () => {
    const classes = useStyles();
    const { account } = useContext(AccountContext);

    console.log(account + "this is ");
    return (
        <Box className={classes.header}>
            <img src={account.imageUrl} alt='display-picture' className={classes.avatar} />
            <Box className={classes.icons}>
                <ChatIcon />
                <HeaderMenu />
            </Box>
        </Box>
    )
}
export default Header;
