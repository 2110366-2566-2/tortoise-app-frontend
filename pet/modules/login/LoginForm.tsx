'use client';
import { Typography, TextField, Box, IconButton, InputAdornment, Button, ButtonProps, styled } from '@mui/material';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import { useState } from 'react';
import { useForm, useFormContext } from 'react-hook-form';

type FormValues = {
    user: string;
    password: string;
};

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText('#F9C067'),
    backgroundColor: '#FAA943',
    '&:hover': {
      backgroundColor: '#F79762'
    }
}));

const CustomTextField = styled(TextField)({
        
    '& label.Mui-focused': {
        color: '#472F05',
    },
    '& label': {
        fontFamily: '__Fira_Sans_Condensed_43412c',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#B2BAC2',
    },
    '& .MuiInputBase-input': {
        fontFamily: '__Fira_Sans_Condensed_43412c'
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
      },
});

export default function LoginForm() {
    const form = useForm<FormValues>();
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = (data: FormValues) => {
        console.log(data);
    };

    const sxTextField = { boxShadow: '3px 3px #472F05', '&:hover': {
        backgroundColor: '#F3DDD1'
    } }

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', p: '8%', gap: '20px' }}>
                <CustomTextField
                    type="text"
                    label="Username or Email"
                    variant="outlined"
                    autoComplete="current-usernameoremail"
                    sx={ sxTextField }
                    {...form.register('user')}
                />
                <CustomTextField
                    label="Password"
                    variant="outlined"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    sx={ sxTextField }
                    {...form.register('password')}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={() => {setShowPassword(!showPassword)}}>
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <Box sx={{backgroundColor: '#FAA943', display: 'flex', flexDirection: 'column', justifyContent: 'center'}} >
                    <ColorButton sx={{paddingY: 0.5, border: '2px solid #472F05', borderRadius: 0, 
                    boxShadow: '3px 2px #472F05', fontFamily: '__Fira_Sans_Condensed_43412c', fontSize: 15}}
                    onClick={form.handleSubmit(onSubmit)}>
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
