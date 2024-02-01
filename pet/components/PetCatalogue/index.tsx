'use client';
import PetCard from '../PetCard';
import Dog1 from '../../public/image/mockdog1.jpg';
import Dog2 from '../../public/image/mockdog2.jpg';

import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { StaticImageData } from 'next/image';

interface PetCardProps {
    petName: string;
    imgSrc: StaticImageData;
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function PetCatalogue() {
    const mockData: PetCardProps[] = [
        { petName: 'Mha1', imgSrc: Dog1 },
        { petName: 'Mha2', imgSrc: Dog2 },
        { petName: 'Mha3', imgSrc: Dog1 },
        { petName: 'Mha4', imgSrc: Dog2 },
        { petName: 'Mha5', imgSrc: Dog1 },
        { petName: 'Mha6', imgSrc: Dog2 },
        { petName: 'Mha7', imgSrc: Dog1 },
    ];

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent='space-around'>
                {mockData.map((eachpetCard, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                        <PetCard petName={eachpetCard.petName} imgSrc={eachpetCard.imgSrc} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
