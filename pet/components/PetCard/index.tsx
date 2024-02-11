import { Box } from "@mui/material"
import Image, { StaticImageData } from "next/image"
import InteractionPetCard from "../InteractionPetCard"
import { PetCardProps } from "../PetCatalogue";
import { styled } from "@mui/material";

export default function PetCard(props: PetCardProps) {

    const { petId, petName, breed, seller, price, imgSrc } = props

    return(
        <InteractionPetCard>
        {/* <div style={{border: '2px solid black', boxShadow: '5px 4px #472F05', backgroundColor: '#F3DDD1' }}> */}
        {/* <div className="m-8 w-1/5 h-[300px] shadow-xl border border-dashed border-black"> */}
            <div style={{display: 'block', height: 250, position: 'relative'}}>
                <Image
                    src={imgSrc}
                    alt="Pet Picture"
                    fill={true}
                    style={{ maxWidth: '-webkit-fill-available', maxHeight: 'fit-content', objectFit: 'cover',
                    minHeight: 'fit-content', boxShadow: '0 4px 4px -2px #472F05' } }
                />
            </div>
            <div style={{display: 'block', height: 100, padding: 10, overflowWrap: '-moz-initial'}}>
                <div style={{textAlign: 'center', fontSize: 23}}>{petName}</div>
                <div>Breed: {breed}</div>
                <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'space-between', whiteSpace: 'nowrap',
                overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    <p style={{display: 'block', width: '55%',overflow: 'hidden', textOverflow: 'ellipsis'}}>Seller:  {seller}</p>
                    <p style={{display: 'block', width: '45%', textAlign: 'end'}}>Price:  ฿{price}</p>
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