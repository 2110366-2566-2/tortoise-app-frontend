import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import PaymentMethodTab from '../../components/PaymentMethodTab';
import { useState, Fragment } from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';
import MockQR from '../../public/image/MockQR.png';

export default function PaymentForm() {
    const [value, setValue] = useState(0);

    return (
        <Fragment>
            <PaymentMethodTab value={value} setValue={setValue} />
            {value == 0 ? (
                <Grid container spacing={3} sx={{ py: '24px' }}>
                    <Grid item xs={12} md={6}>
                        <TextField
                            required
                            id="cardName"
                            label="Name on card"
                            fullWidth
                            autoComplete="cc-name"
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            required
                            id="cardNumber"
                            label="Card number"
                            fullWidth
                            autoComplete="cc-number"
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            required
                            id="expDate"
                            label="Expiry date"
                            fullWidth
                            autoComplete="cc-exp"
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            required
                            id="cvv"
                            label="CVV"
                            helperText="Last three digits on signature strip"
                            fullWidth
                            autoComplete="cc-csc"
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ overflow: 'hidden' }}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
                            label="Remember credit card details for next time"
                        />
                    </Grid>
                </Grid>
            ) : (
                <Box sx={{ display: 'block', py: '24px', textAlign: '-webkit-center' }}>
                    <Image src={MockQR} alt="QR Image" sizes={'80%'} style={{ position: 'relative' }} />
                </Box>
            )}
        </Fragment>
    );
}
