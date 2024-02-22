'use client';
import React from 'react';
import { MuiOtpInput } from 'mui-one-time-password-input';
import { CssBaseline, Paper, Box, Container, Typography, Button, ButtonProps, styled, Link } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Router } from 'next/router';
import { useRouter } from 'next/navigation';
import useToastUI from '../../core/hooks/useToastUI';
import { fira_sans_600 } from '../../core/theme/theme';

type FormValues = {
    otp: string;
};

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText('#F9C067'),
    backgroundColor: '#FAA943',
    '&:hover': {
        backgroundColor: '#F79762',
    },
}));

export default function VerifyOTP() {
    const [otp, setOtp] = React.useState('');
    const form = useForm<FormValues>();
    const router = useRouter();
    const toastUI = useToastUI();

    const handleChange = (newValue: string) => {
        setOtp(newValue);
    };

    const handleResend = () => {
        router.push('QHePj3fJPAXKO7rh');
    };

    const handleSubmit = (data: FormValues) => {
        toastUI.toastSuccess('Your password has been resetted successfully!');
        router.push('/user/login');
    };

    return (
        <React.Fragment>
            <form onSubmit={form.handleSubmit(handleSubmit)} noValidate>
                <CssBaseline />
                <Container component="main" maxWidth="sm" sx={{ mb: 4, textAlign: '-webkit-center' }}>
                    <Paper
                        variant="outlined"
                        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 }, boxShadow: '3px 3px #472F05' }}
                    >
                        <Typography>We've Sent The OTP to example@example.example</Typography>
                        <Box
                            sx={{
                                backgroundColor: 'rgb(255, 255, 255)',
                                width: '85%',
                                padding: '1rem',
                                display: 'flex',
                                flexDirection: 'column',
                                rowGap: '16px',
                                ' @media(max-width:479px)': { rowGap: '1.5rem', padding: '1rem' },
                            }}
                        >
                            <MuiOtpInput
                                TextFieldsProps={{
                                    sx: {
                                        boxShadow: '3px 3px #472F05',
                                    },
                                    InputProps: {
                                        sx: {
                                            borderRadius: '0px !important',
                                        },
                                    },
                                }}
                                length={6}
                                value={otp}
                                onChange={handleChange}
                            />
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    rowGap: '4px',
                                }}
                            >
                                <Link onClick={handleResend} sx={{ textAlign: 'end' }}>
                                    Resend OTP?
                                </Link>
                                <ColorButton
                                    type="submit"
                                    sx={{
                                        border: '2px solid #472F05',
                                        borderRadius: 0,
                                        boxShadow: '3px 2px #472F05',
                                        fontFamily: fira_sans_600.style.fontFamily,
                                        fontSize: 15,
                                    }}
                                >
                                    Confirm OTP
                                </ColorButton>
                            </Box>
                        </Box>
                    </Paper>
                </Container>
            </form>
        </React.Fragment>
    );
}
