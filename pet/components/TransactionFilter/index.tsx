import React from 'react'
import { Grid, FormControl, ButtonProps, createTheme, ThemeProvider } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { makeStyles, styled } from '@mui/styles';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRange } from '@mui/x-date-pickers-pro';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { Dayjs } from 'dayjs';
import { heIL } from '@mui/x-data-grid';
import { Height } from '@mui/icons-material';
import { Fira_Sans_Condensed } from 'next/font/google';

const fira_sans_condensed = Fira_Sans_Condensed({ weight: ['600'], subsets: ['latin'] });

const theme = createTheme({
    typography: {
        fontFamily: fira_sans_condensed.style.fontFamily,
    },
});

const ColorButton = styled(Button)<ButtonProps>({
    color: '#472F05',
    backgroundColor: '#F9C067',
    '&:hover': {
        backgroundColor: '#FAA943',
    },
    width: 115,
    height: 60
});

function TransactionFilter() {
    const [dateRange, setDateRange] = React.useState<DateRange<Date>>([null, null]);
    const [paymentMethod, setPaymentMethod] = React.useState('');
    const [status, setStatus] = React.useState('');

    // Handle sumbit
    const handleSubmit = () => {
        alert('Next sprint la karn');
    }

    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={5}
            columns={{xs: 12}}
            paddingBottom={6}
        >
            <Grid item xs={3.6}>
                <LocalizationProvider dateAdapter={AdapterDayjs} >
                    <DateRangePicker
                        value={dateRange}
                        onChange={(newValue) => setDateRange(newValue)}
                        calendars={1}
                    />
                </LocalizationProvider>
            </Grid>
            <Grid item xs={1.8}>
                <FormControl fullWidth>
                    <InputLabel id='payment-method'>Payment Method</InputLabel>
                    <Select
                        labelId='payment-method'
                        id='payment-method'
                        value={paymentMethod}
                        label='Payment Method'
                        onChange={(e: SelectChangeEvent) => setPaymentMethod(e.target.value)}
                    >
                        <MenuItem value=''>All</MenuItem>
                        <MenuItem value='credit_card'>Credit Card</MenuItem>
                        <MenuItem value='paypal'>Paypal</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={1.8}>
                <FormControl fullWidth>
                    <InputLabel id='status'>Status</InputLabel>
                    <Select
                        labelId='status'
                        id='status'
                        value={status}
                        label='Status'
                        onChange={(e: SelectChangeEvent) => setStatus(e.target.value)}
                    >
                        <MenuItem value=''>All</MenuItem>
                        <MenuItem value='paid'>Paid</MenuItem>
                        <MenuItem value='pending'>Pending</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={1.8}>
                <ColorButton
                    variant='contained'
                    sx={{
                        border: '1px solid #472F05',
                        borderRadius: 1.25,
                        fontSize: 19,
                    }}
                    onClick={handleSubmit}
                >
                    Apply
                </ColorButton>
            </Grid>
        </Grid>
    )
}

export default TransactionFilter;
