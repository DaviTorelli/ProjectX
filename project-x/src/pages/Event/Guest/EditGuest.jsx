import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormLabel } from "src/components/form/FormLabel";
import { IndexHeader } from "src/components/indexes/IndexHeader";
import { phoneMask } from "src/utils/masks";
import FormErrorMessage from "src/components/form/FormErrorMessage";
import { FormButtons } from "src/components/form/FormButtons";
import { getGuest, updateGuest } from "src/services/api/guestServices";
import { useNavigate, useParams } from "react-router-dom";
import { SuccessAlert } from "src/utils/alerts/sweetalerts";

const schema = yup
  .object({
    name: yup.string().required("Campo em branco"),
    phone: yup
      .string()
      .required("Campo em branco")
      .length(15, "Número inválido"),
  })
  .required();

function EditGuest() {
  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await getGuest(params.id).then((response) => {
      console.log(response.guest);
      setValue("name", response.guest.name);
      setValue("phone", response.guest.phone);
    });
  };

  function handlePhoneChange({ value }) {
    clearErrors("phone");
    setValue("phone", phoneMask(value));
  }

  const updateData = async (formData) => {
    await updateGuest(params.id, formData).then((data) => {
      if (data.response == true) {
        navigate(-1);
        SuccessAlert(data);
      }
    });
  };

  return (
    <React.Fragment>
      <IndexHeader title={"Editar Convidado"} />
      <form
        className="py-3 needs-validation"
        onSubmit={handleSubmit(updateData)}
        noValidate
      >
        <div className="row d-flex">
          <div className="form-group my-2 col-12 col-lg-8 col-md-6">
            <FormLabel title={"Nome"} error={errors.name?.message} />
            <input
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              type="text"
              name="Nome"
              placeholder="Fabrício"
              {...register("name")}
            />
            <FormErrorMessage error={errors.name?.message} />
          </div>
          <div className="form-group my-2 col-12 col-lg-4 col-md-6">
            <FormLabel title={"Whatsapp"} />
            <input
              className={`form-control ${errors.phone ? "is-invalid" : ""}`}
              type="text"
              name="Whatsapp"
              maxLength={15}
              placeholder="(00) 00000-0000"
              {...register("phone")}
              onChange={(e) => handlePhoneChange(e.target)}
            />
            <FormErrorMessage error={errors.phone?.message} />
          </div>
        </div>
        <FormButtons />
      </form>
    </React.Fragment>
  );
}

export default EditGuest;
