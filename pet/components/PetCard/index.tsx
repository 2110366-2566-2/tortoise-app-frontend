import { Box } from "@mui/material"
import Image, { StaticImageData } from "next/image"
import InteractionPetCard from "../InteractionPetCard"

export default function PetCard({petId, petName, breed, seller, price, imgSrc} : 
    {petId: string, petName: string, breed: string, seller: string, price: number, imgSrc: StaticImageData}) {

    return(
        <InteractionPetCard>
        {/* <div style={{border: '2px solid black', boxShadow: '5px 4px #472F05', backgroundColor: '#F3DDD1' }}> */}
        {/* <div className="m-8 w-1/5 h-[300px] shadow-xl border border-dashed border-black"> */}
            <div>
                <Image src={imgSrc}
                    alt="Pet Picture"
                    width={500}
                    height={300}
                    style={{objectFit: 'fill', boxShadow: '0 4px 4px -2px #472F05'}}
                    />
            </div>
            <div style={{padding: 10}}>
                <div style={{textAlign: 'center', fontSize: 20}}>{petName}</div>
                <div>Breed: {breed}</div>
                <div className="flex flex-row justify-between">
                    <div>Seller:  {seller}</div>
                    <div>Price:  ฿{price}</div>
                </div>
            </div>
        </InteractionPetCard>
        // </div>

        // <Box sx={{margin: 4, height: '300px', boxShadow: 10, border: '2px solid grey'}}>
        //     <Box sx={{height: '500px', width: '300px'}}>
        //         <Image src={imgSrc}
        //             alt="Pet Picture"
        //             width={500}
        //             height={300}
        //             className="object-cover rounded-t-xl"
        //             />
        //     </Box>

        // </Box>
    )
}