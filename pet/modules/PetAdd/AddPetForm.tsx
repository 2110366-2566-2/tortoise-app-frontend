'use client';
import { Box, MenuItem } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Fira_Sans_Condensed } from 'next/font/google';
import { IPetDetail } from '../../services/api/v1/pets/type';
import { CustomTextField, ColorButton } from '../../components/CustomInput/type';
import ImageDropbox from '../../components/ImageDropbox';

const fira_sans_condensed = Fira_Sans_Condensed({ weight: ['600'], subsets: ['latin'] });

const SEX_CHOICES = [
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
];

export default function AddPetForm() {
    const form = useForm<IPetDetail>();

    const sxTextField = {
        boxShadow: '3px 3px #472F05',
        '&:hover': {
            backgroundColor: '#F3DDD1',
        },
    };

    const onSubmit = async (data: IPetDetail) => {
        console.log(data);
    };

    return (
        <Box sx={{ p: '5%' }}>
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
                        sx={sxTextField}
                    />
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
                    <CustomTextField
                        {...form.register('weight')}
                        label="Weight"
                        variant="outlined"
                        type={'text'}
                        autoComplete="pet-weight"
                        sx={sxTextField}
                    />
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
                    <CustomTextField {...form.register('species')} select label="Species" sx={sxTextField}>
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
                    <CustomTextField
                        {...form.register('behavior')}
                        label="Behaviour"
                        variant="outlined"
                        type={'text'}
                        autoComplete="pet-behavior"
                        sx={sxTextField}
                    />
                    <ImageDropbox cardName="Image" />
                    <CustomTextField
                        {...form.register('medical_records')}
                        label="Medical Records"
                        variant="outlined"
                        autoComplete="pet-medical_records"
                        sx={sxTextField}
                    />
                    <Box
                        sx={{
                            backgroundColor: '#FAA943',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}
                    >
                        <ColorButton
                            sx={{
                                paddingY: 0.5,
                                border: '2px solid #472F05',
                                borderRadius: 0,
                                boxShadow: '3px 2px #472F05',
                                fontFamily: fira_sans_condensed.style.fontFamily,
                                fontSize: 15,
                            }}
                            onClick={form.handleSubmit(onSubmit)}
                        >
                            Add My Pet
                        </ColorButton>
                    </Box>
                </Box>
            </form>
        </Box>
    );
}
