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
  datetime: Yup.string().required("Este campo é obrigatório!"),
  stay_time: Yup.number()
    .min(1, "O número mínimo de dias é 1.")
    .max(40, "O número máximo de dias é 40")
    .required("Este campo é obrigatório!"),
});

export default validationSchema;
