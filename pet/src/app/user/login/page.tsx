'use client';
import { Tabs, Tab } from '@mui/material';
import { useState } from 'react';

export default function LoginRegisterPage() {
    const [value, setValue] = useState(0);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <>
            <Tabs value={value} onChange={handleTabChange} aria-label="icon label tabs example">
                <Tab icon={''} label="LOGIN" />
                <Tab icon={''} label="REGISTER" />
            </Tabs>
        </>
    );
}
