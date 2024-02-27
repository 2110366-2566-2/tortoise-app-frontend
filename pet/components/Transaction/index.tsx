import React from 'react'
import { Paper, Grid, Slide, Box, Typography, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from 'next/image';
import mockDog from '@public/image/mockdog1.jpg';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import AccountCircle from '@mui/icons-material/AccountCircle';
import HorizontalRuleOutlinedIcon from '@mui/icons-material/HorizontalRuleOutlined';
import { ClassSharp } from '@mui/icons-material';

const useStyles = makeStyles({
    gridItem: {
        // borderRight: '1px solid #808080'
    },
    date: {
        fontWeight: 800,
        fontSize: '1.2em'
    },
    timestamp: {
        fontWeight: 500,
        fontSize: '1.2em',
        opacity: 0.7
    },
    paymentMethod: {
        fontSize: '1.1em',
        opacity: 0.8
    },
    price: {
        fontSize: '1.2em'
    },
    status: {
        fontSize: '1.2em'
    },
    expandIcon: {
        fontSize: '2em',
        color: '#8b94aa'
    }
});

function Transaction( { role, transaction }: { role: number, transaction: any } ) {
    const [hovered, setHovered] = React.useState(false);
    const [showContent, setShowContent] = React.useState(false);
    const classes = useStyles();
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
                    <span className={classes.date}>{transaction.timestamp.date}</span>
                    <br />
                    <span className={classes.timestamp}>{transaction.timestamp.time}</span>
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
                            <Image width={300} height={300}
                                src={mockDog}
                                alt="Pet Picture"
                                style={{ objectFit: 'cover', width: '50%', height: 'auto', maxHeight: 'fit-content', border: '2px solid black', borderRadius: 3 }}
                            />
                        </Box>
                        <Box display="flex" flexDirection="column" marginLeft="-13%">
                            <TextField
                                label="Pet Name"
                                id="standard-size-small"
                                defaultValue="Mah Deng"
                                size="small"
                                variant="standard"
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                            <TextField
                                label="Age"
                                id="standard-size-small"
                                defaultValue="69"
                                size="small"
                                variant="standard"
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                            <TextField
                                label="Sex"
                                id="standard-size-small"
                                defaultValue="Male"
                                size="small"
                                variant="standard"
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                            <TextField
                                label="Species"
                                id="standard-size-small"
                                defaultValue="Mah Kark"
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
                                defaultValue="Mohammed Salah"
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
                                defaultValue="Steve McManaman"
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
