import React, { Component, ChangeEvent } from 'react';
import { Card, Grid, Button, Box, IconButton } from '@mui/material';
import Image from 'next/image';
import FileUploadIcon from '@mui/icons-material/FileUpload';

interface ImageUploadCardProps {
    cardName: string;
}

interface ImageUploadCardState {
    mainState: string;
    imageUploaded: number;
    selectedFile: string;
}

class ImageDropbox extends Component<ImageUploadCardProps, ImageUploadCardState> {
    state: ImageUploadCardState = {
        mainState: 'initial',
        imageUploaded: 0,
        selectedFile: 'avatar.jpg',
    };

    handleUploadClick = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files ? event.target.files[0] : new File([], '.jpg');
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = (e) => {
            this.setState({
                selectedFile: reader.result as string,
            });
        };

        this.setState({
            mainState: 'uploaded',
            selectedFile: event.target.files?.[0].name || '',
            imageUploaded: 1,
        });
    };

    renderInitialState() {
        return (
            <Grid container direction="column" alignItems="center">
                <label htmlFor="contained-button-file">
                    <Button variant="contained" component="span">
                        <input
                            accept="image/*"
                            id="contained-button-file"
                            type="file"
                            onChange={this.handleUploadClick}
                        />
                    </Button>
                </label>
            </Grid>
        );
    }

    renderUploadedState() {
        const imgSrc = this.state.selectedFile;
        return (
            <Grid container direction="column" alignItems="center">
                <Image
                    src={`/${imgSrc}`}
                    alt={imgSrc}
                    objectFit="contained"
                    fill={true}
                    style={{ margin: 'auto', display: 'block', maxWidth: '100%', maxHeight: '100%' }}
                />
                <label htmlFor="contained-button-file">
                    <Button variant="contained" component="span">
                        <input
                            accept="image/*"
                            id="contained-button-file"
                            type="file"
                            onChange={this.handleUploadClick}
                        />
                    </Button>
                </label>
            </Grid>
        );
    }

    render() {
        return (
            <Box
                sx={{
                    boxShadow: '3px 3px #472F05',
                    '&:hover': {
                        backgroundColor: '#F3DDD1',
                    },
                }}
            >
                <Card className={this.props.cardName}>
                    {(this.state.mainState === 'initial' && this.renderInitialState()) ||
                        (this.state.mainState === 'uploaded' && this.renderUploadedState())}
                </Card>
            </Box>
        );
    }
}

export default ImageDropbox;
