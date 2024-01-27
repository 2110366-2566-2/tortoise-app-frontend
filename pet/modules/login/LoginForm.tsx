'use client';
import { Typography, TextField, Box, IconButton, InputAdornment } from '@mui/material';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import { useState } from 'react';

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <form>
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', p: '5%', gap: '20px' }}>
                <TextField
                    name="login.usernameoremail"
                    label="Username or Email"
                    variant="filled"
                    autoComplete="current-usernameoremail"
                    sx={{ boxShadow: 1 }}
                />
                <TextField
                    name="password"
                    label="Password"
                    variant="filled"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    sx={{ boxShadow: 1 }}
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
            </Box>
        </form>
    );
}
