'use client';
import { Box, Button,  Rating,  Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form';
import { CustomGreenButton,  CustomGreenTextField, fira_sans_600, fira_sans_800 } from '@core/theme/theme';
import { useRouter } from 'next/navigation';
import useToastUI from '@core/hooks/useToastUI';
import useGetSession from '@core/auth/useGetSession';
import Stack from '@mui/system/Stack';
import { useState } from 'react';


export default function ReportFormPage() {
    interface ReviewFormData {
        rating: number;
        topic: string;
        description: string;
    }

    
    const router = useRouter();
    const form = useForm<ReviewFormData>();
    const toastUI = useToastUI();
    const session = useGetSession();


    const onSubmit: SubmitHandler<ReviewFormData> = async (data: ReviewFormData) => {
        try {
            router.push('/user/account'); //ไม่รุ้ต้องไปไหน
        } catch (err) {
            console.error(err);
        }
    };

    const [value, setValue] = useState(0);

    const handleRatingChange = (event, newValue) => {
        setValue(newValue);
        // ทำอย่างอื่นที่คุณต้องการทำเมื่อมีการเปลี่ยนคะแนน
    };



    return (
        <Box sx={{ px: { xs: '8%', md: '15%' } }}>
            <Typography
                py={4}
                align={'center'}
                fontFamily={fira_sans_800.style.fontFamily}
                fontSize={30}
                color={'#472F05'}
            >
                Add Your Review Here
            </Typography>
            <Box
                sx={{
                    py: 8,
                    px: 10,
                    border: '3px solid #472F05',
                    borderRadius: 2,
                    boxShadow: '10px 10px #472F05',
                    backgroundColor: '#EBEBD3',
                }}
            >
                <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
                    <Box
                        sx={{
                            width: '100%',
                            height: 'auto',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 4,
                        }}
                    >
                        <Typography
                            
                            align={'center'}
                            fontFamily={fira_sans_800.style.fontFamily}
                            fontSize={30}
                            color={'#472F05'}
                        >
                            Give Your Rating
                        </Typography>

                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Stack spacing={1} >
                                <Rating 
                                    name="half-rating" 
                                    defaultValue={0} 
                                    precision={0.5} 
                                    value={value} 
                                    onChange={handleRatingChange}  
                                
                                />
                                
                            </Stack>
                        </div>
                        

                        <CustomGreenTextField
                            {...form.register('topic')}
                            name="topic"
                            label="Topic to review"
                            variant="outlined"
                            sx={{ width: '100%' }}
                        />


                        <Typography
                            py={3}
                            align={'center'}
                            fontFamily={fira_sans_800.style.fontFamily}
                            fontSize={30}
                            color={'#472F05'}
                        >
                            Write Your Review
                        </Typography>

                        

                        <textarea
                            
                            rows={5}
                            name="description"
                            placeholder="description"
                            style={{
                                width: 'calc(100% - 10px)',
                                padding: '5px',
                                backgroundColor: '#EBEBD3',
                                boxShadow: '3px 3px #472F05',
                                borderRadius: 0,
                                border: '1px solid #472F05',
                                verticalAlign: 'middle',
                                marginBottom: '10px', // Added margin bottom for spacing
                            }}
                            >

                        </textarea>


                        <Box
                            sx={{
                                marginTop: 2,
                                backgroundColor: '#74A059',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                            }}
                        >
                            <CustomGreenButton
                                type="submit"
                                sx={{
                                    paddingY: 1,
                                    border: '2px solid #472F05',
                                    borderRadius: 0,
                                    boxShadow: '3px 2px #472F05',
                                    fontFamily: fira_sans_600.style.fontFamily,
                                    fontSize: 18,
                                }}
                                onClick={() => form.handleSubmit(onSubmit)}
                            >
                                Add Review
                            </CustomGreenButton>
                        </Box>
                    </Box>
                </form>
            </Box>
        </Box>
    );
}
