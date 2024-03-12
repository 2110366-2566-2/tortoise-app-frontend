'use client';
import { Box, Typography } from '@mui/material';
import PetCatalogue from '../../components/PetCatalogue';
import SearchField from '../../components/SearchField';
import ImageCarousel from '../../components/ImageCarousel';

export default function MarketplacePage() {
    const carouselItems = [
        'https://drive.google.com/uc?id=17CcoKvTnth9Cm2Dm2XNQ3MmB-vNx0Mof',
        'https://drive.google.com/uc?id=1lOfP2KfgcsjKIhLmbcm622MtglHGCYwi',
    ];

    return (
        <Box sx={{ textAlign: '-webkit-center' }}>
            {/* <Box sx={{ height: '50vh', p: '24px 10% 8px' }}>
                <ImageCarousel itemLists={carouselItems} />
            </Box> */}

            <Box sx={{ p: '32px 10% 8px' }}>
                <SearchField />
            </Box>
            <Box sx={{ p: '16px 10%' }}>
                <PetCatalogue />
            </Box>
        </Box>
    );
}
