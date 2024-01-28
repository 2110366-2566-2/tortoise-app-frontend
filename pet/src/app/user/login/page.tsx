'use client';
import { Tabs, Tab, TextField, Typography, Box } from '@mui/material';
import { useState } from 'react';
import LoginForm from '../../../../modules/login/LoginForm';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LoginLeftFrame from '../../../../public/image/login_hero.png';
import Image from 'next/image';
import RegisterForm from '../../../../modules/register/RegisterForm';

export default function LoginRegisterPage() {
    const [value, setValue] = useState(0);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100vw',
                height: '100vh',
                backgroundColor: '#FFD4B7',
            }}
        >
            <Box
                sx={{
                    width: '60%',
                    height: '70%',
                    display: 'flex',
                    flexDirection: 'row',
                    zIndex: 1,
                    borderRadius: '4px',
                    boxShadow: 20,
                }}
            >
                <Box
                    sx={{
                        width: '64%',
                        height: '100%',
                        backgroundColor: '#EEBC97',
                        position: 'relative',
                        display: 'block',
                    }}
                >
                    <Image
                        src={LoginLeftFrame}
                        alt="login_frame"
                        fill={true}
                        sizes="100%"
                        placeholder="blur"
                        blurDataURL={''}
                        style={{ objectFit: 'cover', objectPosition: 'bottom' }}
                    />
                    <Typography
                        sx={{
                            pt: '30%',
                            font: 'inherit',
                            fontSize: '20px',
                            textAlign: 'center',
                            whiteSpace: 'pre-line',
                            overflow: 'hidden',
                        }}
                    >
                        {`WHERE PETS FIND\nTHEIR NEW FAMILIES`}
                    </Typography>
                </Box>
                <Box
                    sx={{
                        backgroundColor: '#FFFEED',
                        width: '36%',
                        height: '100%',
                        display: 'block',
                    }}
                >
                    <Tabs value={value} onChange={handleTabChange} aria-label="icon label tabs example">
                        <Tab icon={<LoginIcon />} label="LOGIN" sx={{ width: '50%' }} />
                        <Tab icon={<PersonAddIcon />} label="REGISTER" sx={{ width: '50%' }} />
                    </Tabs>
                    <Box>{value === 0 ? <LoginForm /> : <RegisterForm />}</Box>
                </Box>
            </Box>
        </Box>
    );
}
