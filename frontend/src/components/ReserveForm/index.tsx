import { Formik, Form } from "formik";
import api from "../../services/api";
import validationSchema from "./validationSchema";
import Input from "../Input";
import "./index-test.css";

function ReserveForm() {
  return (
    <Formik
      initialValues={{
        client_name: "",
        phonenumber: "",
        hotel_country: "Selecione o hotel",
        datetime: "",
        stay_time: "",
        message: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log("Submetendo o formulário!");
        setSubmitting(true);
        const params = {
          client_name: values.client_name,
          phonenumber: values.phonenumber,
          hotel_country: values.hotel_country,
          datetime: values.datetime,
          stay_time: String(values.stay_time),
          message: values.message,
        };

        api
          .post("criar-reserva/", new URLSearchParams(params).toString(), {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          })
          .then((response) => {
            console.log(response.status);
            if (response.status === 200) {
              if (response.data.success) {
                console.log(response.data.message);
                console.log(
                  `Reserva criada com sucesso! ID: ${response.data.reserve_id}`
                );

                resetForm();
              } else {
                console.log(response.data.message);
              }
            } else {
              console.log(response.status);
              console.log(response.data.message);
            }
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            setSubmitting(false);
          });
      }}
    >
      <Form>
        <Input
          name="client_name"
          id="client-name-field"
          placeholder="Seu nome"
          label="Nome"
          type="text"
          typeField="input"
        />
        <Input
          name="phonenumber"
          id="phone-number-field"
          placeholder="Seu número de telefone"
          label="Telefone"
          type="text"
          typeField="input"
        />
        <Input
          name="hotel_country"
          id="hotel-country-field"
          placeholder="Selecione um de nossos hotéis"
          label="Hotel"
          typeField="select"
          selectOptions={[
            "França - Paris",
            "Holanda - Amsterdã",
            "Luxemburgo - Luxemburgo",
            "Norouega - Oslo",
            "Suíca - Berna",
            "Turquia - Istambul",
          ]}
        />
        <Input
          name="stay_time"
          id="stay-time-field"
          placeholder="Quantos dias deseja ficar?"
          label="Tempo de estadia"
          typeField="input"
          type="text"
        />
        <Input
          name="datetime"
          id="datetime-field"
          placeholder=""
          label="Data da estadia"
          typeField="input"
          type="datetime-local"
        />
        <Input
          name="message"
          id="message-field"
          placeholder="Quer dizer-nos mais algo?"
          label="Mensagem"
          typeField="textarea"
          type="text"
        />
        <button type="submit">Enviar</button>
      </Form>
    </Formik>
  );
}

export default ReserveForm;
