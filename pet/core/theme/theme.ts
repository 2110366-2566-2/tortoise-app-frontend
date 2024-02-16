'use client'

import { createTheme } from '@mui/material/styles';
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