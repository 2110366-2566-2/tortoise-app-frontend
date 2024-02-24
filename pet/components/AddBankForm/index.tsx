'use client';
import { Box, Button, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { ColorButton, CustomTextField } from '../../components/CustomInput/type';
import { SubmitHandler } from 'react-hook-form';

export default function AddBankForm() {
    const form = useForm<AddBankFormData>();

    interface AddBankFormData {
        accountname: string;
        accountnumber: string;
        branchname: string;
    }

    const onSubmit: SubmitHandler<AddBankFormData> = async (data) => {
        try {
            console.log(data); // ตรวจสอบว่าข้อมูลถูกส่งไปถูกต้อง
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <Box sx={{ my: '5%', mx: '15%' }}>
            <Box
                sx={{
                    height: 'auto',
                    width: 300,
                    paddingX: 3,
                    paddingY: 1,
                    fontSize: 22,
                    backgroundColor: '#472F05',
                    color: 'whitesmoke',
                    border: '2px solid black',
                    borderBottom: 0,
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5,
                    boxShadow: '3px 3px black',
                    textAlign: 'center',
                }}
            >
                Add new bank account
            </Box>
            <Box
                sx={{
                    py: 5,
                    px: 10,
                    border: '2px solid black',
                    boxShadow: '7px 7px #472F05',
                    backgroundColor: '#FDF6F2',
                }}
            >
                <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
                    <Box
                        sx={{
                            fontFamily: 'Fira Sans Condensed, sans-serif',
                            width: '100%',
                            pl: 1,
                            pb: 3,
                            fontSize: 30,
                        }}
                    >
                        Basic Information:
                    </Box>

                    <Box
                        sx={{
                            width: '100%',
                            height: 'auto',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '20px',
                        }}
                    >
                        <div>Account Name</div>
                        <CustomTextField
                            name="accountname"
                            variant="outlined"
                            sx={{ width: '100%' }}
                        />

                        <div>Account Number</div>
                        <CustomTextField
                            name="accountnumber"
                            variant="outlined"
                            sx={{ width: '100%' }}
                        />

                        <div>Branch Name</div>
                        <CustomTextField
                            name="branchname"
                            variant="outlined"
                            sx={{ width: '100%' }}
                        />

                        <Box
                            sx={{
                                marginTop: 2,
                                backgroundColor: '#FAA943',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                            }}
                        >
                            <Button type="submit"
                                sx={{
                                    paddingY: 1,
                                    border: '2px solid #472F05',
                                    borderRadius: 0,
                                    boxShadow: '3px 2px #472F05',
                                    fontFamily: 'Fira Sans Condensed, sans-serif',
                                    fontSize: 18,
                                }}
                                //onClick={form.handleSubmit(onSubmit)
                            >
                                Add new account
                            </Button>

                        </Box>
                    </Box>
                </form>
            </Box>
        </Box>
    );
}
