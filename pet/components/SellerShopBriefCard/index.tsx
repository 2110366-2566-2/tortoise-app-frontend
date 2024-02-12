import { Box, Typography, Stack, Card, Divider, FormLabel, FormControl, Avatar } from '@mui/material';

type SellerShopBriefCardProps = {
    media: string;
};

export default function SellerShopBriefCard(props: SellerShopBriefCardProps) {
    const { media } = props;
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
                <Box sx={{ mb: 1 }}>
                    <Typography sx={{ overflow: 'hidden', textWrap: 'nowrap' }}>Personal info</Typography>
                </Box>
                <Divider />
                <Stack direction="row" spacing={3} sx={{ display: 'flex', my: 1 }}>
                    <Stack direction="column" spacing={1} sx={{ px: '16px' }}>
                        <Avatar sx={{ width: 160, height: 160, mb: 1.5, boxShadow: 10 }} src={media}></Avatar>
                    </Stack>
                    <Stack spacing={2} sx={{ flexGrow: 1 }}>
                        <Stack spacing={1}>
                            <FormLabel>Name</FormLabel>
                            <FormControl sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}>
                                <Typography>HELLO</Typography>
                            </FormControl>
                        </Stack>
                        <Stack direction="row" spacing={2}>
                            <FormControl>
                                <FormLabel>Role</FormLabel>
                                <Typography>HELLO</Typography>
                            </FormControl>
                            <FormControl sx={{ flexGrow: 1 }}>
                                <FormLabel>Email</FormLabel>
                                <Typography>HELLO</Typography>
                            </FormControl>
                        </Stack>
                        <div>
                            <FormControl sx={{ display: { sm: 'contents' } }}>
                                <FormLabel>Timezone</FormLabel>
                                <Typography>INDOCHINA</Typography>
                            </FormControl>
                        </div>
                    </Stack>
                </Stack>
            </Card>
        </Box>
    );
}
