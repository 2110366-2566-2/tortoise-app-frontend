import { fira_sans_600, fira_sans_800 } from '@core/theme/theme';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { ISellerQueryParams } from '@services/api/v1/seller/type';
import useGetBankAccount from '@services/api/v1/seller/useGetBankAccount';

type BankShowCaseQueryProps = {
    seller_id: string;
};

export default function BankAccountShowCase(props: BankShowCaseQueryProps) {
    const {
        data: bankAccount,
        isSuccess: bankAccountSuccess,
        refetch: bankAccountRefetch,
    } = useGetBankAccount({
        seller_id: props.seller_id,
    } as ISellerQueryParams);

    if (!bankAccountSuccess) return null;

    return (
        <Box sx={{ width: '100%', p: 3 }}>
            {bankAccount ? (
                <Box>
                    <Box>
                        <Typography
                            fontFamily={fira_sans_800.style.fontFamily}
                            fontSize={20}
                            color={'#472F05'}
                        >
                            Bank Name: 
                        </Typography>
                    </Box>
                    <Box
                        component="span"
                        sx={{
                            display: 'block',
                            py: 1,
                            px: 2,
                            my: 1,
                            mx: 3,
                            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                            color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
                            border: '1px solid #472F05',
                            borderColor: (theme) => (theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300'),
                            borderRadius: 1,
                            fontSize: '1rem',
                            fontWeight: '700',
                        }}
                    >
                        {bankAccount.bank_name}
                    </Box>
                    <Box mt={3}>
                        <Typography
                            fontFamily={fira_sans_800.style.fontFamily}
                            fontSize={20}
                            color={'#472F05'}
                        >
                            Bank Account Name: 
                        </Typography>
                    </Box>
                    <Box
                        component="span"
                        sx={{
                            display: 'block',
                            py: 1,
                            px: 2,
                            my: 1,
                            mx: 3,
                            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                            color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
                            border: '1px solid #472F05',
                            borderColor: (theme) => (theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300'),
                            borderRadius: 1,
                            fontSize: '1rem',
                            fontWeight: '700',
                        }}
                    >
                        {bankAccount.bank_account_name}
                    </Box>
                    <Box mt={3}>
                        <Typography
                            fontFamily={fira_sans_800.style.fontFamily}
                            fontSize={20}
                            color={'#472F05'}
                        >
                            Bank Account Number: 
                        </Typography>
                    </Box>
                    <Box
                        component="span"
                        sx={{
                            display: 'block',
                            py: 1,
                            px: 2,
                            my: 1,
                            mx: 3,
                            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                            color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
                            border: '1px solid #472F05',
                            borderColor: (theme) => (theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300'),
                            borderRadius: 1,
                            fontSize: '1rem',
                            fontWeight: '700',
                        }}
                    >
                        {bankAccount.bank_account_number}
                    </Box>
                </Box>
            ) : (
                <Box sx={{ textAlign: 'center' }}>
                    <Typography
                        fontFamily={fira_sans_800.style.fontFamily}
                        fontSize={18}
                        color={'#472F05'}
                    >
                        No Bank Account
                    </Typography>
                </Box>
            )}
        </Box>
    );
}
