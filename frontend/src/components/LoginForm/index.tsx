import { useContext } from "react";
import { Formik, Form } from "formik";
import api from "../../services/api";
import Input from "../Input";
import validationSchema from "./validationShema";
import UserContext from "../../services/UserContext";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const { setLoggedIn, setUser } = useContext(UserContext);
  const navigate = useNavigate();

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
              setUser(response.data.user);
              navigate("/admin/dashboard");
            } else {
              console.log(response.data.message);
              console.log("Código da resposta: ", response.status);
            }
          })
          .catch((error) => {
            console.log("Erro no servidor: ", error);
          })
          .finally(() => {
            setSubmitting(false);
          });
      }}
    >
      <Form className="px-3 flex flex-col gap-2 mt-3 md:max-w-[60%] mx-auto max-w-[500px]">
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
        <section className="w-full flex justify-center">
          <button
            type="submit"
            className="w-full max-w-[200px] p-3 color-d libre-baskerville-regular uppercase font-bold tracking-wide focus:tracking-tight text-lg bg-color-b cursor-pointer mt-3 border-r-4 border-b-4 border-color-a focus:border-0 transition-all ease-in duration-200"
          >
            Login
          </button>
        </section>
      </Form>
    </Formik>
  );
}

export default LoginForm;
