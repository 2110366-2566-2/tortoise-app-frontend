import { Box, Typography } from '@mui/material';
import PetCatalogue from '../../components/PetCatalogue';
import SearchField from '../../components/SearchField';

export default function MarketplacePage() {
    return (
        <div>
            <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 800, p: '32px 10% 8px' }}>
                Your Ideal Pet Awaits
            </Typography>
            <Box sx={{ p: '16px 10%', textAlign: '-webkit-center' }}>
                <SearchField />
            </Box>
            <Box sx={{ p: '16px 10%' }}>
                <PetCatalogue />
            </Box>
        </div>
    );
}
