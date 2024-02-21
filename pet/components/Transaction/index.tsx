import React from 'react'
import { Paper, Grid, Slide } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';



const useStyles = makeStyles({
    gridItem: {
        borderRight: '1px solid #808080'
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
    }
});

function Transaction( { role, transaction }: { role: number, transaction: any } ) {
    const [hovered, setHovered] = React.useState(false);
    const [showContent, setShowContent] = React.useState(false);
    const classes = useStyles();

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
            return '#f9c067';
        }
    }

    return (
        <>
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
                }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={() => setShowContent(!showContent)}
            >
                <Grid
                    container
                    alignItems='center'
                    columns={{xs: 12}}
                    spacing={{xs: 1}}
                >
                    <Grid item xs={3} className={classes.gridItem}>
                        <span className={classes.date}>{transaction.timestamp.date}</span>
                        <span className={classes.timestamp}>{transaction.timestamp.time}</span>
                    </Grid>
                    <Grid item xs={3} className={classes.gridItem}>
                        <span className={classes.paymentMethod}>{transaction.payment_method}</span>
                    </Grid>
                    <Grid item xs={2} className={classes.gridItem}>
                        <span>{transaction.status}</span>
                    </Grid>
                    <Grid item xs={3} className={classes.gridItem}>
                        <span className={classes.price} style={{color: priceColor()}}>{transaction.price}</span>
                    </Grid>
                    <Grid item xs={1} alignItems='center' justifyContent='center'>
                        {showContent ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                    </Grid>
                </Grid>
            </Paper>
            <Slide direction='down' in={showContent} mountOnEnter unmountOnExit>
                {/* Doing in next feature */}
                <h1>Do in next feature</h1>
            </Slide>
        </>
    )
}

export default Transaction
