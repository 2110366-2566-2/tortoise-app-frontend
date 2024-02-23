'use client'

import { Tabs, styled } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { Fira_Sans_Condensed } from 'next/font/google';
export const fira_sans_400 = Fira_Sans_Condensed({ weight: ['400'], subsets: ['latin'] });
export const fira_sans_600 = Fira_Sans_Condensed({ weight: ['600'], subsets: ['latin'] });
export const fira_sans_800 = Fira_Sans_Condensed({ weight: ['800'], subsets: ['latin'] });

export const sxTextField = {
    boxShadow: '3px 3px #472F05',
    '&:hover': {
        backgroundColor: '#E5CB9A',
    },
};

export const THEME = createTheme({
    typography: {
        fontFamily: ['Fira Sans Condensed', 'Roboto Condensed', 'sans-serif'].join(','),
        fontSize: 14,
    },
    components: {
        MuiTypography: {
            variants: [
                {
                    props: { variant: 'h2' },
                    style: {
                        fontFamily: ['Fira Sans Condensed', 'Roboto Condensed', 'sans-serif'].join(','),
                        fontSize: 14,
                    }
                }
            ]
        }
    }
});

export const CustomTabs = styled(Tabs)({
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