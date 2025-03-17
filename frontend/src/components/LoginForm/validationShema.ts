import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email inválido!")
    .required("Este campo é obrigatório"),
  password: Yup.string().required("Este campo é obrigatório"),
});

export default validationSchema;
