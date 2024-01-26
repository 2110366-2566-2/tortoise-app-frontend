'use client';
import { Tabs, Tab, TextField, Typography, Box } from '@mui/material';
import { useState } from 'react';
import LoginForm from '../../../../modules/login/LoginForm';

export default function LoginRegisterPage() {
    const [value, setValue] = useState(0);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <>
            <Tabs value={value} onChange={handleTabChange} aria-label="icon label tabs example">
                <Tab icon={''} label="LOGIN" />
                <Tab icon={''} label="REGISTER" />
            </Tabs>
            {value === 0 ? (
                <LoginForm />
            ) : (
                <form>
                    <Typography variant={'h5'}>Register</Typography>
                    <TextField label={'Username'} />
                    <TextField label={'Email'} />
                    <TextField label={'Password'} />
                    <TextField label={'Confirm Password'} />
                </form>
            )}
        </>
    );
}
