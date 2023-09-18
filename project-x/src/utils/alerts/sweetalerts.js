//*Components
import messages from "src/utils/alerts/messages.json";

//* Libs
import Swal from "sweetalert2";

//*Toasts
export const ToastAlert = (data, type = "error") => {
  let message = messages.toast[data] ?? messages.toast.default;

  return Swal.fire({
    toast: true,
    position: "top",
    timerProgressBar: true,
    timer: 4000,
    showConfirmButton: false,
    icon: type,
    title: message,
  });
};
