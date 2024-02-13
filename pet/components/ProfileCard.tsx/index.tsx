// IMPORTS
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';
import Image from 'next/image';
import Avatar from '@mui/material/Avatar';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import Badge from '@mui/material/Badge';
import useGetPetByID from '../../services/api/v1/pets/useGetPetByID';
import { Fira_Sans_Condensed } from 'next/font/google';

// STYLES
const fira_sans_600 = Fira_Sans_Condensed({weight: ['600'], subsets: ['latin']})

const styles = {
    details: {
        padding: '1rem',
        borderTop: '1px solid #e1e1e1',
    },
    value: {
        padding: '1rem 2rem',
        borderTop: '1px solid #e1e1e1',
        color: '#899499',
    },
};

//APP
export default function ProfileCard({petImage}: {petImage: string}) {

    return (
        <Card variant="outlined" style={{ height: 450, width: 450, margin: 10, boxShadow: '8px 8px #472F05', backgroundColor: '#F3DDD1',  
        borderRadius: 0, border: '2px solid #472F05', position: 'relative'}}>
            {/* <Grid container direction="column" justifyContent="center" alignItems="center" position='relative'>
                CARD HEADER START */}
                <Image
                    src={petImage}
                    alt="Pet Picture"
                    fill={true}
                    style={{
                        // maxWidth: '-webkit-fill-available',
                        // maxHeight: 'fit-content',
                        objectFit: 'fill',
                        // minHeight: 'fit-content',
                        // boxShadow: '0 4px 4px -2px #472F05',
                    }}
                />
                    {/* DESCRIPTION */}
{/* 
                    <Typography variant="h5">{props.name}</Typography>
                    <Typography variant="h6">{props.sub}</Typography>
                    <Typography color="text.secondary">{props.pet_id}</Typography>
                    <Typography color="text.secondary">{props.seller_id}</Typography> */}
                {/* </Grid> */}
            {/* </Grid> */}
        </Card>
    );
}
