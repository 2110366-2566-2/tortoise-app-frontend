'use client';

import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Box, SxProps, Theme, styled } from '@mui/material';

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
                sx={{ boxShadow: '3px 3px #472F05', borderRadius: 0, fontFamily: '__Fira_Sans_Condensed_43412c' }}
            >
                {props.choices.map((eachChoice, index) => (
                    <MenuItem id={eachChoice.value} key={index} value={eachChoice.value}>
                        {eachChoice.label}
                    </MenuItem>
                ))}
            </Select>
        </Box>
    );
}
