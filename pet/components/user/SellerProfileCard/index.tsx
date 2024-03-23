import useGetSession from '@core/auth/useGetSession';
import { fira_sans_400, fira_sans_600, fira_sans_800, sxFormLabel, sxTypography } from '@core/theme/theme';
import { Box, Typography, Stack, Card, Divider, FormLabel, FormControl, Avatar } from '@mui/material';
import useGetUserProfile from '@services/api/v1/user/useGetUserProfile';

export default function SellerProfileCard({sellerId}: {sellerId: string}) {

    const { data: sellerProfile, isSuccess: sellerProfileSuccess } = useGetUserProfile(sellerId || '');
    if (!sellerProfileSuccess) {
        return null;
    }
    return (
        <Box
            sx={{
                flex: 1,
                width: '100%',
                my: 3,
                display: 'block',
                position: 'relative',
            }}
        >
            <Card
                sx={{ border: '2px solid black', boxShadow: '5px 4px #472F05', backgroundColor: '#F3DDD1', py: '8px' }}
            >
                <Box sx={{ mb: 1 }}>
                    <Typography
                        sx={{
                            overflow: 'hidden',
                            textWrap: 'nowrap',
                            fontFamily: fira_sans_800.style.fontFamily,
                            fontSize: 24,
                            textAlign: 'center',
                            color: '#472F05'
                        }}
                    >
                        Seller's info
                    </Typography>
                </Box>
                <Divider />
                <Stack direction="row" spacing={5} sx={{ display: 'flex', alignItems: 'center', my: 2, mx: 4 }}>
                    <Stack direction="column" spacing={1} sx={{ px: 1 }}>
                        <Avatar
                            sx={{ 
                                width: 130, 
                                height: 130, 
                                mb: 1.5, 
                                boxShadow: '2px 2px 10px 3px grey',
                                border: '1.5px solid #472F05',
                            }}
                            src={sellerProfile.image}
                        ></Avatar>
                    </Stack>
                    <Stack spacing={2.5} sx={{ flexGrow: 1 }}>
                        <Stack direction="row" spacing={3} sx={{ color: '#472F05' }}>
                            <Typography fontFamily={fira_sans_600.style.fontFamily} fontSize={18}>Name: </Typography>
                            <Typography fontFamily={fira_sans_400.style.fontFamily} fontSize={18}>{sellerProfile.first_name}  {sellerProfile.last_name}</Typography>
                            
                        </Stack>
                        <Stack direction="row" spacing={3} sx={{ color: '#472F05' }}>
                            <Typography fontFamily={fira_sans_600.style.fontFamily} fontSize={18}>Tel: </Typography>
                            <Typography fontFamily={fira_sans_400.style.fontFamily} fontSize={18}>{sellerProfile.phoneNumber}</Typography>
                        </Stack>
                        <Stack direction="row" spacing={3} sx={{ color: '#472F05' }}>
                            <Typography fontFamily={fira_sans_600.style.fontFamily} fontSize={18}>Review: </Typography>
                            <Typography fontFamily={fira_sans_400.style.fontFamily} fontSize={18}>Mock 404</Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Card>
        </Box>
    );
}
