'use client';

import { Box, IconButton, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export default function PetAddCard() {
    const [hover, setHover] = useState(false);
    const router = useRouter();

    function onMouseAction(event: React.SyntheticEvent) {
        if (event.type == 'mouseover') {
            setHover(true);
        } else {
            setHover(false);
        }
    }

    function handleClick(event: React.MouseEvent) {
        router.push(`my-shop/add`);
    }

    return (
        <Box
            style={
                hover
                    ? {
                          backgroundColor: '#DAF2FF',
                          cursor: 'pointer',
                      }
                    : {
                          backgroundColor: '#E4E4E4',
                          cursor: 'default',
                      }
            }
            sx={{ border: '2px solid black', boxShadow: '5px 4px #472F05', width: '100%', height: '100%' }}
            onMouseOver={(event) => onMouseAction(event)}
            onMouseOut={(event) => onMouseAction(event)}
            onClick={(event) => handleClick(event)}
        >
            <Box>
                <IconButton>
                    <AddCircleIcon sx={{ color: '#4BAE4F' }} />
                </IconButton>
                <Typography>Add Some Fucking Pet By RuthlessYeddo</Typography>
            </Box>
        </Box>
    );
}
