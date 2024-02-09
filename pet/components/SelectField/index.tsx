'use client';

import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { SxProps, Theme, styled } from '@mui/material';

export interface SelectFieldChoice {
    label: string;
    value: string;
}

interface SelectFieldProps {
    name: string;
    label: string;
    choices: SelectFieldChoice[];
    sx?: SxProps<Theme>;
}

export default function SelectField(props: SelectFieldProps) {
    const [choiceValue, setChoiceValue] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setChoiceValue(event.target.value);
    };
    return (
        <div>
            <FormControl variant='outlined' fullWidth sx={props.sx}>
                <InputLabel id="demo-simple-select-filled-label">{props.label}</InputLabel>
                <Select
                    name={props.name}
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={choiceValue}

                    onChange={handleChange}
                    sx={{boxShadow: '3px 3px #472F05', borderRadius: 0, fontFamily: '__Fira_Sans_Condensed_43412c'}}
                >
                    {props.choices.map((eachChoice, index) => (
                        <MenuItem key={index} value={eachChoice.value}>
                            {eachChoice.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
