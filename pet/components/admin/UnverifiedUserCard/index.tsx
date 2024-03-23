import { fira_sans_400, fira_sans_600, fira_sans_800 } from "@core/theme/theme"
import { Box, Grid, Stack, Typography, Button } from "@mui/material"
import CheckIcon from '@mui/icons-material/Check';
import DoNotDisturbAltIcon from '@mui/icons-material/DoNotDisturbAlt';

interface IUnverifiedUser {
    id: string,
    username: string,
    role: string
}

export default function UnverifiedUserCard(props: IUnverifiedUser) {
    return (
        <Grid item xs={6} md={4}>
            <Box
                border={'2px solid #213948'}
                borderRadius={1}
                boxShadow={'3px 3px #213948'}
                p={2}
                sx={{
                    backgroundColor: '#A8C4D6'
                }}
            >
                <Typography
                    fontFamily={fira_sans_800.style.fontFamily}
                    fontSize={22}
                    textAlign={'center'}
                    color={'#213948'}
                >
                    {props.username}
                </Typography>
                <Stack direction={'row'} spacing={1} textAlign={'center'} flex={'row'} justifyContent={'center'}>
                    <Typography
                        fontFamily={fira_sans_600.style.fontFamily}
                        fontSize={18}
                        textAlign={'center'}
                        color={'#213948'}
                    >
                        Role: 
                    </Typography>
                    <Typography
                        fontFamily={fira_sans_400.style.fontFamily}
                        fontSize={18}
                        textAlign={'center'}
                        color={'#213948'}
                    >
                        {props.role}
                    </Typography>
                </Stack>
                <Box
                    display={'flex'}
                    flexDirection={'row'}
                    justifyContent={'end'}
                    height={35}
                    mt={1}
                >
                    <Button
                        // onClick={}
                        sx={{
                            '&.MuiButton-root': {
                                border: '2px solid #472F05',
                                borderRadius: 0,
                                boxShadow: '2px 2px #472F05',
                                px: 2,
                                mr: 1,
                                color: '#472F05',
                                fontSize: 16,
                                fontFamily: fira_sans_600.style.fontFamily,
                                backgroundColor: '#BAD128',
                            },
                            '&:hover': {
                                backgroundColor: '#9FB322',
                            },
                        }}
                    >
                        <CheckIcon />
                    </Button>
                    <Button
                        // onClick={}
                        sx={{
                            '&.MuiButton-root': {
                                border: '2px solid #472F05',
                                borderRadius: 0,
                                boxShadow: '2px 2px #472F05',
                                px: 2,
                                color: '#472F05',
                                fontSize: 16,
                                fontFamily: fira_sans_600.style.fontFamily,
                                backgroundColor: '#E18A7A',
                            },
                            '&:hover': {
                                backgroundColor: '#CF5555',
                            },
                        }}
                    >
                        <DoNotDisturbAltIcon />
                    </Button>

                </Box>
            </Box>
        </Grid>
    )
}