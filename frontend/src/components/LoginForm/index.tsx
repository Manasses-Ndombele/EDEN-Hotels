import { useContext } from "react";
import { Formik, Form } from "formik";
import api from "../../services/api";
import Input from "../Input";
import Button from "../Button";
import validationSchema from "./validationShema";
import UserContext from "../../services/UserContext";

function LoginForm() {
  const { setLoggedIn } = useContext(UserContext);
 
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        api
          .post("/iniciar-sessao", new URLSearchParams(values).toString(), {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          })
          .then((response) => {
            console.log(
              `Status: ${response.status} - Tipo: ${typeof response.status}`
            );
            console.log(
              `Sucesso? ${response.data.success} - Tipo ${typeof response.data
                .success}`
            );
            console.log(
              `StatusText: ${
                response.statusText
              } - Tipo: ${typeof response.statusText}`
            );
            console.log("Dados extras: ", response.data);
            if (response.status === 200 && response.data.success) {
              resetForm();
              const token = response.data.token;
              console.log("Token do backend: ", token, " tipo: ", typeof token);
              localStorage.setItem("token", token);
              setLoggedIn(true);
            } else {
              console.log(response.data.message);
              console.log("Código da resposta: ", response.status);
              resetForm();
            }
          })
          .catch((error) => {
            console.log("Erro no servidor: ", error);
            resetForm();
          });
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
