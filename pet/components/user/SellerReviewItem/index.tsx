import { Box, Grid, Stack, Typography, ButtonBase, Button, TextField, Rating } from '@mui/material';
import { fira_sans_400, fira_sans_600, fira_sans_800 } from '@core/theme/theme';
import { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { useForm } from 'react-hook-form';
import { CustomTextField } from '@components/core/CustomInput/type';
import useRemoveReview from '@services/api/v1/review/useRemoveReview';
import useToastUI from '@core/hooks/useToastUI';
import { IReviewQueryParams } from '@services/api/v1/review/type';
import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query';

interface SellerReviewItemProps {
    reviewId: string;
    reviewNo: number;
    rating: number;
    review: string;
    shopComment: string | undefined;
    isCommentable: boolean;
    isAdmin?: boolean;
    refetch?: (options?: RefetchOptions) => Promise<QueryObserverResult<any, any>>;
}

interface ICommentForm {
    comment: string;
}

export default function SellerReviewItem(props: SellerReviewItemProps) {
    const form = useForm<ICommentForm>();
    const toastUI = useToastUI();

    const onSubmit = async (data: ICommentForm) => {
        console.log(data);
        console.log(props.reviewId);
    };

    const deleteReview = useRemoveReview({
        onSuccess: () => {
            toastUI.toastSuccess('Review Deleted');
            props.refetch && props.refetch();
        },
        onError: (error) => {
            toastUI.toastError(`Deletion Failed ${error}`);
        },
    });

    const onDeleteReview = (reviewId: string) => {
        deleteReview.mutate({ review_id: reviewId } as IReviewQueryParams);
    };

    const [showShopResponse, setShowShopResponse] = useState(false);

    return (
        <Box
            sx={{
                m: 3,
                py: 1,
                pl: 3,
                pr: 1,
                border: '2px solid #472F05',
                borderRadius: 1,
                boxShadow: '3px 3px #472F05',
                backgroundColor: '#F7E3B0',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            >
                <Stack direction={'column'} spacing={1}>
                    <Stack direction={'row'} spacing={2} alignItems={'center'}>
                        <Stack direction={'row'} spacing={0.5}>
                            <Typography fontFamily={fira_sans_800.style.fontFamily} fontSize={22} color={'#472F05'}>
                                No.
                            </Typography>
                            <Typography fontFamily={fira_sans_800.style.fontFamily} fontSize={22} color={'#472F05'}>
                                {props.reviewNo}
                            </Typography>
                        </Stack>
                        <Stack direction={'row'} spacing={2} pl={2}>
                            <Rating
                                name="read-only"
                                value={props.rating}
                                readOnly
                                precision={0.1}
                                sx={{
                                    '& .MuiRating-iconFilled': {
                                        color: '#E7932D',
                                    },
                                }}
                            />
                        </Stack>
                    </Stack>
                    <Stack direction={'row'} spacing={1}>
                        <Typography fontFamily={fira_sans_600.style.fontFamily} fontSize={18} color={'#472F05'}>
                            Review:
                        </Typography>
                        <Typography fontFamily={fira_sans_400.style.fontFamily} fontSize={18} color={'#472F05'}>
                            {props.review}
                        </Typography>
                    </Stack>
                </Stack>
                <Box display={'flex'} flexDirection={'column'} justifyContent={'center'}>
                    {!props.isAdmin ? null : (
                        <Button
                            onClick={() => onDeleteReview(props.reviewId)}
                            sx={{
                                '&.MuiButton-root': {
                                    height: 30,
                                    border: '2px solid #472F05',
                                    borderRadius: 0,
                                    boxShadow: '2px 2px #472F05',
                                    px: 2,
                                    color: '#472F05',
                                    fontSize: 16,
                                    fontFamily: fira_sans_600.style.fontFamily,
                                    backgroundColor: '#E18A7A',
                                },
                                '&:hover': {
                                    backgroundColor: '#CF5555',
                                },
                            }}
                        >
                            <DeleteIcon fontSize="small" />
                        </Button>
                    )}

                    <Button onClick={() => setShowShopResponse(!showShopResponse)}>
                        {showShopResponse ? (
                            <ArrowDropUpIcon sx={{ color: '#472F05', width: 30 }} />
                        ) : (
                            <ArrowDropDownIcon sx={{ color: '#472F05', width: 30 }} />
                        )}
                    </Button>
                </Box>
            </Box>
            {showShopResponse ? (
                <Stack
                    direction={'row'}
                    spacing={1}
                    border={'2px solid #472F05'}
                    borderRadius={1}
                    boxShadow={'3px 3px #472F05'}
                    mx={1}
                    my={2}
                    p={1.5}
                    sx={{
                        backgroundColor: '#F0C65E',
                    }}
                >
                    <Typography fontFamily={fira_sans_600.style.fontFamily} fontSize={16} color={'#472F05'}>
                        Shop Comment:
                    </Typography>
                    {props.isCommentable ? (
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
                                <CustomTextField
                                    {...form.register('comment')}
                                    name="comment"
                                    fullWidth
                                    type="text"
                                    size="medium"
                                    label="Comment"
                                />
                                <Button
                                    sx={{
                                        '&.MuiButton-root': {
                                            border: '2px solid #472F05',
                                            boxShadow: '3px 3px #472F05',
                                            color: '#472F05',
                                            borderRadius: 0,
                                            backgroundColor: '#FAA943',
                                            px: 1,
                                            py: 0.5,
                                        },
                                        '&:hover': {
                                            backgroundColor: '#F79762',
                                        },
                                    }}
                                    onClick={form.handleSubmit(onSubmit)}
                                >
                                    <SendIcon
                                        fontSize="small"
                                        sx={{
                                            color: '#472F05',
                                        }}
                                    />
                                </Button>
                            </Box>
                        </form>
                    ) : (
                        <Typography
                            fontFamily={fira_sans_400.style.fontFamily}
                            fontSize={16}
                            color={'#472F05'}
                            sx={{ whiteSpace: 'break-spaces' }}
                        >
                            {props.shopComment}
                        </Typography>
                    )}
                </Stack>
            ) : null}
        </Box>
    );
}
