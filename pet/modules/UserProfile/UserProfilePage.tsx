'use client';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Avatar, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import UserProfileCard from '../../components/UserProfileCard';
import UserSettingsCard, { IUserDetail } from '../../components/UserSettings';
import { fira_sans_600 } from '../../core/theme/theme';
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
import Image from 'next/image';

export default function UserProfilePage() {
    const router = useRouter();
    const [hover, setHover] = useState(false);
    const [open, setOpen] = React.useState(true);
    // const handleClick = () => {
    //     setOpen(!open);
    // };

    const mockUserDetail: IUserDetail = {
        _id: '123456789', // example ID
        username: 'johndoehiaraini',
        first_name: 'John',
        last_name: 'Doe',
        gender: 'Male',
        phoneNumber: '123-456-7890',
        image: 'https://drive.google.com/uc?id=1xI9x6kY2nBrd16MQhqLX9mG1e1XIDOLt',
        address: [
            {
                district: 'District',
                subdistrict: 'Subdistrict',
                street: 'Street',
                building: ' Building',
                houseNumber: '123',
                province: 'Province',
                postalCode: '12345',
            },
        ],
    };

    return (
        <Box sx={{ alignSelf: 'center' }}>
            <Box sx={{mb: 1.5, mt: 20, display: 'flex', flexDirection: 'row', position: 'absolute', 
                alignItems: 'end', height: 200}}>
                <Avatar sx={{ width: 180 , height: 180, ml: {xs: 10, md: 20}, mr: {xs: 3, md: 7}, border: '4px solid #472F05', boxShadow: 10 }} />
                <Box sx={{display: 'block'}}>
                    <Typography sx={{fontFamily: fira_sans_600.style.fontFamily, fontSize: 30}}>{mockUserDetail.username}</Typography>
                    <Typography sx={{fontFamily: fira_sans_600.style.fontFamily, fontSize: 16}}>(Email)</Typography>
                    <Typography sx={{fontFamily: fira_sans_600.style.fontFamily, fontSize: 16}}>Tel: {mockUserDetail.phoneNumber}</Typography>
                </Box>
            </Box>
            <Box sx={{height: 250, backgroundColor: '#FFF8E8', position: 'relative', zIndex: -10}}>
                <Image 
                    src={mockUserDetail.image}
                    alt='banner'
                    fill={true}
                    objectFit='cover'
                />
            </Box>
            <Box sx={{height: 140, backgroundColor: '#E5CB9A'}}> </Box>

            <Grid container direction="column" sx={{ overflowX: 'hidden', flexWrap: 'nowrap' }}>
                <Grid
                    container
                    direction={'row' }
                    spacing={10}
                    sx={{
                        display: 'flex',
                        flexWrap: 'nowrap',
                        top: '15vh',
                        px: { xs: 7, md: 12 },
                    }}
                >
                    <Grid item md={4} sx={{ alignSelf: 'normal', justifySelf: 'center', mt: 3}}>
                        <List
                            sx={{ width: 250, border: '2px solid #472F05', boxShadow: '4px 4px #472F05'}}
                            component="nav"
                            aria-labelledby="nested-list-subheader"
                            subheader={
                                <ListSubheader component="div" id="nested-list-subheader" sx={{ pt: 1 }}>
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
                    </Grid>

                    <Grid item md={8} sx={{ width: '100%', alignSelf: 'normal', right: 0}}>
                        <UserSettingsCard
                            _id={mockUserDetail._id}
                            username={mockUserDetail.username}
                            first_name={mockUserDetail.first_name}
                            last_name={mockUserDetail.last_name}
                            gender={mockUserDetail.gender}
                            phoneNumber={mockUserDetail.phoneNumber}
                            address={mockUserDetail.address}
                            image={mockUserDetail.image}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}
