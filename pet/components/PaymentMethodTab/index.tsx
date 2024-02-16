import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';

type PaymentMethodTabProps = {
    value: number;
    setValue: React.Dispatch<React.SetStateAction<number>>;
};

export default function PaymentMethodTab(props: PaymentMethodTabProps) {
    const { value, setValue } = props;

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
            <Tab icon={<CreditCardIcon />} label="CREDIT/DEBIT CARD" />
            <Tab icon={<QrCodeScannerIcon />} label="PROMPTPAY QR" />
        </Tabs>
    );
}
