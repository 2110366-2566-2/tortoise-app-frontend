import { makeStyles } from "@mui/styles";
import { styled } from '@mui/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import { Fira_Sans_Condensed } from 'next/font/google';
import { createTheme } from "@mui/material";

const fira_sans_condensed = Fira_Sans_Condensed({ weight: ['600'], subsets: ['latin'] });

const theme = createTheme({
    typography: {
        fontFamily: fira_sans_condensed.style.fontFamily,
    },
});

const transactionStyles = makeStyles({
    gridItem: {
    },
    date: {
        fontWeight: 800,
        fontSize: '1.2em'
    },
    timestamp: {
        fontWeight: 500,
        fontSize: '1.2em',
        opacity: 0.7
    },
    paymentMethod: {
        fontSize: '1.1em',
        opacity: 0.8
    },
    price: {
        fontSize: '1.2em'
    },
    status: {
        fontSize: '1.2em'
    },
    expandIcon: {
        fontSize: '2em',
        color: '#8b94aa'
    }
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

export default { theme, transactionStyles, ColorButton }
