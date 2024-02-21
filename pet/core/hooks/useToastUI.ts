import { ToastOptions, toast } from "react-toastify"

const useToastUI = () => {
    const options: ToastOptions = {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
    }

    const toastSuccess = (message: string) => {
        toast.clearWaitingQueue();
        toast.success(message, {...options, toastId:'success'})
    }

    const toastError = (message: string) => {
        toast.clearWaitingQueue();
        toast.error(message, {...options, toastId:'error'})
    }

    const toastWarning = (message: string) => {
        toast.clearWaitingQueue();
        toast.warning(message, {...options, toastId:'warning'})
    }

    const toastInfo = (message: string) => {
        toast.clearWaitingQueue();
        toast.info(message, {...options, toastId:'info'})
    }

    return { toastSuccess, toastError, toastWarning, toastInfo }
}

export default useToastUI