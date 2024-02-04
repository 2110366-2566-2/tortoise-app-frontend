import { Box, Typography } from "@mui/material";

export default function TopBarHomepage() {
    return (
        <Box sx={{height: '15%', padding: 3, border: '2px solid black', boxShadow: 5, backgroundColor: '#472f05', textAlign: 'center',
        display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <Typography style={{textAlign: 'center', color: 'whitesmoke', fontSize: 40, fontFamily: '__Fira_Sans_Condensed_43412c'}}> 
                PetPal
            </Typography>
        </Box>
    )
}