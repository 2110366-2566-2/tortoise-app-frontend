import useGetSession from '@core/auth/useGetSession';
import { fira_sans_600, sxFormLabel, sxTypography } from '@core/theme/theme';
import { Box, Typography, Stack, Card, Divider, FormLabel, FormControl, Avatar } from '@mui/material';
import useGetUserProfile from '@services/api/v1/user/useGetUserProfile';

export default function SellerShopBriefCard() {
    const session = useGetSession();
    const { data: userProfile, isSuccess: userProfileSuccess } = useGetUserProfile(session.userID || '');
    if (session.role !== 'seller' || !userProfileSuccess) {
        return null;
    }
    return (
        <Box
            sx={{
                flex: 1,
                width: '100%',
                p: '16px 15%',
                display: 'block',
                position: 'relative',
            }}
        >
            <Card
                sx={{ border: '2px solid black', boxShadow: '5px 4px #472F05', backgroundColor: '#F3DDD1', py: '8px' }}
            >
                <Box sx={{ mb: 1, paddingLeft: 3, paddingY: 1 }}>
                    <Typography
                        sx={{
                            overflow: 'hidden',
                            textWrap: 'nowrap',
                            fontFamily: fira_sans_600.style.fontFamily,
                            fontSize: 28,
                        }}
                    >
                        Seller's info
                    </Typography>
                </Box>
                <Divider />
                <Stack direction="row" spacing={5} sx={{ display: 'flex', alignItems: 'center', my: 2, mx: 4 }}>
                    <Stack direction="column" spacing={1} sx={{ px: '16px' }}>
                        <Avatar
                            sx={{ width: 180, height: 180, mb: 1.5, boxShadow: 15 }}
                            src={userProfile.image}
                        ></Avatar>
                    </Stack>
                    <Stack spacing={2.5} sx={{ flexGrow: 1 }}>
                        <Stack spacing={0}>
                            <Typography
                                sx={sxTypography}
                            >{`${userProfile.first_name} ${userProfile.last_name}`}</Typography>
                        </Stack>
                        <Stack direction="row" spacing={10}>
                            <Typography sx={sxTypography}>{userProfile.phoneNumber}</Typography>
                        </Stack>
                        <Stack>
                            <Typography sx={sxTypography}>{`4.4 Mock`}</Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Card>
        </Box>
    );
}
