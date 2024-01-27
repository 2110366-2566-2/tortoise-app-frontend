import { Typography, TextField } from '@mui/material';

export default function RegisterForm() {
    return (
        <form>
            <TextField label={'Username'} />
            <TextField label={'Email'} />
            <TextField label={'Password'} />
            <TextField label={'Confirm Password'} />
        </form>
    );
}
