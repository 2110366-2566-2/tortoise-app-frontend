import TopBar from '../../../../../components/TopBar';
import PetCard from '../../../../../components/PetCard';
import Dog1 from '../../../../../public/image/mockdog1.jpg'
import Dog2 from '../../../../../public/image/mockdog2.jpg'


export default function MarketplacePage() {
    return (
        <div>
            <TopBar />
            {/* <h1>This Is My Simple Home Page</h1>
            <h1>Project Name: PETPAL by Tortoise not lonely</h1> */}
            <div className='m-12 flex flex-row flex-wrap justify-around content-around'>
                <PetCard petName='Mha1' imgSrc={Dog1}/>
                <PetCard petName='Mha2' imgSrc={Dog2}/>
            </div>
        </div>
    );
}
