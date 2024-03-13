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
        <div style={{ width: '100%' }}>
            {bankAccount ? (
                <Box>
                    <Box
                        component="span"
                        sx={{
                            display: 'block',
                            p: 1,
                            m: 1,
                            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                            color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
                            border: '1px solid',
                            borderColor: (theme) => (theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300'),
                            borderRadius: 2,
                            fontSize: '0.875rem',
                            fontWeight: '700',
                        }}
                    >
                        {bankAccount.bank_name}
                    </Box>
                    <Box
                        component="span"
                        sx={{
                            display: 'block',
                            p: 1,
                            m: 1,
                            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                            color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
                            border: '1px solid',
                            borderColor: (theme) => (theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300'),
                            borderRadius: 2,
                            fontSize: '0.875rem',
                            fontWeight: '700',
                        }}
                    >
                        {bankAccount.bank_account_name}
                    </Box>
                    <Box
                        component="span"
                        sx={{
                            display: 'block',
                            p: 1,
                            m: 1,
                            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                            color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
                            border: '1px solid',
                            borderColor: (theme) => (theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300'),
                            borderRadius: 2,
                            fontSize: '0.875rem',
                            fontWeight: '700',
                        }}
                    >
                        {bankAccount.bank_account_number}
                    </Box>
                </Box>
            ) : (
                <Box sx={{ textAlign: 'center' }}>No Bank Account</Box>
            )}
        </div>
    );
}
