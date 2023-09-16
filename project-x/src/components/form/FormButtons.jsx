import React from "react";
import { useNavigate } from "react-router-dom";
import { GoBackButton } from "../buttons/GoBackButton";
import { SubmitButton } from "../buttons/SubmitButton";

export const FormButtons = ({
  goBackText = "Voltar",
  saveText = "Avançar",
}) => {
  const navigate = useNavigate();
  function goBack() {
    navigate(-1);
  }

  return (
    <div className="row d-flex mt-3">
      {goBackText && (
        <div className="col-lg-2 col-md-4 col-12">
          <GoBackButton title={goBackText} action={goBack} />
        </div>
      )}
      {saveText && (
        <div className="col-lg-2 col-md-4 col-12">
          <SubmitButton title={saveText} />
        </div>
      )}
    </div>
  );
};
