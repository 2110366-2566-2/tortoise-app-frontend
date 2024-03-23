'use client'

import UnverifiedUserCard from "@components/admin/UnverifiedUserCard";
import { fira_sans_800 } from "@core/theme/theme";
import { Box, Typography, Grid } from "@mui/material";

const mockUserRegistration = [
    {id: '001', username: 'ruthlessYeddo', role: 'buyer' },
    {id: '002', username: 'SiaArmNotAPet', role: 'seller' },
    {id: '002', username: 'khunKrub', role: 'buyer' },
]

export default function RegisterVerificationPage() {
    return (
        <Box
            my={5}
            mx={'7%'}
            py={4}
            px={4}
            border={'2px solid #315369'}
            borderRadius={0}
            boxShadow={'8px 8px #315369'}
            sx={{
                backgroundColor: 'whitesmoke'
            }}
        >
            <Typography
                fontFamily={fira_sans_800.style.fontFamily}
                fontSize={30}
                color={'#213948'}
                textAlign={'center'}
                pb={4}
            >
                Verify New Users' Registration
            </Typography>
            <Box
                sx={{
                    border: '2px solid #213948',
                    boxShadow: '4px 4px #213948',
                    backgroundColor: '#DAE6EE',
                    mx: 3,
                }}
            >
                <Grid container spacing={3} p={2}>
                    {
                        mockUserRegistration.map(item => 
                            <UnverifiedUserCard id={item.id} username={item.username} role={item.role} />
                        )
                    }
                </Grid>
            </Box>
            
            
            
        </Box>
    )
}