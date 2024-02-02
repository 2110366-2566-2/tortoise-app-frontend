'use client';
import { Typography, TextField, Box, IconButton, InputAdornment, Button } from '@mui/material';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import { useState } from 'react';
import { useForm, useFormContext } from 'react-hook-form';
import { getDogBreed } from '../../services/api/v1/useGetDogBreedTest';

type FormValues = {
    user: string;
    password: string;
};

export default function LoginForm() {
    const form = useForm<FormValues>();
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = (data: FormValues) => {
        console.log(data);
    };

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', p: '5%', gap: '20px' }}>
                <TextField
                    type="text"
                    label="Username or Email"
                    variant="filled"
                    autoComplete="current-usernameoremail"
                    sx={{ boxShadow: 1 }}
                    {...form.register('user')}
                />
                <TextField
                    label="Password"
                    variant="filled"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    sx={{ boxShadow: 1, overflow: 'hidden' }}
                    {...form.register('password')}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <Button variant="outlined" onClick={form.handleSubmit(onSubmit)}>
                    Login
                </Button>
            </Box>
        </form>
    );
}
