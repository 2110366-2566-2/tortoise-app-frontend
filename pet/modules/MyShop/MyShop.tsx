import { Box } from '@mui/material';
import CatalogueBySeller from '../../components/pet/CatalogueBySeller';
import SellerShopBriefCard from '../../components/user/SellerShopBriefCard';

export default function MyShop() {
    return (
        <>
            <Box sx={{ p: '16px 10%' }}>
                <SellerShopBriefCard media="" />
            </Box>
            <Box sx={{ p: '16px 10%' }}>
                <CatalogueBySeller />
            </Box>
        </>
    );
}
