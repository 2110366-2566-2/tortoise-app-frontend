'use client';
import { Box, Button,  Rating,  Typography, Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form';
import { CustomGreenButton,  CustomGreenTextField, fira_sans_400, fira_sans_600, fira_sans_800 } from '@core/theme/theme';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import useToastUI from '@core/hooks/useToastUI';
import useGetSession from '@core/auth/useGetSession';
import useSubmitReview from '@services/api/v1/review/useSubmitReview';
import { useState } from 'react';
import { ISubmitReviewPayload } from '@services/api/v1/review/type';
import { ColorButton, CustomTextField } from '@components/core/CustomInput/type';

export default function ReportFormPage() {
    
    const router = useRouter();
    const form = useForm<ISubmitReviewPayload>();
    const searchParams = useSearchParams()
    const toastUI = useToastUI();
    const session = useGetSession();

    const [ratingScore, setRatingScore] = useState<number>(0);

    const { mutateAsync: mutateSubmitReview } = useSubmitReview({
        onSuccess: () => {
            router.push('/user/transaction-history')
            toastUI.toastSuccess('Review Submitted!');
            // window.location.reload();
        },
        onError: (err) => {
            toastUI.toastError(err.message);
        },
    });

    const onSubmit: SubmitHandler<ISubmitReviewPayload> = async (data: ISubmitReviewPayload) => {
        try {
            const bid = searchParams.get('bid')
            const sid = searchParams.get('sid')
            if(bid !== null && sid !== null) {
                data.reviewer_id = bid
                data.reviewee_id = sid
                data.rating_score = ratingScore
                console.log(data)
                await mutateSubmitReview(data);
            }
            else {
                toastUI.toastError('Error on trying to add Review')
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <Box sx={{ px: { xs: '5%', md: '20%' } }}>
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
                    py: 4,
                    px: 10,
                    border: '3px solid #472F05',
                    borderRadius: 2,
                    boxShadow: '10px 10px #472F05',
                    backgroundColor: '#FDE2B2',
                }}
            >
                <Stack
                    py={3}
                    direction={'row'}
                    display={'flex'}
                    flexDirection={'row'}
                    justifyContent={'center'}
                    spacing={2}
                >
                    <Typography
                        fontFamily={fira_sans_800.style.fontFamily}
                        fontSize={22}
                        color={'#472F05'}
                    >
                        Seller Name: 
                    </Typography>
                    <Typography
                        fontFamily={fira_sans_600.style.fontFamily}
                        fontSize={20}
                        color={'#472F05'}
                    >
                        {searchParams.get('sname')}
                    </Typography>
                </Stack>
                <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
                    <Box
                        sx={{
                            p: 3,
                            width: '100%',
                            height: 'auto',
                            display: 'flex',
                            flexDirection: 'column',
                            border: '2px solid #472F05',
                            borderRadius: 1,
                            boxShadow: '3px 3px #472F05',
                            backgroundColor: '#FEEED2',
                            gap: 2,
                        }}
                    >
                        <Stack
                            direction={'row'}
                            display={'flex'}
                            flexDirection={'row'}
                            justifyContent={'center'}
                            spacing={3}
                        >
                            <Typography
                                align={'center'}
                                fontFamily={fira_sans_800.style.fontFamily}
                                fontSize={20}
                                color={'#472F05'}
                            >
                                Give Your Rating:
                            </Typography>

                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <Stack spacing={1} >
                                    <Rating 
                                        name="rating_score" 
                                        defaultValue={0}
                                        precision={0.5} 
                                        value={ratingScore}
                                        size='large'
                                        onChange={(e, newValue) => {
                                            if(!newValue) {
                                                setRatingScore(0)
                                            }
                                            else{
                                                setRatingScore(newValue)
                                            }
                                        }}  
                                    />
                                    
                                </Stack>
                            </div>
                        </Stack>   

                        <CustomTextField
                            {...form.register('description')}
                            name="description"
                            label="Add Your Review"
                            variant="outlined"
                            type='text'
                            sx={{ width: '100%' }}
                        />

                        <Box
                            sx={{
                                marginTop: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                            }}
                        >
                            <Button
                                onClick={form.handleSubmit(onSubmit)}
                                sx={{
                                    '&.MuiButton-root': {
                                        border: '2px solid #472F05',
                                        boxShadow: '2px 2px #472F05',
                                        color: '#472F05',
                                        borderRadius: 0,
                                        backgroundColor: '#FAA943',
                                        px: 2,
                                        py: 1,
                                    },
                                    '&:hover': {
                                        backgroundColor: '#F79762',
                                    },
                                }}
                            >
                                <Typography
                                    color={'#472F05'}
                                    fontFamily={fira_sans_800.style.fontFamily}
                                    fontSize={16}
                                >
                                    Add Review
                                </Typography>
                            </Button>
                        </Box>
                    </Box>
                </form>
            </Box>
        </Box>
    );
}
