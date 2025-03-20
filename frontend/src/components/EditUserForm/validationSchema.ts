import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  account_email: Yup.string()
    .email("Email inválido")
    .required("Este campo é obrigatório!"),
  username: Yup.string().required("Este campo é obrigatório!"),
  email: Yup.string()
    .email("Email inválido!")
    .required("Este campo é obrigatório!"),
  old_password: Yup.string().required("Este campo é obrigatório!"),
  new_password: Yup.string().required("Este campo é obrigatório!"),
});

export default validationSchema;
