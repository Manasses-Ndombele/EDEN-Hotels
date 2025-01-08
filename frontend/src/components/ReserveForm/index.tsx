import Input from "../Input";
import { Formik, Form } from "formik";
import Button from "../Button";

function ReserveForm() {
  return (
    <Formik
      initialValues={{
        clientName: "",
        phoneNumber: 9,
        hotelCountry: "Selecione o hotel",
        dateTime: "",
        stayTime: 1,
        message: "",
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log(`Nome do cliente: ${values.clientName}`);
        setSubmitting(true);
        resetForm();
      }}
    >
      <Form>
        <Input
          name="clientName"
          id="client-name-field"
          placeholder="Seu nome"
          label="Nome"
          type="text"
          typeField="input"
        />
        <Input
          name="phoneNumber"
          id="phone-number-field"
          placeholder="Seu número de telefone"
          label="Telefone"
          type="number"
          typeField="input"
        />
        <Input
          name="hotelCountry"
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
          name="stayTime"
          id="stay-time-field"
          placeholder="Quantos dias deseja ficar?"
          label="Tempo de estadia"
          typeField="input"
          type="number"
        />
        <Input
          name="dateTime"
          id="datetime-field"
          placeholder=""
          label="Data da estadia"
          typeField="input"
          type="datetime"
        />
        <Input
          name="message"
          id="message-field"
          placeholder="Quer dizer-nos mais algo?"
          label="Mensagem"
          typeField="textarea"
          type="text"
        />
        <Button type="submit">Enviar</Button>
      </Form>
    </Formik>
  );
}

export default ReserveForm;
