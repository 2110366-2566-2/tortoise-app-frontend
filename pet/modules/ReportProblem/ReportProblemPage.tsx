'use client';

import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { ThemeProvider, Typography, TextField } from '@mui/material'
import Image from 'next/image'
import catSeeker from '@public/image/catSeeker.png'
import { Box } from '@mui/system'
import transactionTheme from '@core/theme/transactionTheme';
import { ColorButton } from '@components/core/CustomInput/type';
import useCreateReportSystem from '@services/api/v1/report/useCreateReportSystem';
import useToastUI from '@core/hooks/useToastUI';

function ReportProblemPage() {
    const { theme } = transactionTheme;

    const [report, setReport] = useState('');

    const router = useRouter();

    const toastUI = useToastUI();

    const handleSubmit = () => {
        useCreateReportSystem(report).then((res) => {
            setReport('');
            if (res) {
                toastUI.toastSuccess('Report submitted successfully!');
                router.push('/user/marketplace');
            } else {
                toastUI.toastError('Failed to submit report. Please try again later.');
            }
        });
    }

    return (
    <>
        <ThemeProvider theme={theme}>
            <style>
                {`
                body {
                    min-width: 2000px;
                }
            `}
            </style>
            <Typography
                variant="h4"
                sx={{
                    textAlign: 'left',
                    fontWeight: 800,
                    p: '32px 10% 15px',
                    paddingLeft: '25%',
                    paddingTop: '10vh',
                }}
            >
                Report a Problem
            </Typography>
            <Typography
                variant="subtitle1"
                sx={{
                    textAlign: 'left',
                    fontWeight: 500,
                    p: '8px 10% 70px',
                    color: '#808080',
                    paddingLeft: '25%',
                    marginBottom: '-5vh',
                }}
            >
                🐾 Help us keep your furry friend's experience smooth! 🐶 Let us know if you spot any hiccups along the way. 🐱✨
            </Typography>
            <Box display="flex" alignItems="center" justifyContent="space-between" width="100%" height="100%">
                <Box>
                    <Image
                        src={catSeeker}
                        alt="Cat Picture"
                        style={{
                            width: '70%',
                            height: '100%',
                            paddingLeft: '22%',
                        }}
                    />
                </Box>
                <Box
                    sx={{
                        p: 5,
                        width: '500px',
                        height: '350px',
                        border: '1px solid #472F05',
                        boxShadow: '5px 5px #472F05',
                        borderRadius: 5,
                        bgcolor: '#F8F8F8',
                        marginLeft: '-200%',
                        marginRight: '36%',
                        marginTop: '-2%',
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            textAlign: 'center',
                            fontWeight: 500,
                            color: '#808080',
                            marginBottom: '3vh',
                        }}
                    >
                        🐾 Please tell us what problem you found 🐾
                    </Typography>
                    <TextField
                        id="outlined-multiline-static"
                        multiline
                        rows={6}
                        value={report}
                        onChange={(e) => setReport(e.target.value)}
                        placeholder="Please provide your report here..."
                        InputProps={{
                            sx: {
                                borderRadius: 3
                            }
                        }}
                        sx={{
                            width: '100%',
                            marginBottom: '2vh',
                            backgroundColor: '#FFFFFF',
                        }}
                    />
                    <ColorButton
                        variant='contained'
                        onClick={handleSubmit}
                        sx={{
                            border: '1px solid #472F05',
                            borderRadius: 1.25,
                            fontSize: 16,
                            marginLeft: '80%',
                        }}
                    >
                        Submit
                    </ColorButton>
                </Box>
            </Box>
        </ThemeProvider>
    </>
    )
}

export default ReportProblemPage