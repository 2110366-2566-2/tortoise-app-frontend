'use client';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { SxProps, Theme } from '@mui/material';

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
            <FormControl variant="filled" fullWidth sx={props.sx}>
                <InputLabel id="demo-simple-select-filled-label">{props.label}</InputLabel>
                <Select
                    name={props.name}
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={choiceValue}
                    onChange={handleChange}
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
