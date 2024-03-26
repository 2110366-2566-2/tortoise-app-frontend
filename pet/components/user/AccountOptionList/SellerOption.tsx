import { fira_sans_600 } from '@core/theme/theme';
import { List, ListSubheader, Typography, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useRouter } from 'next/navigation';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import DeleteIcon from '@mui/icons-material/Delete';
import { Dispatch, SetStateAction } from 'react';
import { ISellerQueryParams } from '@services/api/v1/seller/type';
import useGetBankAccount from '@services/api/v1/seller/useGetBankAccount';

type SellerOptionListProps = {
    seller_id: string;
    setOpenDeleteBankAccountDialog: Dispatch<SetStateAction<boolean>>;
};

export default function SellerOptionLists(props: SellerOptionListProps) {
    const router = useRouter();
    const { setOpenDeleteBankAccountDialog } = props;
    const { data: bankAccount, isSuccess: bankAccountSuccess } = useGetBankAccount({
        seller_id: props.seller_id,
    } as ISellerQueryParams);

    return (
        <List
            sx={{
                width: 300,
                border: '2px solid #472F05',
                boxShadow: '4px 4px #472F05',
                borderRadius: 1,
                my: 2,
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader
                    component="div"
                    id="nested-list-subheader"
                    sx={{
                        pt: 1,
                        borderTopRightRadius: 1,
                        borderTopLeftRadius: 1,
                        backgroundColor: '#84B66B',
                    }}
                >
                    <Typography sx={{ fontFamily: fira_sans_600.style.fontFamily, pb: 1, color: '#472F05' }}>
                        Bank Account Settings
                    </Typography>
                </ListSubheader>
            }
        >
            <ListItemButton
                sx={{ backgroundColor: '#FCF1E5', '&:hover': { backgroundColor: '#CAD2C5' } }}
                disabled={Boolean(bankAccount?.bank_account_number)}
                onClick={() => router.push('/user/account/bank-account')}
            >
                <ListItemIcon>
                    <AccountBalanceWalletIcon sx={{ color: '#472F05' }} />
                </ListItemIcon>
                <ListItemText
                    primary={
                        <Typography sx={{ fontFamily: fira_sans_600.style.fontFamily, color: '#472F05' }}>
                            Add Bank Account
                        </Typography>
                    }
                />
            </ListItemButton>

            <ListItemButton
                sx={{ backgroundColor: '#FCF1E5', '&:hover': { backgroundColor: '#E18A7A' } }}
                onClick={() => setOpenDeleteBankAccountDialog(true)}
            >
                <ListItemIcon>
                    <DeleteIcon sx={{ color: 'red' }} />
                </ListItemIcon>
                <ListItemText
                    primary={
                        <Typography sx={{ fontFamily: fira_sans_600.style.fontFamily, color: 'red' }}>
                            Delete Bank Account
                        </Typography>
                    }
                />
            </ListItemButton>
        </List>
    );
}
