import { useContext } from "react";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import Input from "../Input";
import validationSchema from "./validationSchema";
import UserContext from "../../services/UserContext";

function RegisterForm() {
  const { loggedIn, user } = useContext(UserContext);
  const navigate = useNavigate();

  if (loggedIn && Object.keys(user).length === 0) {
    navigate("/admin/dashboard");
  }

  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        const params = {
          username: values.username,
          email: values.email,
          password: values.password
        }

        api
          .post(
            "/criar-usuario",
            new URLSearchParams(params).toString(),
            {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded"
              }
            }
          )
          .then((response) => {
            if (response.status === 200) {
              if (response.data.success) {
                console.log(response.data.message);
                console.log("ID do usuário: ", response.data.id);
                resetForm();
                navigate("/admin/login");
              } else {
                console.log(response.data.message);
                console.log(response.data.error);
              }
            } else {
              console.log(`Status: ${response.status}`);
              console.log(response.data.message);
              console.log(response.data.errors)
            }
          })
          .catch((error) => {
            console.log(error)
          })
          .finally(() => {
            setSubmitting(false);
          });
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
        <button type="submit">Enviar</button>
      </Form>
    </Formik>
  );
}

export default RegisterForm;
