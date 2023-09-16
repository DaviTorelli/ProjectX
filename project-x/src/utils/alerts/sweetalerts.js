//*Components
import messages from "src/utils/alerts/messages.json"

//* Libs
import Swal from "sweetalert2";

//*Toasts
export const ToastAlert = (data, type = 'error') => {
    let message = messages.errors[data] ?? messages.errors.unknown_error;

    return Swal.fire({
        toast: true,
        position: "top",
        timerProgressBar: true,
        timer: 3000,
        showConfirmButton: false,
        icon: type,
        title: message,
    });
};