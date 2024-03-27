import useGetSession from '@core/auth/useGetSession';
import { Box, Typography, Stack, Card, Divider, FormLabel, FormControl, Avatar, Button } from '@mui/material';
import { fira_sans_400, fira_sans_600, fira_sans_800 } from '@core/theme/theme';
import useGetUserProfile from '@services/api/v1/user/useGetUserProfile';
import { useState } from 'react';
import SellerReviewDialog from '../SellerReviewDialog';

export default function SellerShopBriefCard() {
    const [openSellerReviewDialog, setOpenSellerReviewDialog] = useState(false);

    const handleSellerReviewDialog = async () => {
        console.log('Seller Review Dialog');
    };

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
            <SellerReviewDialog
                open={openSellerReviewDialog}
                setOpen={setOpenSellerReviewDialog}
                header={`${userProfile.first_name}'s Shop Reviews`}
                handleConfirm={handleSellerReviewDialog}
                cancelText="Close"
                sellerId={session.userID || ''}
                sellerName={userProfile.first_name}
                isMyShop={true}
            />
            <Card
                sx={{ border: '2px solid black', boxShadow: '5px 4px #472F05', backgroundColor: '#F3DDD1', py: '8px' }}
            >
                {/* <Box sx={{ mb: 1, paddingLeft: 3, paddingY: 1 }}>
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
                </Stack> */}
                <Box sx={{ mb: 1 }}>
                    <Typography
                        sx={{
                            overflow: 'hidden',
                            textWrap: 'nowrap',
                            fontFamily: fira_sans_800.style.fontFamily,
                            fontSize: 24,
                            textAlign: 'center',
                            color: '#472F05',
                        }}
                    >
                        Seller's info
                    </Typography>
                </Box>
                <Divider />
                <Stack
                    direction="row"
                    spacing={5}
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyItems: 'center',
                        alignItems: 'center',
                        mt: 2,
                        mx: 3,
                        px: 5,
                        py: 2,
                    }}
                >
                    <Stack direction="column" spacing={1} sx={{ px: 1 }}>
                        <Avatar
                            sx={{
                                width: 150,
                                height: 150,
                                mb: 1.5,
                                boxShadow: '2px 2px 10px 3px grey',
                                border: '1.5px solid #472F05',
                            }}
                            src={userProfile.image}
                        ></Avatar>
                    </Stack>
                    <Stack spacing={2.5} sx={{ flexGrow: 1 }}>
                        <Stack direction="row" spacing={3} sx={{ color: '#472F05' }}>
                            <Typography fontFamily={fira_sans_600.style.fontFamily} fontSize={20}>
                                Name:{' '}
                            </Typography>
                            <Typography fontFamily={fira_sans_400.style.fontFamily} fontSize={20}>
                                {userProfile.first_name} {userProfile.last_name}
                            </Typography>
                        </Stack>
                        <Stack direction="row" spacing={3} sx={{ color: '#472F05' }}>
                            <Typography fontFamily={fira_sans_600.style.fontFamily} fontSize={20}>
                                Tel:{' '}
                            </Typography>
                            <Typography fontFamily={fira_sans_400.style.fontFamily} fontSize={20}>
                                {userProfile.phoneNumber}
                            </Typography>
                        </Stack>
                        <Stack direction="row" spacing={3} sx={{ color: '#472F05' }}>
                            <Typography fontFamily={fira_sans_600.style.fontFamily} fontSize={20}>
                                Rating:{' '}
                            </Typography>
                            <Typography fontFamily={fira_sans_400.style.fontFamily} fontSize={20}>
                                Mock Rating 404
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        width: 'auto',
                        height: 'auto',
                        borderTop: 0,
                    }}
                >
                    <Button
                        onClick={() => setOpenSellerReviewDialog(true)}
                        sx={{
                            '&.MuiButton-root': {
                                border: '2px solid #472F05',
                                boxShadow: '3px 3px #472F05',
                                color: '#472F05',
                                borderRadius: 0,
                                backgroundColor: '#A4B89D',
                                my: 1,
                                px: 2,
                                py: 1,
                            },
                            '&:hover': {
                                backgroundColor: '#97AE8F',
                            },
                        }}
                    >
                        <Typography fontFamily={fira_sans_800.style.fontFamily} fontSize={18} color={'#472F05'}>
                            Review from User
                        </Typography>
                    </Button>
                </Box>
            </Card>
        </Box>
    );
}
