'use client';

import UnverifiedUserCard from '@components/admin/UnverifiedUserCard';
import { fira_sans_800 } from '@core/theme/theme';
import { Box, Typography, Grid } from '@mui/material';
import { ISellerProfile } from '@services/api/v1/seller/type';
import useGetSellers from '@services/api/v1/seller/useGetSellers';

export default function RegisterVerificationPage() {
    const { data: sellersData, isSuccess: isSellersSuccess, refetch: refetchSellers } = useGetSellers();

    if (!isSellersSuccess) {
        return null;
    }
    const unverifiedSellers = sellersData.map((eachSeller) => {
        if (eachSeller.status !== 'verified') {
            return eachSeller;
        }
    });

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
                    {(unverifiedSellers || ([] as ISellerProfile[])).map((eachSeller, idx) => {
                        if (eachSeller?.id) {
                            return (
                                <UnverifiedUserCard
                                    key={idx}
                                    id={eachSeller.id}
                                    first_name={eachSeller.first_name}
                                    last_name={eachSeller.last_name}
                                    license={eachSeller.license || '-'}
                                    refetchSellers={refetchSellers}
                                />
                            );
                        }
                    })}
                </Grid>
            </Box>
        </Box>
    );
}
