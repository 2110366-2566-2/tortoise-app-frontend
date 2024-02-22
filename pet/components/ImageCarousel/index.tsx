'use client';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';
import Image from 'next/image';

type ImageCarouselProps = {
    itemLists: string[];
};

export default function ImageCarousel(props: ImageCarouselProps) {
    const { itemLists } = props;
    return (
        <Carousel
            sx={{
                width: '100%',
                height: '100%',
                boxShadow: 3,
                position: 'relative',
            }}
            indicators
            swipe
        >
            {itemLists.map((item, idx) => (
                <Paper key={idx}>
                    <Image
                        src={item}
                        alt={item}
                        fill
                        sizes="100% 100%"
                        priority
                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                    />
                </Paper>
            ))}
        </Carousel>
    );
}
