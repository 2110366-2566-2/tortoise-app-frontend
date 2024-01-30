import PetCatalog from '../../../../../components/PetCatalogue';
import TopBar from '../../../../../components/TopBar';

export default function MarketplacePage() {
    return (
        <div>
            <TopBar />
            {/* <h1>This Is My Simple Home Page</h1>
            <h1>Project Name: PETPAL by Tortoise not lonely</h1> */}
            <div className='mt-8 mx-8'>
                <div className='text-center text-2xl font-bold'>Explore Marketplace</div>
                <PetCatalog />
            </div>
            
        </div>
    );
}
