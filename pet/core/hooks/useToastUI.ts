import { ToastOptions, toast } from "react-toastify"

const useToastUI = () => {
    const options: ToastOptions = {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
    }

    const toastSuccess = (message: string) => {
        toast.success(message, options)
    }

    const toastError = (message: string) => {
        toast.error(message, options)
    }

    const toastWarning = (message: string) => {
        toast.warning(message, options)
    }

    const toastInfo = (message: string) => {
        toast.info(message, options)
    }

    return { toastSuccess, toastError, toastWarning, toastInfo }
}

export default useToastUI