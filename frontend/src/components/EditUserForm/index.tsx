import { Formik, Form } from "formik";
import Input from "../Input";
import validationSchema from "./validationSchema";
import api from "../../services/api";

function EditUserForm() {
  return (
    <Formik
      initialValues={{
        account_email: "",
        username: "",
        email: "",
        old_password: "",
        new_password: ""
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        const params = {
          username: values.username,
          email: values.email,
          old_password: values.old_password,
          new_password: values.new_password
        };

        const token = localStorage.getItem("token");
        api
          .patch(
            `/editar-usuario?email=${values.account_email}`,
            new URLSearchParams(params).toString(),
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/x-www-form-urlencoded",
              },
            }
          )
          .then((response) => {
            if (response.status === 200 && response.data.success) {
              console.log("Usuário atualizado com sucesso!");
              console.log(response.data.message);
              resetForm();
            } else {
              console.log(`Status: ${response.status}`);
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
          type="text"
          label="Conta"
          placeholder="Informe o email do usuário"
          id="account-email-field"
          name="account_email"
          typeField="input"
        />
        <Input
          type="text"
          label="Usuário"
          placeholder="Informe um nome de usuário"
          id="username-field"
          name="username"
          typeField="input"
        />
        <Input
          type="email"
          label="Email"
          placeholder="Informe um email"
          id="email-field"
          name="email"
          typeField="input"
        />
        <Input
          type="password"
          label="Senha atual"
          placeholder="Informe sua senha atual"
          id="actual-password-field"
          name="old_password"
          typeField="input"
        />
        <Input
          type="password"
          label="Nova senha"
          placeholder="Informe uma nova senha"
          id="new-password-field"
          name="new_password"
          typeField="input"
        />
        <button type="submit">Atualizar</button>
      </Form>
    </Formik>
  );
}

export default EditUserForm;
