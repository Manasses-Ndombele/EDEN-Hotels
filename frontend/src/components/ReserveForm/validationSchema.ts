import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  client_name: Yup.string().required("Este campo é obrigatório"),
  phonenumber: Yup.string()
    .matches(
      /^\+?(\d{1,4})?[-.\s]?(\(?\d{1,4}\)?)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      "Número de telefone inválido"
    )
    .required("Este campo é obrigatório"),
  hotel_country: Yup.string()
    .oneOf(
      [
        "França - Paris",
        "Holanda - Amsterdã",
        "Luxemburgo - Luxemburgo",
        "Norouega - Oslo",
        "Suíca - Berna",
        "Turquia - Istambul",
      ],
      "Este país não está listado!"
    )
    .required("Este campo é obrigatório"),
  start_date: Yup.date()
    .min(new Date(), "A data de início não pode estar no passado!")
    .required("Este campo é obrigatório!"),
  end_date: Yup.date()
    .min(
      Yup.ref("start_date"),
      "A data de término deve ser superior a data de início!"
    )
    .required("Este campo é obrigatório!"),
});

export default validationSchema;
