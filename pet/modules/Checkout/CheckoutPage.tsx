'use client';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import { useRouter } from 'next/navigation';
import { fira_sans_600, fira_sans_800 } from '../../core/theme/theme';
import { StepIcon } from '@mui/material';
import { ColorButton } from '../../components/CustomInput/type';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center" 
        sx={{
            color: '#472F05',
            fontSize: 16,
            fontFamily: fira_sans_600.style.fontFamily
        }}>
            {'Copyright © PetPal by Tortoise '}
            {/* <Link color="inherit" rel="preload">
                PetPal by Tortoise
            </Link>{' '} */}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const steps = ['Shipping address', 'Payment details', 'Review your order'];

function getStepContent(step: number) {
    switch (step) {
        case 0:
            return <AddressForm />;
        case 1:
            return <PaymentForm />;
        case 2:
            return <Review />;
        default:
            throw new Error('Unknown step');
    }
}

export default function CheckoutPage() {
    const [activeStep, setActiveStep] = React.useState(0);
    const router = useRouter();

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    const sxText = {border: '3px solid #472F05', boxShadow: '6px 6px #472F05'}

    return (
        <React.Fragment>
            <CssBaseline />
            <Container component="main" sx={{ mb: 4, maxWidth: {xs: 'sm', md: 'md'} }}>
                <Paper variant="outlined" 
                sx={{ 
                    my: { xs: 2, md: 3 }, 
                    p: { xs: 2, md: 3 }, 
                    border: '3px solid #472F05',
                    borderRadius: 0,
                    boxShadow: '6px 6px #472F05',
                    backgroundColor: '#FFF8E8'
                    }}
                >
                    <Typography component="h1" variant="h4" align="center" 
                    sx={{ overflow: 'hidden', fontFamily: fira_sans_800.style.fontFamily, color: '#472F05' }}>
                        Checkout
                    </Typography>
                    <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5, overflow: 'hidden' }}>
                        {steps.map((label) => (
                            <Step key={label}
                                sx={{
                                    '& .MuiStepLabel-root .Mui-completed': {
                                        color: '#472F05',
                                    },
                                    '& .MuiStepLabel-root .Mui-active ': {
                                        color: '#472F05', // circle color (ACTIVE)
                                    },
                                    '& .MuiStepLabel-root .MuiStepIcon-text': {
                                        fontFamily: fira_sans_800.style.fontFamily, // circle's number 
                                        fontSize: 15,
                                    }
                                }}
                            >
                                {/* <StepIcon></StepIcon> */}
                                <StepLabel >
                                    <Typography sx={{fontFamily: fira_sans_800.style.fontFamily, color: '#472F05'}}>
                                        {label}
                                    </Typography>
                                </StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? (
                        <React.Fragment>
                            <Typography variant="h5" gutterBottom
                                sx={{ 
                                    fontFamily: fira_sans_800.style.fontFamily, 
                                    color: '#472F05', 
                                    textAlign: 'center',
                                    pb: 2
                                }}
                            >
                                Thank you for your order!
                            </Typography>
                            <Typography variant="subtitle1"
                                sx={{ 
                                    fontFamily: fira_sans_600.style.fontFamily, 
                                    color: '#472F05',
                                    textAlign: 'center',
                                    px: 2
                                }}
                            >
                                Your order number is #2001539. We have emailed your order confirmation, and will send
                                you an update when your order has shipped.
                            </Typography>
                            <Box sx={{ py: '16px', textAlign: 'center' }}>
                                <Button 
                                    onClick={() => {
                                        router.push('/user/my-orders');
                                    }}
                                    sx={{
                                        px: 3, py: 1,
                                        '&.MuiButton-root': {
                                            border: '2px solid #472F05',
                                            boxShadow: '3px 3px #472F05',
                                            color: '#472F05',
                                            borderRadius: 0,
                                            backgroundColor: '#FAA943',
                                        },
                                        '&:hover': {
                                            backgroundColor: '#F79762'
                                        }
                                    }}
                                >
                                    <Typography fontFamily={fira_sans_600.style.fontFamily}>
                                        Track Your Order Here!
                                    </Typography>
                                </Button>
                            </Box>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            {getStepContent(activeStep)}
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end', overflow: 'hidden', mt: 3, mx: 2 }}>
                                {activeStep !== 0 && (
                                    <Button onClick={handleBack} 
                                    sx={{
                                        '&.MuiButton-root': {
                                            border: '2px solid #472F05',
                                            boxShadow: '3px 3px #472F05',
                                            color: '#472F05',
                                            borderRadius: 0,
                                            backgroundColor: '#E18A7A',
                                            px: 2, mr: 3, mb: 3,
                                        },
                                        '&:hover': {
                                            backgroundColor: '#E2725B'
                                        }
                                    }}>
                                        <Typography fontFamily={fira_sans_600.style.fontFamily}>Back</Typography>
                                    </Button>
                                )}
                                <Button onClick={handleNext} 
                                sx={{
                                    '&.MuiButton-root': {
                                        border: '2px solid #472F05',
                                        boxShadow: '3px 3px #472F05',
                                        color: '#472F05',
                                        borderRadius: 0,
                                        backgroundColor: '#FAA943',
                                        px: 2, mr: 3, mb: 3,
                                    },
                                    '&:hover': {
                                        backgroundColor: '#F79762'
                                    }
                                }}>
                                    <Typography fontFamily={fira_sans_600.style.fontFamily}>
                                        {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                                    </Typography>
                                </Button>
                            </Box>
                        </React.Fragment>
                    )}
                </Paper>
                <Copyright />
            </Container>
        </React.Fragment>
    );
}
