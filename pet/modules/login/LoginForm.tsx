import { Typography, TextField, Box } from '@mui/material';

export default function LoginForm() {
    return (
        <form>
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', px: '5%', gap: '10px' }}>
                <Typography variant={'h5'}>Login</Typography>
                <TextField
                    name="login.usernameoremail"
                    label="Username or Email"
                    variant="filled"
                    autoComplete="current-usernameoremail"
                />
                <TextField
                    name="login.password"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="filled"
                />
            </Box>
        </form>
    );
}
