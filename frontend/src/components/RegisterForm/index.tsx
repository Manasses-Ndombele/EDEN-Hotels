import { Formik, Form } from "formik";
import Input from "../Input";
import Button from "../Button";

function RegisterForm() {
  return (
    <Formik
      initialValues={{
        adminUserName: "",
        adminEmail: "",
        adminPassword: "",
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log(`Nome: ${values.adminUserName}`);
        setSubmitting(true);
        resetForm();
      }}
    >
      <Form>
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
          label="Senha"
          placeholder="Informe uma senha"
          id="password-field"
          name="password"
          typeField="input"
        />
        <Button type="submit">Registrar-se</Button>
      </Form>
    </Formik>
  );
}

export default RegisterForm;
