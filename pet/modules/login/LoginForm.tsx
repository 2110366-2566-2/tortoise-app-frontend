'use client';

import { Typography, TextField, Box, IconButton, InputAdornment, Button, ButtonProps, styled } from '@mui/material';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import { useState } from 'react';
import { useForm, useFormContext } from 'react-hook-form';
import { Fira_Sans_Condensed } from 'next/font/google';
import { signIn } from 'next-auth/react';
import useLogin from '../../core/auth/useLogin';
import { authClient } from '../../services/clients';
import { useRouter } from 'next/navigation';

type FormValues = {
    username: string;
    password: string;
};

const fira_sans_condensed = Fira_Sans_Condensed({ weight: ['600'], subsets: ['latin'] });

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText('#F9C067'),
    backgroundColor: '#FAA943',
    '&:hover': {
        backgroundColor: '#F79762',
    },
}));

const CustomTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#472F05',
    },
    '& label': {
        fontFamily: fira_sans_condensed.style.fontFamily,
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#B2BAC2',
    },
    '& .MuiInputBase-input': {
        fontFamily: fira_sans_condensed.style.fontFamily,
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderRadius: 0,
            border: '1px solid #472F05',
        },
        '&:hover fieldset': {
            border: '2px solid #472F05',
        },
        '&.Mui-focused fieldset': {
            border: '2px solid #472F05',
        },
        '&.Mui-error': {
            color: 'red',
            boxShadow: '3px 2px #B12000',
        },
    },
});

export default function LoginForm() {
    const router = useRouter();
    const form = useForm<FormValues>();

    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = async (data: FormValues) => {
        if (data.username === '') {
            setUsernameError(true);
            return alert('Username field is blank.');
        }
        if (data.password === '') {
            setPasswordError(true);
            return alert('Password field is blank.');
        }

        const res = await useLogin(data).then((d) => {
            return d;
        });
        console.log(data);
        console.log(res);
        if (!res.error) {
            alert('Login Success');
            router.push('/user/marketplace');
        } else {
            alert(res.error);
        }
    };

    const sxTextField = {
        boxShadow: '3px 3px #472F05',
        '&:hover': {
            backgroundColor: '#F3DDD1',
        },
    };

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', p: '8%', gap: '20px' }}>
                <CustomTextField
                    {...form.register('username')}
                    type="text"
                    label="Username"
                    variant="outlined"
                    autoComplete="current-username"
                    error={usernameError}
                    onChange={() => {
                        setUsernameError(false);
                    }}
                    sx={sxTextField}
                />
                <CustomTextField
                    {...form.register('password')}
                    label="Password"
                    variant="outlined"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    error={passwordError}
                    onChange={() => {
                        setPasswordError(false);
                    }}
                    sx={sxTextField}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={() => {
                                        setShowPassword(!showPassword);
                                    }}
                                >
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <Box
                    sx={{
                        backgroundColor: '#FAA943',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}
                >
                    <ColorButton
                        sx={{
                            paddingY: 0.5,
                            border: '2px solid #472F05',
                            borderRadius: 0,
                            boxShadow: '3px 2px #472F05',
                            fontFamily: fira_sans_condensed.style.fontFamily,
                            fontSize: 15,
                        }}
                        onClick={form.handleSubmit(onSubmit)}
                    >
                        LogIn
                    </ColorButton>
                </Box>

                {/* <Button variant="outlined" onClick={form.handleSubmit(onSubmit)}>
                    Login
                </Button> */}
            </Box>
        </form>
    );
}
