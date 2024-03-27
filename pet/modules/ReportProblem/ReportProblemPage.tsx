'use client';

import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { ThemeProvider, Typography, TextField, MenuItem } from '@mui/material'
import Image from 'next/image'
import catSeeker from '@public/image/catSeeker.png'
import { Box } from '@mui/system'
import transactionTheme from '@core/theme/transactionTheme';
import { ColorButton } from '@components/core/CustomInput/type';
import useCreateReportSystem from '@services/api/v1/report/useCreateReportSystem';
import useToastUI from '@core/hooks/useToastUI';
import { fira_sans_600, sxTextField } from '@core/theme/theme';
import { CustomTextField } from '@components/core/CustomInput/type';

const category_master = [
    { label: 'System', value: 'system' },
    { label: 'Party', value: 'party' },
];

function ReportProblemPage() {

    const { theme } = transactionTheme;

    const [category, setCategory] = useState('system')
    const [report, setReport] = useState('');

    const router = useRouter();
    const toastUI = useToastUI();

    const handleSubmit = () => {
        useCreateReportSystem(report, category).then((res) => {
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
                    min-width: 1000px;
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
                        // height: '350px',
                        border: '1px solid #472F05',
                        boxShadow: '5px 5px #472F05',
                        borderRadius: 2,
                        bgcolor: '#FCCD7A',
                        // marginLeft: '-200%',
                        marginRight: '20%',
                        // marginTop: '-2%',
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            textAlign: 'center',
                            fontWeight: 500,
                            color: '#472F05',
                            marginBottom: '3vh',
                        }}
                    >
                        🐾 Please tell us what problem you found 🐾
                    </Typography>
                    <CustomTextField 
                        fullWidth
                        select 
                        label="Category" 
                        defaultValue={'system'}
                        onChange={(e) => setCategory(e.target.value)}
                        sx={{
                            mb: 2,
                            backgroundColor: '#FEF1DA'
                        }}
                    >
                        {category_master.map((option) => (
                            <MenuItem
                                key={option.value}
                                value={option.value}
                                sx={{
                                    fontFamily: fira_sans_600.style.fontFamily,
                                    '&:hover': { backgroundColor: '#F3DDD1' },
                                    '&:focus': { backgroundColor: 'rgb(272, 174, 133) !important' },
                                }}
                            >
                                {option.label}
                            </MenuItem>
                        ))}
                    </CustomTextField>
                    <TextField
                        id="outlined-multiline-static"
                        multiline
                        rows={6}
                        value={report}
                        onChange={(e) => setReport(e.target.value)}
                        placeholder="Please provide your report here..."
                        InputProps={{
                            sx: {
                                borderRadius: 0,
                                border: '2px solid #472F05',
                            }
                        }}
                        sx={{
                            width: '100%',
                            marginBottom: '2vh',
                            backgroundColor: '#FEF1DA',
                            
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