'use client';

import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TransitionProps } from '@mui/material/transitions';
import { fira_sans_400, fira_sans_600, fira_sans_800 } from '../../../core/theme/theme';
import { Box, Grid, Zoom, InputAdornment, IconButton, Typography, Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import { IChangePassword, IChangePasswordParams } from '../../../services/api/v1/user/type';
import { CustomPinkTextField } from '../../../core/theme/theme';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import { useState } from 'react';
import useToastUI from '../../../core/hooks/useToastUI';
import { CustomDialogProps } from '../../core/CustomDialog/type';
import { useUpdateUserPassword } from '@services/api/v1/user/useUpdateUserPassword';
import { useRouter } from 'next/navigation';
import useGetSession from '@core/auth/useGetSession';
import useLogout from '@core/auth/useLogout';
import useGetUserProfile from '@services/api/v1/user/useGetUserProfile';
import SellerReviewItem from '../SellerReviewItem';
import useGetSellerReviews from '@services/api/v1/review/useGetSellerReview';
import { SellerReview } from '@services/api/v1/review/type';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Zoom ref={ref} {...props} />;
});

type SellerReviewDialogProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    header: string;
    description?: string;
    cancelText?: string;
    confirmText?: string;
    handleConfirm: React.MouseEventHandler<HTMLButtonElement>;
    sellerId: string;
    sellerName: string;
    isMyShop: boolean;
    isAdmin?: boolean; 
};

const mockSellerReview = [
    {
        id: '65fc92785eb1483f3782566c',
        reviewer_id: '65d224798a12370d51961861',
        reviewee_id: '65c7356900dfa761aed36120',
        rating_score: 0,
        description: "It's not a dog!",
        comment_records: [
            {
                user_id: '65d224798a12370d51961861',
                comment: 'HAHAHAHAHAHA!',
                time: '2024-03-21T20:03:34.322Z',
            },
            {
                user_id: '65d224798a12370d51961861',
                comment: 'HAHAHAHAHAHA!',
                time: '2024-03-21T20:03:59.68Z',
            },
        ],
        time: '2024-03-21T20:03:04.693Z',
    },
    {
        id: '65fc9343fa2fb34116cda9b9',
        reviewer_id: '65d224798a12370d51961861',
        reviewee_id: '65c7356900dfa761aed36120',
        rating_score: 0,
        description: "It's not a dog!",
        comment_records: [
            {
                user_id: '65d224798a12370d51961861',
                comment: 'WHAT?!',
                time: '2024-03-21T20:06:42.24Z',
            },
        ],
        time: '2024-03-21T20:06:27.717Z',
    },
    {
        id: '65fc94822f423b8260607f14',
        reviewer_id: '65d224798a12370d51961861',
        reviewee_id: '65c7356900dfa761aed36120',
        rating_score: 1,
        description: "It's not a dog!",
        comment_records: [],
        time: '2024-03-21T20:11:46.713Z',
    },
    {
        id: '65fc951aba8472d4b1221fb1',
        reviewer_id: '65d224798a12370d51961861',
        reviewee_id: '65c7356900dfa761aed36120',
        rating_score: 2,
        description: "It's not a dog!",
        comment_records: [],
        time: '2024-03-21T20:14:18.842Z',
    },
    {
        id: '65fc9536ba8472d4b1221fb3',
        reviewer_id: '65d224798a12370d51961861',
        reviewee_id: '65c7356900dfa761aed36120',
        rating_score: 1.77,
        description: "It's not a dog!",
        comment_records: [],
        time: '2024-03-21T20:14:46.633Z',
    },
];

export default function SellerReviewDialog(props: SellerReviewDialogProps) {
    const toastUI = useToastUI();
    const { open, setOpen, header, description, cancelText, confirmText, sellerId } = props;
    const { data: sellerReviewData, isSuccess: sellerReviewSuccess } = useGetSellerReviews(sellerId);

    const handleClose = () => {
        setOpen(false);
    };

    const getCommentable = (itemLength: number) => {
        if (itemLength === 0 && props.isMyShop) {
            return true;
        }
        return false;
    };

    if (open) {
        if (!sellerReviewSuccess) {
            toastUI.toastError('Load Review Failed');
        } else {
            toastUI.toastSuccess('Load Review Success');
        }
    }

    return (
        <React.Fragment>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle
                    sx={{
                        py: 2.5,
                        px: 4,
                        textAlign: 'center',
                        backgroundColor: '#DDB892',
                        fontFamily: fira_sans_800.style.fontFamily,
                        fontSize: 25,
                        color: '#472F05',
                    }}
                >
                    {header}
                </DialogTitle>
                {
                    <DialogContent sx={{ backgroundColor: '#FFF8E8' }}>
                        <Box
                            sx={{
                                mt: 3,
                                mx: 3,
                                width: 500,
                                height: 400,
                                border: '3px solid #472F05',
                                boxShadow: '5px 5px #472F05',
                                backgroundColor: '#FBF3DD',
                                overflowY: 'scroll',
                            }}
                        >
                            {
                                (!sellerReviewData || sellerReviewData.length === 0) ? 
                                <Typography
                                    height={'100%'}
                                    display={'flex'}
                                    flexDirection={'column'}
                                    justifyContent={'center'}
                                    textAlign={'center'}
                                    fontFamily={fira_sans_600.style.fontFamily}
                                    fontSize={18}
                                    color={'#472F05'}
                                >
                                    Nobody has reviewed this shop yet.
                                </Typography>
                                : null
                            }
                            {(sellerReviewData || ([] as SellerReview[])).map((item, idx) => (
                                <SellerReviewItem
                                    reviewId={item.id}
                                    reviewNo={idx + 1}
                                    rating={item.rating_score}
                                    review={item.description}
                                    shopComment={item.comment_records
                                        .map((eachRecord) => {
                                            return eachRecord?.comment;
                                        })
                                        .join(',\n')}
                                    isCommentable={getCommentable(item.comment_records.length)}
                                    isAdmin={props.isAdmin}
                                />
                            ))}
                        </Box>
                    </DialogContent>
                }
                <DialogActions sx={{ backgroundColor: '#FFF8E8', pb: 3, px: 4 }}>
                    <Button
                        onClick={handleClose}
                        sx={{
                            '&.MuiButton-root': {
                                border: '2px solid #472F05',
                                borderRadius: 0,
                                boxShadow: '3px 3px #472F05',
                                py: 0.5,
                                px: 2,
                                color: '#472F05',
                                fontSize: 18,
                                fontFamily: fira_sans_600.style.fontFamily,
                                backgroundColor: '#E18A7A',
                            },
                            '&:hover': {
                                backgroundColor: '#E2725B',
                            },
                        }}
                    >
                        {cancelText}
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
