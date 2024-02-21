'use client';

import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Box, SxProps, Theme, styled } from '@mui/material';
import { fira_sans_600 } from '../../core/theme/theme';

export interface SelectFieldChoice {
    label: string;
    value: string;
}

interface SelectFieldProps {
    name: string;
    label?: string;
    choices: SelectFieldChoice[];
    sx?: SxProps<Theme>;
    disabled?: boolean;
    defaultValue?: string;
}


export default function SelectField(props: SelectFieldProps) {
    const [choiceValue, setChoiceValue] = React.useState(props.defaultValue || '');

    const handleChange = (event: SelectChangeEvent) => {
        setChoiceValue(event.target.value);
    };
    return (
        <Box sx={{ ...props.sx, width: '100%' }}>
            {props.label && <InputLabel id="demo-simple-select-filled-label">{props.label}</InputLabel>}
            <Select
                fullWidth
                name={props.name}
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                defaultValue={props.defaultValue}
                value={choiceValue}
                onChange={handleChange}
                disabled={props.disabled}
                sx={{ 
                    mx: 1,
                    width: '97%',
                    boxShadow: '3px 3px #472F05', 
                    border: '2px solid #472F05',
                    borderRadius: 0, 
                    fontFamily: fira_sans_600.style.fontFamily,
                    '&:hover': {
                        backgroundColor: '#E5CB9A'
                    },
                }}
            >
                {props.choices.map((eachChoice, index) => (
                    <MenuItem id={eachChoice.value} key={index} value={eachChoice.value}
                    sx={{
                        m: 0,
                        borderRadius: 0,
                        fontFamily: fira_sans_600.style.fontFamily,
                        '&:hover': {
                            backgroundColor: "#FFF8E8"
                        },
                        '&.Mui-selected': {
                            backgroundColor: '#E5CB9A !important'
                        }
                    }}>
                        {eachChoice.label}
                    </MenuItem>
                ))}
            </Select>
        </Box>
    );
}
