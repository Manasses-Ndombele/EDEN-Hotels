import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "O nome deve ter no mínimo 3 caracteres!")
    .required("Este campo é obrigatório!"),
  email: Yup.string()
    .email("Email inválido!")
    .required("Este campo é obrigatório!"),
  password: Yup.string()
    .min(8, "A senha deve ter no mínimo 8 caracteres")
    .required("Este campo é obrigatório!"),
});

export default validationSchema;
