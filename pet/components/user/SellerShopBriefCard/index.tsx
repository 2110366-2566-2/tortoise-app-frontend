import { Box, Typography, Stack, Card, Divider, FormLabel, FormControl, Avatar } from '@mui/material';
import { Fira_Sans_Condensed } from 'next/font/google';

type SellerShopBriefCardProps = {
    media: string;
};

const fira_sans_600 = Fira_Sans_Condensed({weight: ['600'], subsets: ['latin']})

export default function SellerShopBriefCard(props: SellerShopBriefCardProps) {
    const { media } = props;
    const sxFormLabel = {fontFamily: fira_sans_600.style.fontFamily, fontSize: 24, color: '#472F05'}
    const sxTypography = {fontFamily: fira_sans_600.style.fontFamily, fontSize: 18, paddingLeft: 3, color: 'rgb(72,52,24)'}
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
                    <Typography sx={{ overflow: 'hidden', textWrap: 'nowrap', fontFamily: fira_sans_600.style.fontFamily,
                    fontSize: 28 }}>
                        Personal info
                    </Typography>
                </Box>
                <Divider />
                <Stack direction="row" spacing={5} sx={{ display: 'flex', alignItems: 'center', my: 2, mx: 4 }}>
                    <Stack direction="column" spacing={1} sx={{ px: '16px' }}>
                        <Avatar sx={{ width: 180 , height: 180, mb: 1.5, boxShadow: 15 }} src={media}></Avatar>
                    </Stack>
                    <Stack spacing={2.5} sx={{ flexGrow: 1 }}>
                        <Stack spacing={0}>
                            <FormLabel sx={sxFormLabel}>Name:</FormLabel>
                            <FormControl sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}>
                                <Typography sx={sxTypography}>Ruthless Yes|do</Typography>
                            </FormControl>
                        </Stack>
                        <Stack direction="row" spacing={10}>
                            <FormControl>
                                <FormLabel sx={sxFormLabel}>Role:</FormLabel>
                                <Typography sx={sxTypography}>Seller</Typography>
                            </FormControl>
                            <FormControl sx={{ flexGrow: 1 }}>
                                <FormLabel sx={sxFormLabel}>Email:</FormLabel>
                                <Typography sx={sxTypography}>seller1@petpal.com</Typography>
                            </FormControl>
                        </Stack>
                        <div>
                            <FormControl sx={{ display: { sm: 'contents' } }}>
                                <FormLabel sx={sxFormLabel}>Timezone:</FormLabel>
                                <Typography sx={sxTypography}>INDOCHINA</Typography>
                            </FormControl>
                        </div>
                    </Stack>
                </Stack>
            </Card>
        </Box>
    );
}
