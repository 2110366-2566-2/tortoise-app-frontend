import { Box, Grid, Stack, Typography, ButtonBase, Button } from "@mui/material"
import { fira_sans_400, fira_sans_600, fira_sans_800 } from "@core/theme/theme"
import { useState } from "react"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

interface SellerReviewItemProps {
    reviewNo: number,
    rating: number,
    review: string,
    shopComment: string | undefined,
}

export default function SellerReviewItem(props: SellerReviewItemProps) {

    const [showShopResponse, setShowShopResponse] = useState(false)

    return (
        <Box
            sx={{
                m: 3,
                py: 1,
                px: 3,
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
                            <Typography
                                fontFamily={fira_sans_800.style.fontFamily}
                                fontSize={22}
                                color={'#472F05'}
                            >
                                No.
                            </Typography>
                            <Typography
                                fontFamily={fira_sans_800.style.fontFamily}
                                fontSize={22}
                                color={'#472F05'}
                            >
                                {props.reviewNo}
                            </Typography>
                        </Stack>
                        <Stack direction={'row'} spacing={1} pl={2}>
                            <Typography
                                fontFamily={fira_sans_800.style.fontFamily}
                                fontSize={22}
                                color={'#472F05'}
                            >
                                Rating: 
                            </Typography>
                            <Typography
                                fontFamily={fira_sans_800.style.fontFamily}
                                fontSize={22}
                                color={'#472F05'}
                            >
                                {props.rating}
                            </Typography>
                        </Stack>
                    </Stack>
                    <Stack direction={'row'} spacing={1}>
                            <Typography
                                fontFamily={fira_sans_600.style.fontFamily}
                                fontSize={18}
                                color={'#472F05'}
                            >
                                Review: 
                            </Typography>
                            <Typography
                                fontFamily={fira_sans_400.style.fontFamily}
                                fontSize={18}
                                color={'#472F05'}
                            >
                                {props.review}
                            </Typography>
                    </Stack>
                </Stack>
                <Button
                    onClick={() => setShowShopResponse(!showShopResponse)}
                >
                    {
                        showShopResponse ? 
                        <ArrowDropUpIcon sx={{ color: "#472F05", width: 30 }}/>
                        : <ArrowDropDownIcon sx={{ color: "#472F05", width: 30 }} />
                    }
                </Button>
            </Box>
            {
                showShopResponse ? 
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
                        backgroundColor: '#F0C65E'
                    }}
                >
                    <Typography
                        fontFamily={fira_sans_600.style.fontFamily}
                        fontSize={16}
                        color={'#472F05'}
                    >
                        Shop Comment: 
                    </Typography>
                    <Typography
                        fontFamily={fira_sans_400.style.fontFamily}
                        fontSize={16}
                        color={'#472F05'}
                    >
                        {props.shopComment}
                    </Typography>
                </Stack>
                : null
            }
        </Box>
    )
}