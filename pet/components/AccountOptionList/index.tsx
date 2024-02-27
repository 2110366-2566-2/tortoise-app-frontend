import { Box, Typography } from '@mui/material';
import ChangePasswordDialog from '../ChangePasswordDialog';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PasswordIcon from '@mui/icons-material/Password';
import DeleteIcon from '@mui/icons-material/Delete';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from 'react';
import { fira_sans_600 } from '../../core/theme/theme';
import { useRouter } from 'next/navigation';

export default function AccountOptionList() {

    const [openChangePasswordDialog, setOpenChangePasswordDialog] = useState(false);
    const router = useRouter();

    const handleChangePasswordConfirm = async() => {
        console.log('confirm change password')
    }

    return (
        <Box sx={{mt: 2}}>
            <ChangePasswordDialog
                open={openChangePasswordDialog}
                setOpen={setOpenChangePasswordDialog}
                header={'Change Password'}
                cancelText="Cancel"
                confirmText="Confirm"
                handleConfirm={handleChangePasswordConfirm}
            />
            <List
                sx={{ width: 300, border: '2px solid #472F05', boxShadow: '4px 4px #472F05', borderRadius: 1, my: 2}}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader" 
                        sx={{ 
                            pt: 1, 
                            borderTopRightRadius: 1,
                            borderTopLeftRadius: 1, 
                            backgroundColor: '#F9C067'
                        }}
                    >
                        <Typography sx={{fontFamily: fira_sans_600.style.fontFamily, pb: 1, color: '#472F05'}}>Profile Settings</Typography>
                    </ListSubheader>
                }
            >
                <ListItemButton sx={{'&:hover': {backgroundColor: '#E5CB9A'}}} 
                    onClick={() => router.push('account/edit-profile')}    
                >
                    <ListItemIcon>
                        <AccountCircleIcon sx={{color: '#472F05'}} />
                    </ListItemIcon>
                    <ListItemText primary={
                        <Typography sx={{fontFamily: fira_sans_600.style.fontFamily, color: '#472F05'}}>Edit Profile</Typography>
                    }/>
                </ListItemButton>

                <ListItemButton sx={{'&:hover': {backgroundColor: '#E5CB9A'}}}
                    onClick={() => setOpenChangePasswordDialog(true)}
                >
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
            
            </List>
            
            <List
                sx={{ width: 300, border: '2px solid #472F05', boxShadow: '4px 4px #472F05', borderRadius: 1, my: 2}}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader" 
                        sx={{ 
                            pt: 1, 
                            borderTopRightRadius: 1,
                            borderTopLeftRadius: 1, 
                            backgroundColor: '#84B66B'
                        }}
                    >
                        <Typography sx={{fontFamily: fira_sans_600.style.fontFamily, pb: 1, color: '#472F05'}}>Bank Account Settings</Typography>
                    </ListSubheader>
                }
            >

                <ListItemButton sx={{'&:hover': {backgroundColor: '#CAD2C5'}}}
                    onClick={() => router.push('/user/account/bank-account')}
                >
                    <ListItemIcon>
                        <DeleteIcon sx={{color: '#472F05'}} />
                    </ListItemIcon>
                    <ListItemText primary={
                        <Typography sx={{fontFamily: fira_sans_600.style.fontFamily, color: '#472F05' }}>Add Bank Account</Typography>
                    }/>
                </ListItemButton>

                <ListItemButton sx={{'&:hover': {backgroundColor: '#E18A7A'}}}>
                    <ListItemIcon>
                        <DeleteIcon sx={{color: 'red'}} />
                    </ListItemIcon>
                    <ListItemText primary={
                        <Typography sx={{fontFamily: fira_sans_600.style.fontFamily, color: 'red'}}>Delete Bank Account</Typography>
                    }/>
                </ListItemButton>

            </List>
        </Box>
    )
}