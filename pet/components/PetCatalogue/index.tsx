import PetCard from "../PetCard"
import Dog1 from '../../public/image/mockdog1.jpg'
import Dog2 from '../../public/image/mockdog2.jpg'

export default function PetCatalog() {
    return(
        <div className='mb-12 mx-8 flex flex-row flex-wrap justify-around content-around'>
            <PetCard petName='Mha1' imgSrc={Dog1}/>
            <PetCard petName='Mha2' imgSrc={Dog2}/>
        </div>
    )
}