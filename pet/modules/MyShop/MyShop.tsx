import { Box } from '@mui/material';
import CatalogueBySeller from '../../components/CatalogueBySeller';
import SellerShopBriefCard from '../../components/SellerShopBriefCard';

export default function MyShop() {
    return (
        <>
            <Box sx={{ p: '16px 10%' }}>
                <SellerShopBriefCard media="" />
            </Box>
            <Box sx={{ p: '16px 10%' }}>
                <CatalogueBySeller sellerName="test" />
            </Box>
        </>
    );
}
