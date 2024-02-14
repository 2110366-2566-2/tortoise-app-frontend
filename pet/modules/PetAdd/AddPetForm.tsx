'use client';
import { Box, MenuItem, InputAdornment, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Fira_Sans_Condensed } from 'next/font/google';
import { IPetDetail } from '../../services/api/v1/pets/type';
import { CustomTextField, ColorButton } from '../../components/CustomInput/type';
import ImageDropbox from '../../components/ImageDropbox';
import { addPetToSeller } from '../../services/api/v1/pets/usePostPets';
import { useRouter } from 'next/navigation';
import axios from 'axios';
//import { useNavigate } from "react-router-dom";
const fira_sans_condensed = Fira_Sans_Condensed({ weight: ['600'], subsets: ['latin'] });

const SEX_CHOICES = [
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
];

const CATEGORY_CHOICES = [
    { label: 'Dog', value: 'dog' },
    { label: 'Cat', value: 'cat' },
    { label: 'Bird', value: 'bird' },
];

const SPECIES_CHOICES = [
    { label: 'Pug', value: 'Pug' },
    { label: 'Puddle', value: 'Puddle' },
    { label: 'Samoi', value: 'Samoi' },
]

export default function AddPetForm() {
    const form = useForm<IPetDetail>();

    const sxTextField = {
        width: '100%',
        boxShadow: '3px 3px #472F05',
        backgroundColor: 'rgb(255, 255, 255)',
        '&:hover': {
            backgroundColor: '#E5CB9A',
            transition: 'ease-in-out'
        },
    };
    /*
    const onSubmit = async (data: IPetDetail) => {
        console.log(data);
    };
    */

    


    const router = useRouter(); // Initialize the useRouter hook
    const onSubmit = async (data: IPetDetail) => {
        try {
            const sellerId = data.sellerId; // Assuming there's a field named sellerId in the form data
            await addPetToSeller(sellerId, data); // Call the function with the retrieved sellerId and pet data
            console.log('Pet created successfully!');
            router.push('http://localhost:3000/petpal/user/my-shop'); // Navigate to the my-shop page
        } catch (error: any) {
            console.error('Error creating pet:', error.message);
        }
    }
    
   /*
    const navigate= useNavigate();
    const [message, setMessage]= useState('');
    const res= axios.post(`/api/v1/pets/seller/${sellerId}`, data)
    .then(responce=>{ setMessage(responce.data);
    });
    */

    return (
        <Box sx={{my: '5%', mx: '15%'}}>
            <Box sx={{ height: 'auto', width: 300, paddingX: 3, paddingY: 1, fontSize: 22, backgroundColor: '#472F05', 
                color: 'whitesmoke', border: '2px solid black', borderBottom: 0, borderTopLeftRadius: 5, borderTopRightRadius: 5, 
                boxShadow: '3px 3px black', textAlign: 'center' }}>
                    Create your new pet HERE!
            </Box>
            <Box sx={{ py: 5, px: 10, border: '2px solid black', boxShadow: '7px 7px #472F05',
            backgroundColor: '#FDF6F2'}}>
                <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
                    <Box
                        sx={{
                            width: '100%',
                            height: 'auto',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '20px',
                        }}
                    >
                        <CustomTextField
                            {...form.register('name')}
                            label="Name"
                            variant="outlined"
                            autoComplete="pet-name"
                            sx={sxTextField}
                        />
                        <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                            <CustomTextField
                                {...form.register('age')}
                                label="Age"
                                variant="outlined"
                                autoComplete="pet-age"
                                sx={sxTextField}
                            />
                            <CustomTextField
                                {...form.register('price')}
                                label="Price"
                                variant="outlined"
                                autoComplete="pet-price"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">
                                        <Typography sx={{fontFamily: fira_sans_condensed.style.fontFamily}}>฿</Typography>
                                    </InputAdornment>,
                                }}
                                sx={sxTextField}
                            />
                            <CustomTextField
                                {...form.register('weight')}
                                label="Weight"
                                variant="outlined"
                                type={'text'}
                                autoComplete="pet-weight"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">
                                        <Typography sx={{fontFamily: fira_sans_condensed.style.fontFamily}}>kg</Typography>
                                    </InputAdornment>,
                                }}
                                sx={sxTextField}
                            />
                        </Box>
                        
                        <CustomTextField
                            {...form.register('description')}
                            label="Description"
                            variant="outlined"
                            autoComplete="pet-description"
                            multiline
                            minRows={3}
                            maxRows={3}
                            sx={{ ...sxTextField }}
                        />
                        <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                            <CustomTextField {...form.register('sex')} select label="Sex" sx={sxTextField}>
                                {SEX_CHOICES.map((option) => (
                                    <MenuItem
                                        key={option.value}
                                        value={option.value}
                                        sx={{
                                            fontFamily: fira_sans_condensed.style.fontFamily,
                                            '&:hover': { backgroundColor: '#F3DDD1' },
                                            '&:focus': { backgroundColor: 'rgb(272, 174, 133) !important' },
                                        }}
                                    >
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </CustomTextField>
                            <CustomTextField {...form.register('category')} select label="Category" sx={sxTextField}>
                                {CATEGORY_CHOICES.map((option) => (
                                    <MenuItem
                                        key={option.value}
                                        value={option.value}
                                        sx={{
                                            fontFamily: fira_sans_condensed.style.fontFamily,
                                            '&:hover': { backgroundColor: '#F3DDD1' },
                                            '&:focus': { backgroundColor: 'rgb(272, 174, 133) !important' },
                                        }}
                                    >
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </CustomTextField>
                            <CustomTextField {...form.register('species')} select label="Species" sx={sxTextField}>
                                {SPECIES_CHOICES.map((option) => (
                                    <MenuItem
                                        key={option.value}
                                        value={option.value}
                                        sx={{
                                            fontFamily: fira_sans_condensed.style.fontFamily,
                                            '&:hover': { backgroundColor: '#F3DDD1' },
                                            '&:focus': { backgroundColor: 'rgb(272, 174, 133) !important' },
                                        }}
                                    >
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </CustomTextField>
                        </Box>
                        <CustomTextField
                            {...form.register('behavior')}
                            label="Behaviour"
                            variant="outlined"
                            type={'text'}
                            autoComplete="pet-behavior"
                            sx={sxTextField}
                        />
                        <CustomTextField
                            {...form.register('medical_records')}
                            label="Medical Records"
                            variant="outlined"
                            autoComplete="pet-medical_records"
                            sx={sxTextField}
                        />
                        <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <Box sx={{fontFamily: fira_sans_condensed.style.fontFamily, paddingLeft: 1, paddingRight: 3, fontSize: 20}}>
                                Upload Pet Image Here:</Box>
                            <ImageDropbox cardName="Image"/>
                        </Box>
                        
                        <Box
                            sx={{
                                marginTop: 2,
                                backgroundColor: '#FAA943',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                            }}
                        >
                            <ColorButton
                                sx={{
                                    paddingY: 1,
                                    border: '2px solid #472F05',
                                    borderRadius: 0,
                                    boxShadow: '3px 2px #472F05',
                                    fontFamily: fira_sans_condensed.style.fontFamily,
                                    fontSize: 18,
                                }}
                                onClick={form.handleSubmit(onSubmit)}
                            >
                                Add My Pet
                            </ColorButton>
                        </Box>
                    </Box>
                </form>
            </Box>
        </Box>
    );
}
