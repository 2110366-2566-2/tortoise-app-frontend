'use-client';

import { Typography, TextField, Box, IconButton, InputAdornment, createTheme, MenuItem, Button, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles'
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import SelectField from '../../components/SelectField';

type FormValues = {
    role: string
    username: string;
    email: string;
    password: string;
    confirmPassword: string
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

export default function RegisterForm() {

    const form = useForm<FormValues>();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const roles = [
        { label: 'Pet Seller', value: 'seller' },
        { label: 'Pet Buyer', value: 'buyer' },
    ]  

    const sxTextField = { boxShadow: '3px 3px #472F05', '&:hover': {
        backgroundColor: '#F3DDD1'
    } }

    const onSubmit = (data: FormValues) => {
        console.log(data);
    };

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
            <Box sx={{ width: '100%', height: '57vh', display: 'flex', flexDirection: 'column', p: '8%', gap: '20px', overflow: 'scroll' }}>
                {/* <SelectField
                    name="Role"
                    label="Role"
                    choices={[
                        { label: 'Pet Seller', value: 'seller' },
                        { label: 'Pet Buyer', value: 'buyer' },
                    ]}
                    sx={{boxShadow: 1}}
                /> */}
                <CustomTextField
                    {...form.register('role')}
                    select
                    label="Role"
                    defaultValue="buyer"
                    sx={ sxTextField }
                    >
                    {roles.map((option) => (
                        <MenuItem key={option.value} value={option.value} sx={{fontFamily: '__Fira_Sans_Condensed_43412c', 
                        '&:hover': {backgroundColor: '#F3DDD1'}, '&:focus': {backgroundColor: 'rgb(272, 174, 133) !important'} 
                        }}>
                            {option.label}
                        </MenuItem>
                    ))}
                </CustomTextField>
                <CustomTextField
                    {...form.register('username')}
                    label="Username"
                    variant="outlined"
                    autoComplete="current-username"
                    sx={ sxTextField }
                />
                <CustomTextField
                    {...form.register('email')}
                    label="Email"
                    variant="outlined"
                    autoComplete="current-email"
                    sx={ sxTextField }
                />
                <CustomTextField
                    {...form.register('password')}
                    label="Password"
                    variant="outlined"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    sx={ sxTextField }
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
                <CustomTextField
                    {...form.register('confirmPassword')}
                    label="Confirm Password"
                    variant="outlined"
                    type={showConfirmPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    sx={ sxTextField }
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                    {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <Box sx={{backgroundColor: '#FAA943', display: 'flex', flexDirection: 'column', justifyContent: 'center'}} >
                    <ColorButton sx={{paddingY: 0.5, border: '2px solid #472F05', borderRadius: 0, 
                    boxShadow: '3px 2px #472F05', fontFamily: '__Fira_Sans_Condensed_43412c', fontSize: 15}}
                    onClick={form.handleSubmit(onSubmit)}>
                        Register NOW!
                    </ColorButton>
                </Box>
            </Box>
        </form>
    );
}
