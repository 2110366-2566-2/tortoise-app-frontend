import { Box } from '@mui/material';
import Image, { StaticImageData } from 'next/image';
import InteractionPetCard from '../InteractionPetCard';
import { PetCardProps } from '../PetCatalogue';

export default function PetCard(props: PetCardProps) {
    const { petId, petName, breed, seller, price, imgSrc } = props;

    return (
        <InteractionPetCard petId={petId}>
            <div>
                <Image
                    src={imgSrc}
                    alt="Pet Picture"
                    width={500}
                    height={300}
                    style={{ objectFit: 'fill', boxShadow: '0 4px 4px -2px #472F05' }}
                />
            </div>
            <div style={{ padding: 10 }}>
                <div style={{ textAlign: 'center', fontSize: 20 }}>{petName}</div>
                <div>Breed: {breed}</div>
                <div className="flex flex-row justify-between">
                    <div>Seller: {seller}</div>
                    <div>Price: ฿{price}</div>
                </div>
            </div>
        </InteractionPetCard>
    );
}
