export type CustomDialogProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    header: string;
    description?: string;
    cancelText?: string;
    confirmText: string;
    handleConfirm: React.MouseEventHandler<HTMLButtonElement>;
};