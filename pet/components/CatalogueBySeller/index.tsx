<<<<<<< refs/remotes/origin/develop
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

export interface PetCardProps {
    petId: string
    petName: string;
    breed: string;
    seller: string;
    price: number;
    imgSrc: StaticImageData;
}

export interface PetCatalogueProps {
    sellerName: string;
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function CatalogueBySeller({ sellerName }: PetCatalogueProps) {
    const mockData: PetCardProps[] = [
        { petId: 'D001', petName: 'Mha1', breed: 'IDK', seller: 'Ruthless', price: 10000, imgSrc: Dog1 },
        { petId: 'D002', petName: 'Mha2', breed: 'Pug', seller: 'Khunnnnn', price: 5000,  imgSrc: Dog2 },
        { petId: 'D001', petName: 'Mha1', breed: 'IDK', seller: 'Ruthless', price: 10000, imgSrc: Dog1 },
        { petId: 'D002', petName: 'Mha2', breed: 'Pug', seller: 'Khunnnnn', price: 5000,  imgSrc: Dog2 },
        { petId: 'D001', petName: 'Mha1', breed: 'IDK', seller: 'Ruthless', price: 10000, imgSrc: Dog1 },
        { petId: 'D002', petName: 'Mha2', breed: 'Pug', seller: 'Khunnnnn', price: 5000,  imgSrc: Dog2 },
        { petId: 'D001', petName: 'Mha1', breed: 'IDK', seller: 'Ruthless', price: 10000, imgSrc: Dog1 },
        { petId: 'D002', petName: 'Mha2', breed: 'Pug', seller: 'Khunnnnn', price: 5000,  imgSrc: Dog2 },
    ];

    // กรองข้อมูลที่ seller เป็น "...." เท่านั้น
    const filteredData = mockData.filter((pet) => pet.seller === sellerName);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent='space-around'>
                {filteredData.map((eachpetCard, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                        <PetCard petId={eachpetCard.petId} petName={eachpetCard.petName} breed={eachpetCard.breed} 
                        seller={eachpetCard.seller} price={eachpetCard.price} imgSrc={eachpetCard.imgSrc} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
|||||||
=======
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

export interface PetCardProps {
    petId: string
    petName: string;
    breed: string;
    seller: string;
    price: number;
    imgSrc: StaticImageData;
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function CatalogueBySeller() {
    const mockData: PetCardProps[] = [
        { petId: 'D001', petName: 'Mha1', breed: 'IDK', seller: 'Ruthless', price: 10000, imgSrc: Dog1 },
        { petId: 'D002', petName: 'Mha2', breed: 'Pug', seller: 'Khunnnnn', price: 5000,  imgSrc: Dog2 },
        { petId: 'D001', petName: 'Mha1', breed: 'IDK', seller: 'Ruthless', price: 10000, imgSrc: Dog1 },
        { petId: 'D002', petName: 'Mha2', breed: 'Pug', seller: 'Khunnnnn', price: 5000,  imgSrc: Dog2 },
        { petId: 'D001', petName: 'Mha1', breed: 'IDK', seller: 'Ruthless', price: 10000, imgSrc: Dog1 },
        { petId: 'D002', petName: 'Mha2', breed: 'Pug', seller: 'Khunnnnn', price: 5000,  imgSrc: Dog2 },
        { petId: 'D001', petName: 'Mha1', breed: 'IDK', seller: 'Ruthless', price: 10000, imgSrc: Dog1 },
        { petId: 'D002', petName: 'Mha2', breed: 'Pug', seller: 'Khunnnnn', price: 5000,  imgSrc: Dog2 },
    ];

    // กรองข้อมูลที่ seller เป็น "Khunnnnn" เท่านั้น
    const filteredData = mockData.filter((pet) => pet.seller === 'Khunnnnn');

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent='space-around'>
                {filteredData.map((eachpetCard, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                        <PetCard petId={eachpetCard.petId} petName={eachpetCard.petName} breed={eachpetCard.breed} 
                        seller={eachpetCard.seller} price={eachpetCard.price} imgSrc={eachpetCard.imgSrc} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
>>>>>>> PetProfile&SellerShopPage
