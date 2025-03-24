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
          password: values.password,
        };

        api
          .post("/criar-usuario", new URLSearchParams(params).toString(), {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          })
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
              console.log(response.data.errors);
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
      <Form className="px-3 flex flex-col gap-2 mt-3 md:max-w-[60%] mx-auto max-w-[500px]">
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
        <section className="w-full flex justify-center">
          <button
            type="submit"
            className="w-full max-w-[200px] p-3 color-d libre-baskerville-regular uppercase font-bold tracking-wide focus:tracking-tight text-lg bg-color-b cursor-pointer mt-3 border-r-4 border-b-4 border-color-a focus:border-0 transition-all ease-in duration-200"
          >
            Enviar
          </button>
        </section>
      </Form>
    </Formik>
  );
}

export default RegisterForm;
