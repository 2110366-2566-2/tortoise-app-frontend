import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import { fira_sans_600 } from '../../core/theme/theme';

type PaymentMethodTabProps = {
    value: number;
    setValue: React.Dispatch<React.SetStateAction<number>>;
};

const CustomTabs = styled(Tabs)({
    '& .css-1bgl54s-MuiButtonBase-root-MuiTab-root.Mui-selected': {
        fontFamily: fira_sans_600.style.fontFamily,
        color: '#6A443E',
    },
    '& .css-1bgl54s-MuiButtonBase-root-MuiTab-root': {
        fontFamily: fira_sans_600.style.fontFamily,
        color: 'grey',
    },
    '& .css-1aquho2-MuiTabs-indicator': {
        backgroundColor: '#6A443E',
        border: '1.75px solid #806550',
    },
    '& .css-1fbyp6v-MuiButtonBase-root-MuiTab-root': {
        fontFamily: fira_sans_600.style.fontFamily,
    },
    '& .MuiButtonBase-root-MuiTab-root.Mui-selected': {
        color: '#6A443E',
    },

});

export default function PaymentMethodTab(props: PaymentMethodTabProps) {
    const { value, setValue } = props;

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <CustomTabs value={value} onChange={handleChange} aria-label="icon label tabs example">
            <Tab icon={<CreditCardIcon />} label="CREDIT/DEBIT CARD" />
            <Tab icon={<QrCodeScannerIcon />} label="PROMPTPAY QR" />
        </CustomTabs>
    );
}
