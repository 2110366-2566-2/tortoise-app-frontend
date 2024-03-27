import React from 'react'
import { Paper, Grid, Slide, Box, TextField } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from 'next/image';
import mockDog from '@public/image/mockdog1.jpg';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import transactionTheme from '@core/theme/transactionTheme';

function Transaction( { role, transaction }: { role: number, transaction: any } ) {
    const [hovered, setHovered] = React.useState(false);
    const [showContent, setShowContent] = React.useState(false);

    const { transactionStyles } = transactionTheme
    const classes = transactionStyles();
    const containerRef = React.useRef<HTMLElement>(null);

    const statusTxt = () => {
        if (transaction.status === 'paid') {
            return 'Paid';
        } else if (transaction.status === 'pending') {
            return 'Pending';
        }
    }

    const statusColor = () => {
        if (transaction.status === 'paid') {
            return '#20c46b';
        } else if (transaction.status === 'pending') {
            return '#f99867';
        }
    }

    const priceColor = () => {
        if (transaction.status === 'paid') {
            if (role === 1) {
                // Green for seller
                return '#20c46b';
            } else if (role === 2) {
                // Red for buyer
                return '#ff4d4d';
            }
        } else if (transaction.status === 'pending') {
            // Yellow for pending
            return '#f99867';
        }
    }

    return (
        <Box ref={containerRef}>
            <Paper
                component='div'
                sx={{
                    p: '10px 30px',
                    display: 'flex',
                    boxShadow: '5px 4px #472F05',
                    alignItems: 'center',
                    backgroundColor: hovered ? '#F9C067': '#FFFF',
                    border: '2px solid black',
                    borderRadius: 0,
                    position: 'relative'
                }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={() => setShowContent(!showContent)}
            >
                <Grid item xs={3} className={classes.gridItem}>
                    <span className={classes.date}>{transaction.date}</span>
                    <br />
                    <span className={classes.timestamp}>{transaction.time}</span>
                </Grid>
                <Grid item xs={3} className={classes.gridItem}>
                    <span className={classes.paymentMethod}>{transaction.payment_method}</span>
                </Grid>
                <Grid item xs={2} className={classes.gridItem}>
                    <span className={classes.status} style={{color: statusColor(), border: `2.2px solid ${statusColor()}`, padding: '12px', borderRadius: '5px'}}>{statusTxt()}</span>
                </Grid>
                <Grid item xs={3} className={classes.gridItem}>
                    <span className={classes.price} style={{color: priceColor()}}>{transaction.price}</span>
                </Grid>
                <Grid item xs={0.5} alignItems='center' justifyContent='center'>
                    {showContent ? <ExpandLessIcon className={classes.expandIcon} /> : <ExpandMoreIcon className={classes.expandIcon} />}
                </Grid>
            </Paper>
            <Slide direction='right' in={showContent} mountOnEnter unmountOnExit container={containerRef.current} style={{zIndex: 1}}>
                <Paper
                    component='div'
                    sx={{
                        p: '100px 30px',
                        display: 'flex',
                        boxShadow: '5px 4px #472F05',
                        alignItems: 'center',
                        backgroundColor: '#fff4e0',
                        border: '2px solid black',
                        borderRadius: 0,
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    <Box display="flex" alignItems="center" justifyContent="space-between" width="100%" height="20px">
                        <Box>
                            <Image 
                                width={300} 
                                height={300}
                                src={transaction.pet_detail.media}
                                alt="Pet Picture"
                                style={{ objectFit: 'cover', width: '150px', height: '150px', maxHeight: 'fit-content', border: '2px solid black', borderRadius: 3 }}
                            />
                        </Box>
                        <Box display="flex" flexDirection="column" marginLeft="2%">
                            <TextField
                                label="Pet Name"
                                id="standard-size-small"
                                defaultValue={transaction.pet_detail.name}
                                size="small"
                                variant="standard"
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                            <TextField
                                label="Age"
                                id="standard-size-small"
                                defaultValue={transaction.pet_detail.age}
                                size="small"
                                variant="standard"
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                            <TextField
                                label="Sex"
                                id="standard-size-small"
                                defaultValue={transaction.pet_detail.sex}
                                size="small"
                                variant="standard"
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                            <TextField
                                label="Species"
                                id="standard-size-small"
                                defaultValue={transaction.pet_detail.species}
                                size="small"
                                variant="standard"
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </Box>
                        <Box flex="1" display="flex" justifyContent="center">
                            <TextField
                                id="outlined-read-only-input"
                                label="Seller Name"
                                defaultValue={transaction.seller_name}
                                InputProps={{
                                    readOnly: true,
                                }}
                                sx={{
                                    width: "40%",
                                    marginRight: "-5%",
                                    backgroundColor: "#ffeac4"
                                }}
                            />
                        </Box>
                        <ArrowRightAltIcon sx={{fontSize: "70px", color: "#ffd891", transform: "scaleX(1.9)", marginLeft: "-4%", marginRight: "-5%"}} />
                        <Box flex="1" display="flex" justifyContent="center">
                            <TextField
                                id="outlined-read-only-input"
                                label="Buyer Name"
                                defaultValue={transaction.buyer_name}
                                InputProps={{
                                    readOnly: true
                                }}
                                sx={{
                                    width: "40%",
                                    marginRight: "1%",
                                    backgroundColor: "#ffeac4"
                                }}
                            />
                        </Box>
                    </Box>
                </Paper>
            </Slide>
        </Box>
    )
}

export default Transaction
