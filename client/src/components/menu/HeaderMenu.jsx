import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState, useContext } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { makeStyles } from '@material-ui/core';
import { GoogleLogout } from 'react-google-login';
import { clientId } from '../../common/Data';
import { AccountContext } from '../../context/AccountProvider';


const useStyles = makeStyles({
    menuItem: {
        fontSize: 2,
        padding: '15px 60px 5px 24px'

    }

})
const HeaderMenu = () => {
    const [open, setOpen] = useState(false);
    const { setAccount } = useContext(AccountContext);
    const classes = useStyles();

    const handleClose = () => {
        setOpen(false);
    }
    const handleClick = (event) => {
        setOpen(event.currentTarget);
    }
    const onLogoutSuccess = () => {
        alert("you have been logged out");
        setAccount('');
    }
    return (
        <>
            <MoreVertIcon onClick={handleClick} />
            <Menu
                anchorEl={open}
                keepMounted
                open={Boolean(open)}
                onClose={handleClose}
                getContentAnchorE1={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
            >
                <MenuItem className={classes.menuItem} onClick={handleClose}>Profile</MenuItem>
                <MenuItem className={classes.menuItem} onClick={handleClose}><GoogleLogout
                    clientId={clientId}
                    buttonText="Logout"
                    onLogoutSuccess={onLogoutSuccess}
                    cookiePolicy={'single_host_origin'}>
                </GoogleLogout>
                </MenuItem>
            </Menu>
        </>

    )
}
export default HeaderMenu;