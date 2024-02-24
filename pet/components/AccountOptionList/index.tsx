import { Box, Typography } from '@mui/material';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PasswordIcon from '@mui/icons-material/Password';
import DeleteIcon from '@mui/icons-material/Delete';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { fira_sans_600 } from '../../core/theme/theme';

export default function AccountOptionList() {

    return (
        <List
            sx={{ width: 250, border: '2px solid #472F05', boxShadow: '4px 4px #472F05', borderRadius: 1, my: 2}}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader" sx={{ pt: 1, borderRadius: 1 }}>
                    <Typography sx={{fontFamily: fira_sans_600.style.fontFamily, pb: 1}}>Account & Profile Settings</Typography>
                </ListSubheader>
            }
        >
        <ListItemButton sx={{'&:hover': {backgroundColor: '#E5CB9A'}}}>
            <ListItemIcon>
            <AccountCircleIcon sx={{color: '#472F05'}} />
            </ListItemIcon>
            <ListItemText primary={
                <Typography sx={{fontFamily: fira_sans_600.style.fontFamily, color: '#472F05'}}>Edit Profile</Typography>
            }/>
        </ListItemButton>
        <ListItemButton sx={{'&:hover': {backgroundColor: '#E5CB9A'}}}>
            <ListItemIcon>
            <PasswordIcon sx={{color: '#472F05'}} />
            </ListItemIcon>
            <ListItemText primary={
                <Typography sx={{fontFamily: fira_sans_600.style.fontFamily, color: '#472F05'}}>Change Password</Typography>
            }/>
        </ListItemButton>
        <ListItemButton sx={{'&:hover': {backgroundColor: '#E18A7A'}}}>
            <ListItemIcon>
            <DeleteIcon sx={{color: 'red'}} />
            </ListItemIcon>
            <ListItemText primary={
                <Typography sx={{fontFamily: fira_sans_600.style.fontFamily, color: 'red'}}>Delete Account</Typography>
            }/>
        </ListItemButton>
        {/* <ListItemButton onClick={handleClick}>
            <ListItemIcon>
            <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
            {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Starred" />
            </ListItemButton>
            </List>
        </Collapse> */}
        </List>
    )
}