'use client';

import { Box, Stack, Tab, Tabs, Typography } from '@mui/material';
import ReportItem from '@components/admin/ReportItem';
import { fira_sans_800 } from '@core/theme/theme';
import useGetAllReport from '@services/api/v1/report/useGetAllReport';
import { useState } from 'react';
import { AllReportQueryParams } from '@services/api/v1/report/type';

export default function AllReportViewPage() {
    const [reportValue, setReportValue] = useState('all');
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setReportValue(newValue);
    };

    const reportQuery = { is_solved: false, category: reportValue } as AllReportQueryParams;
    const { data: reportData, isSuccess: getReportSuccess } = useGetAllReport(reportQuery);

    if (!getReportSuccess) return null;

    const reports = [...(reportData?.reports_category_party || []), ...(reportData?.reports_category_system || [])];

    return (
        <Box>
            <Box sx={{ width: '100%' }}>
                <Tabs value={reportValue} onChange={handleChange} aria-label="Report Tabs">
                    <Tab value="all" label="All Reports" />
                    <Tab value="party" label="Community Reports" />
                    <Tab value="system" label="System Reports" />
                </Tabs>
            </Box>
            <Box
                my={5}
                mx={'7%'}
                py={4}
                px={4}
                border={'2px solid #315369'}
                borderRadius={0}
                boxShadow={'8px 8px #315369'}
                sx={{
                    backgroundColor: 'whitesmoke',
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
                    {reports.map((eachReport) => (
                        <ReportItem
                            key={eachReport.id}
                            id={eachReport.id}
                            topic={eachReport.id}
                            category={eachReport.reportee_id ? 'COMMUNITY' : 'SYSTEM'}
                            reporter={eachReport.reporter_id}
                            desc={eachReport.description}
                        />
                    ))}
                </Stack>
            </Box>
        </Box>
    );
}
