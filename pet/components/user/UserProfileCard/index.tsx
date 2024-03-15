// IMPORTS
import Card from '@mui/material/Card';
import { Box, Grid } from '@mui/material';
import Image from 'next/image';
import { Fira_Sans_Condensed } from 'next/font/google';

// STYLES
const fira_sans_600 = Fira_Sans_Condensed({ weight: ['600'], subsets: ['latin'] });

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

interface userprofilecard {
    image: string;
}

// COMPONENT
export default function UserProfileCard(props: userprofilecard) {
    return (
        <Card
            variant="outlined"
            style={{
                height: 400,
                width: 450,
                margin: 10,
                boxShadow: '8px 8px #472F05',
                backgroundColor: '#F3DDD1',
                borderRadius: 0,
                border: '2px solid #472F05',
                position: 'relative',
            }}
        >
            <Image
                src={props.image}
                alt="User Picture"
                fill={true}
                style={{
                    objectFit: 'cover',
                }}
            />
        </Card>
    );
}
