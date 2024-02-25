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
        MuiCssBaseline: {
            styleOverrides: {
              body: {
                scrollbarColor: "#6b6b6b #2b2b2b",
                "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
                  backgroundColor: "#2b2b2b",
                },
                "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
                  borderRadius: 8,
                  backgroundColor: "#6b6b6b",
                  minHeight: 24,
                  border: "3px solid #2b2b2b",
                },
                "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus": {
                  backgroundColor: "#959595",
                },
                "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active": {
                  backgroundColor: "#959595",
                },
                "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
                  backgroundColor: "#959595",
                },
                "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
                  backgroundColor: "#2b2b2b",
                },
              },
            },
          },
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