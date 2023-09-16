import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormLabel } from "src/components/form/FormLabel";
import { IndexHeader } from "src/components/indexes/IndexHeader";
import { cepMask } from "src/utils/masks";
import FormErrorMessage from "src/components/form/FormErrorMessage";
import { FormButtons } from "src/components/form/FormButtons";
import { viaCEP } from "src/services/support/ViaCEP";

const schema = yup
  .object({
    place: yup.string().required("Campo em branco"),
    cep: yup
      .string()
      .required("Campo em branco")
      .length(9, "Digite o CEP corretamente"),
    city: yup.string().required("Campo em branco"),
    state: yup.string().required("Campo em branco"),
    street: yup.string().required("Campo em branco"),
    number: yup.string().required("Campo em branco"),
    nbhd: yup.string().required("Campo em branco"),
    comp: yup.string().notRequired(),
  })
  .required();

function CreatePlace() {
  const [loadingCep, setLoadingCep] = useState(false);
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

  function handleCEPChange({ value }) {
    clearErrors("cep");
    setValue("cep", cepMask(value));

    if (value.length == 9) {
      getCEPData(value);
    }
  }

  async function getCEPData(value) {
    setLoadingCep(true);
    try {
      const cepValue = value.replace(/\D/g, "");
      const responseData = await viaCEP(cepValue);

      setLoadingCep(false);
      if (responseData.erro) {
        setValue("cep", "");
        setError("cep", {
          message: "CEP inválido",
        });
        return;
      }
      setValue("city", responseData.localidade);
      setValue("state", responseData.uf);
      setValue("nbhd", responseData.bairro);
      setValue("street", responseData.logradouro);
    } catch (error) {
      console.log("error:", error);
      setLoadingCep(false);
      setValue("cep", "");
      setError("cep", {
        message: "CEP inválido",
      });
      return;
    }
  }

  const saveData = async (formData) => {
    console.log("data", formData);
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
            <FormLabel title={"Nome do Local"} error={errors.place?.message} />
            <input
              className={`form-control ${errors.place ? "is-invalid" : ""}`}
              type="text"
              name="Nome do Local"
              placeholder="Chácara do Marcos"
              {...register("place")}
            />
            <FormErrorMessage error={errors.place?.message} />
          </div>
          <div className="form-group my-2 col-12 col-lg-4 col-md-6">
            <FormLabel title={"CEP"} />
            <input
              className={`form-control ${errors.cep ? "is-invalid" : ""}`}
              type="text"
              name="CEP"
              maxLength={9}
              placeholder="00000-000"
              {...register("cep")}
              onChange={(e) => handleCEPChange(e.target)}
            />
            <FormErrorMessage error={errors.cep?.message} />
          </div>
        </div>
        <div className="row d-flex">
          <div className="form-group my-2 col-12 col-sm-8 col-lg-4">
            <FormLabel title={"Cidade"} />
            <input
              className={`form-control ${errors.city ? "is-invalid" : ""}`}
              type="text"
              name="Cidade"
              placeholder="Jales"
              disabled={loadingCep}
              {...register("city")}
            />
            <FormErrorMessage error={errors.city?.message} />
          </div>
          <div className="form-group my-2 col-12 col-sm-4 col-lg-2">
            <FormLabel title={"Estado"} />
            <input
              className={`form-control ${errors.state ? "is-invalid" : ""}`}
              type="text"
              name="Estado"
              placeholder="SP"
              disabled={loadingCep}
              {...register("state")}
            />
            <FormErrorMessage error={errors.state?.message} />
          </div>
          <div className="form-group my-2 col-6 col-sm-8 col-lg-4">
            <FormLabel title={"Rua"} />
            <input
              className={`form-control ${errors.street ? "is-invalid" : ""}`}
              type="text"
              name="Rua"
              placeholder="Rua 17"
              disabled={loadingCep}
              {...register("street")}
            />
            <FormErrorMessage error={errors.street?.message} />
          </div>
          <div className="form-group my-2 col-6 col-sm-4 col-lg-2">
            <FormLabel title={"Número"} required={false} />
            <input
              className={`form-control ${errors.number ? "is-invalid" : ""}`}
              type="text"
              name="Número"
              placeholder="000"
              {...register("number")}
            />
            <FormErrorMessage error={errors.number?.message} />
          </div>
        </div>
        <div className="row d-flex">
          <div className="form-group my-2 col-12 col-lg-8 col-md-6">
            <FormLabel title={"Bairro"} />
            <input
              className={`form-control ${errors.nbhd ? "is-invalid" : ""}`}
              type="text"
              name="Bairro"
              placeholder="Centro"
              disabled={loadingCep}
              {...register("nbhd")}
            />
            <FormErrorMessage error={errors.nbhd?.message} />
          </div>
          <div className="form-group my-2 col-12 col-lg-4 col-md-6">
            <FormLabel title={"Complemento"} required={false} />
            <input
              className={`form-control ${errors.comp ? "is-invalid" : ""}`}
              type="text"
              name="Complemento"
              maxLength={9}
              placeholder="Chácara"
              {...register("comp")}
            />
            <FormErrorMessage error={errors.comp?.message} />
          </div>
        </div>
        <FormButtons />
      </form>
    </React.Fragment>
  );
}

export default CreatePlace;
