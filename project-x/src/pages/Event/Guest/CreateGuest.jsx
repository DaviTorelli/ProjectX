import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormLabel } from "src/components/form/FormLabel";
import { IndexHeader } from "src/components/indexes/IndexHeader";
import { phoneMask } from "src/utils/masks";
import FormErrorMessage from "src/components/form/FormErrorMessage";
import { FormButtons } from "src/components/form/FormButtons";
import axios from "axios";
import { URL } from "src/utils/variables";
import { json } from "react-router-dom";

const schema = yup
  .object({
    name: yup.string().required("Campo em branco"),
    phone: yup
      .string()
      .required("Campo em branco")
      .length(15, "Número inválido"),
  })
  .required();

function CreateGuest() {
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function handlePhoneChange({ value }) {
    clearErrors("phone");
    setValue("phone", phoneMask(value));
  }

  const saveData = (formData) => {
    console.log("data", JSON.stringify(formData));
    // return;

    fetch(`${URL}guests/store`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then(async (responseLog) => {
      try {
        let resp = await responseLog.json();
        console.log("resp", resp);
      } catch (err) {
        console.log(err);
      }
    });
  };

  return (
    <React.Fragment>
      <IndexHeader title={"Criar Lugar"} />
      <form
        className="py-3 needs-validation"
        onSubmit={handleSubmit(saveData)}
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

export default CreateGuest;
