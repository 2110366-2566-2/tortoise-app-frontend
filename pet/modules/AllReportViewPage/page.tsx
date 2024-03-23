'use client'

import { Box, Stack, Typography } from "@mui/material";
import ReportItem from "@components/admin/ReportItem";
import { fira_sans_800 } from "@core/theme/theme";

const mockReport = [
    {id: '001', topic: 'Shit User', category: 'user', reporter: 'Ruthless', desc: 'Please report seller Sia Arm.'},
    {id: '002', topic: 'Top Bar Bug', category: 'system', reporter: 'Poom', desc: 'marketplace doesn\'t navigate.'},
]

export default function AllReportViewPage() {
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
                All Reports from Users
            </Typography>
            <Stack spacing={4} sx={{ flexGrow: 1 }}>
                {
                    mockReport.map(item => 
                        <ReportItem 
                            id={item.id} 
                            topic={item.topic} 
                            category={item.category} 
                            reporter={item.reporter} 
                            desc={item.desc} 
                        />
                    )
                }
            </Stack>
            
        </Box>
    )
}