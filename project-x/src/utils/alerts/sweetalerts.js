//*Components
import messages from "src/utils/alerts/messages.json";

//* Libs
import Swal from "sweetalert2";

export const ErrorAlert = ({ message }) => {
  var alertMsg = messages.error[message] ?? messages.error.default;

  return Swal.fire({
    icon: 'error',
    title: 'Houston, temos um problema',
    text: alertMsg
  });
}

export const SuccessAlert = ({ message }) => {
  var alertMsg = messages.success[message] ?? messages.success.default;

  return Swal.fire({
    icon: 'success',
    title: 'Sucesso!',
    text: alertMsg
  });
}