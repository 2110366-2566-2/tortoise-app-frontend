import { Box, Typography } from '@mui/material';
import { Fira_Sans_Condensed } from 'next/font/google';

const fira_sans_condensed = Fira_Sans_Condensed({ weight: ['600'], subsets: ['latin'] });

export default function TopBarHomepage() {
    return (
        <Box
            sx={{
                height: '15%',
                padding: 3,
                border: '2px solid black',
                boxShadow: 5,
                backgroundColor: '#472f05',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
            }}
        >
            <Typography
                style={{
                    textAlign: 'center',
                    color: 'whitesmoke',
                    fontSize: 40,
                    fontFamily: fira_sans_condensed.style.fontFamily,
                }}
            >
                PetPal
            </Typography>
        </Box>
    );
}
