import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

type ConfirmDialogProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    header: string;
    description?: string;
    cancelText?: string;
    confirmText: string;
    handleConfirm: React.MouseEventHandler<HTMLButtonElement>;
};

export default function ConfirmDialog(props: ConfirmDialogProps) {
    const { open, setOpen, header, description, cancelText, confirmText, handleConfirm } = props;

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{header}</DialogTitle>
                {description && (
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">{description}</DialogContentText>
                    </DialogContent>
                )}
                <DialogActions>
                    {cancelText && <Button onClick={handleClose}>{cancelText}</Button>}
                    <Button onClick={handleConfirm}>{confirmText}</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
