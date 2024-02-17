'use client'

import { createTheme } from '@mui/material/styles';
import { Fira_Sans_Condensed } from 'next/font/google';
export const fira_sans_600 = Fira_Sans_Condensed({ weight: ['600'], subsets: ['latin'] });
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