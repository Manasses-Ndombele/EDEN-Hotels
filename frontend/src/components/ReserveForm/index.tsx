import { useContext } from "react";
import { Formik, Form } from "formik";
import api from "../../services/api";
import validationSchema from "./validationSchema";
import Input from "../Input";
import ModalContext from "../../services/ModalContext";

function ReserveForm() {
  const { setModalStatus, setModalTitle, setModalMessage } = useContext(ModalContext);
  return (
    <Formik
      initialValues={{
        client_name: "",
        phonenumber: "",
        hotel_country: "Selecione o hotel",
        start_date: "",
        end_date: "",
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
          start_date: values.start_date,
          end_date: values.end_date,
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
                setModalTitle(`${response.data.message}, ${values.client_name}!`);
                setModalMessage(
                  "A sua reserva foi registrada com sucesso! Estaremos prontos e ansiosos para recebê-lo na data marcada! Agredecemos por sua reserva."
                );

                resetForm();
                setModalStatus(true);
              } else {
                setModalTitle(response.data.message);
                setModalMessage(
                  "Não foi possível cadastrar a reserva tente novamente mais tarde ou recarregue a página e envie os dados da sua reserva novamente!"
                );
          
                setModalStatus(true);
              }
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
      <Form className="flex flex-col gap-3">
        <Input
          name="client_name"
          id="client-name-field"
          placeholder="Seu nome"
          label="Nome*"
          type="text"
          typeField="input"
        />
        <Input
          name="phonenumber"
          id="phone-number-field"
          placeholder="Seu número de telefone"
          label="Telefone*"
          type="text"
          typeField="input"
        />
        <Input
          name="hotel_country"
          id="hotel-country-field"
          placeholder="Selecione um de nossos hotéis"
          label="Hotel*"
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
          name="start_date"
          id="start-date-field"
          placeholder=""
          label="Início da estadia*"
          typeField="input"
          type="date"
        />
        <Input
          name="end_date"
          id="end-date-field"
          placeholder=""
          label="Fim da estadia*"
          typeField="input"
          type="date"
        />
        <Input
          name="message"
          id="message-field"
          placeholder="Quer dizer-nos mais algo?"
          label="Mensagem"
          typeField="textarea"
          type="text"
        />
        <button
          type="submit"
          className="w-full p-3 color-d libre-baskerville-regular uppercase font-bold tracking-widest focus:tracking-tight text-lg bg-color-b cursor-pointer mt-3 border-r-4 border-b-4 border-color-a focus:border-0 transition-all ease-in duration-20"
        >
          Enviar
        </button>
      </Form>
    </Formik>
  );
}

export default ReserveForm;
