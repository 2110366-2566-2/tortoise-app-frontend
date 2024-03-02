import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';

function CenterLoader() {
    return (
        <CircularProgress
            size={75}
            style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                marginTop: '-20px',
                marginLeft: '-20px',
                color: '#472f05'
            }}
        />
    )
}

export default CenterLoader
