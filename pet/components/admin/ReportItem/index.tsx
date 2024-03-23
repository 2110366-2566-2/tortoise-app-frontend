'use client'

import { useState } from "react";
import { fira_sans_600, fira_sans_800, fira_sans_400 } from "@core/theme/theme"
import { Box, Grid, Stack, Typography, Button } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete'; 
import InfoIcon from '@mui/icons-material/Info';

interface ItemProps {
    id: string,
    topic: string,
    category: string,
    reporter: string
    desc: string
}

export default function ReportItem(props: ItemProps) {

    const [showDesc, setShowDesc] = useState(false)

    const renderDescription = () => {

    }

    return (
        <Stack
            sx={{
                pl: 4,
                pr: 2,
                py: 2,
                border: '3px solid #33586F',
                borderRadius: 1,
                boxShadow: '3px 3px #33586F',
                backgroundColor: '#DAE6EE',
            }}
        >
            <Grid container xs={12}>
                <Grid item xs={12} md={8}>
                    <Stack>
                        <Stack direction={'column'}>
                            <Typography
                                fontFamily={fira_sans_800.style.fontFamily}
                                fontSize={24}
                                color={'#213948'}
                            >
                                Topic:  {props.topic}
                            </Typography>
                            <Stack direction={'row'} spacing={2}>
                                <Stack
                                    direction={'row'}
                                    spacing={1}
                                >
                                    <Typography
                                        fontFamily={fira_sans_600.style.fontFamily}
                                        fontSize={18}
                                        color={'#213948'}
                                    >
                                        ID:  
                                    </Typography>
                                    <Typography
                                        fontFamily={fira_sans_400.style.fontFamily}
                                        fontSize={18}
                                        color={'#213948'}
                                    >
                                        {props.id}
                                    </Typography>
                                    
                                </Stack>
                                
                                <Stack
                                    direction={'row'}
                                    spacing={1}
                                >
                                    <Typography
                                        fontFamily={fira_sans_600.style.fontFamily}
                                        fontSize={18}
                                        color={'#213948'}
                                    >
                                        Category:  
                                    </Typography>
                                    <Typography
                                        fontFamily={fira_sans_400.style.fontFamily}
                                        fontSize={18}
                                        color={'#213948'}
                                    >
                                        {props.category}
                                    </Typography>
                                    
                                </Stack>

                                <Stack
                                    direction={'row'}
                                    spacing={1}
                                >
                                    <Typography
                                        fontFamily={fira_sans_600.style.fontFamily}
                                        fontSize={18}
                                        color={'#213948'}
                                    >
                                        Reporter:  
                                    </Typography>
                                    <Typography
                                        fontFamily={fira_sans_400.style.fontFamily}
                                        fontSize={18}
                                        color={'#213948'}
                                    >
                                        {props.reporter}
                                    </Typography>
                                    
                                </Stack>
                            
                            </Stack>

                        </Stack>
                        
                    </Stack>
                    
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box
                        display={'flex'}
                        flexDirection={'row'}
                        justifyContent={'end'}
                        height={'100%'}
                        mt={{xs: 0.5, md: 0}}
                    >
                         <Button
                            onClick={() => setShowDesc(!showDesc)}
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
                                    backgroundColor: '#FAA943',
                                },
                                '&:hover': {
                                    backgroundColor: '#FB7B43',
                                },
                            }}
                        >
                            <InfoIcon />
                        </Button>

                        <Button
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
                            <DeleteIcon />
                        </Button>
                    </Box>
                </Grid>
                { 
                    showDesc ? 
                        <Grid item xs={12}>
                            <Box
                                mt={2}
                                px={3}
                                py={1}
                                border={'1px solid #213948'}
                                borderRadius={1}
                                boxShadow={'3px 3px #213948'}
                                sx={{
                                    backgroundColor: '#B9D0DE'
                                }}
                            >
                                <Typography
                                    fontFamily={fira_sans_600.style.fontFamily}
                                    fontSize={20}
                                    color={'#213948'}
                                >
                                    Description:
                                </Typography>
                                <Typography
                                    fontFamily={fira_sans_400.style.fontFamily}
                                    fontSize={18}
                                    color={'#213948'}
                                >
                                    {props.desc}
                                </Typography>
                            </Box>
                        </Grid>
                        : null
                }
            </Grid>

        </Stack>
    )
}