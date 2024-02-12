'use client';
// IMPORTS
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import Badge from '@mui/material/Badge';
// STYLES
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
export default function ProfileCard(props: any) {
    return (
        <Card variant="outlined" style={{ backgroundColor: '#F3DDD1' }}>
            <Grid container direction="column" justifyContent="center" alignItems="center">
                {/* CARD HEADER START */}
                <Grid item sx={{ p: '1.5rem 0rem', textAlign: 'center' }}>
                    {/* PROFILE PHOTO */}
                    <Badge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        badgeContent={
                            <PhotoCameraIcon
                                sx={{
                                    border: '5px solid white',
                                    backgroundColor: '#ff558f',
                                    borderRadius: '50%',
                                    padding: '.2rem',
                                    width: 35,
                                    height: 35,
                                }}
                            ></PhotoCameraIcon>
                        }
                    >
                        <Avatar sx={{ width: 200, height: 200, mb: 1.5 }} src={props.media}></Avatar>
                    </Badge>

                    {/* DESCRIPTION */}

                    <Typography variant="h5">{props.name}</Typography>
                    <Typography variant="h6">{props.sub}</Typography>
                    <Typography color="text.secondary">{props.pet_id}</Typography>
                    <Typography color="text.secondary">{props.seller_id}</Typography>
                </Grid>
            </Grid>
        </Card>
    );
}
