import Input from "../Input";
import { Formik, Form } from "formik";
import Button from "../Button";

function LoginForm() {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log(`Email: ${values.email}`);
        console.log(`Senha: ${values.password}`);
        setSubmitting(true);
        resetForm();
      }}
    >
      <Form>
        <Input
          type="email"
          label="Email"
          placeholder="Informe seu email"
          id="email-field"
          name="email"
          typeField="input"
        />
        <Input
          type="password"
          label="Senha"
          placeholder="Informe sua senha"
          id="password-field"
          name="password"
          typeField="input"
        />
        <Button type="submit">Login</Button>
      </Form>
    </Formik>
  );
}

export default LoginForm;
