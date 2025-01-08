import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Este campo é obrigatório!"),
  email: Yup.string()
    .email("Email inválido!")
    .required("Este campo é obrigatório!"),
  active: Yup.string()
    .oneOf(["ATIVADO", "DESATIVADO"], "Selecione ATIVADO ou DESATIVADO")
    .required("Este campo é obrigatório!"),
});

export default validationSchema;
