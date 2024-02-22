import { Box } from '@mui/material';
import Image from 'next/image';
import InteractionPetCard from '../InteractionPetCard';
import { PetCardProps } from '../PetCatalogue';
import { styled } from '@mui/material';

export default function PetCard(props: PetCardProps) {
    const { petId, petName, breed, seller, price, imgSrc } = props;

    return (
        <InteractionPetCard petId={petId}>
            <Box sx={{ display: 'block', height: 250, position: 'relative' }}>
                <Image
                    src={imgSrc || '/petpicture'}
                    alt="Pet Picture"
                    fill
                    priority
                    sizes="100% 100%"
                    style={{
                        maxWidth: '-webkit-fill-available',
                        maxHeight: 'fit-content',
                        objectFit: 'cover',
                        minHeight: 'fit-content',
                        boxShadow: '0 4px 4px -2px #472F05',
                    }}
                />
            </Box>
            <div style={{ display: 'block', height: 100, padding: 10, overflowWrap: '-moz-initial' }}>
                <div style={{ textAlign: 'center', fontSize: 23 }}>{petName}</div>
                <div>Breed: {breed}</div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'nowrap',
                        justifyContent: 'space-between',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                    }}
                >
                    <p style={{ display: 'block', width: '55%', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        Seller: {seller}
                    </p>
                    <p style={{ display: 'block', width: '45%', textAlign: 'end' }}>Price: ฿{price}</p>
                </div>
            </div>
        </InteractionPetCard>
    );
}
