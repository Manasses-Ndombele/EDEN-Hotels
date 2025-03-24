import { useContext } from "react";
import { Formik, Form } from "formik";
import Input from "../Input";
import validationSchema from "./validationSchema";
import api from "../../services/api";
import UserContext from "../../services/UserContext";
import ModalUserContext from "../../services/ModalUser";
import ModalContext from "../../services/ModalContext";

function EditUserForm() {
  const { user } = useContext(UserContext);
  const { setModalUserStatus } = useContext(ModalUserContext);
  const { setModalStatus, setModalTitle, setModalMessage } = useContext(ModalContext);
  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        old_password: "",
        new_password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        console.log("Submetendo o formulário!");
        const params = {
          username: values.username,
          email: values.email,
          old_password: values.old_password,
          new_password: values.new_password,
        };

        const token = localStorage.getItem("token");
        api
          .patch(
            `/editar-usuario?email=${user.email}`,
            new URLSearchParams(params).toString(),
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/x-www-form-urlencoded",
              },
            }
          )
          .then((response) => {
            console.log(response);
            if (response.status === 200 && response.data.success) {
              resetForm();
              setModalUserStatus(false);
              setModalTitle("Sucesso!");
              setModalMessage(response.data.message);
              setModalStatus(true);
            } else {
              setModalUserStatus(false);
              setModalTitle(response.data.message);
              setModalMessage(
                "Não foi possível atualizar a sua conta por enquanto, tente novamente mais tarde!"
              );

              setModalStatus(true);
            }
          })
          .catch((error) => {
            console.log(error);
            setModalUserStatus(false);
            setModalTitle("Erro inesperado!");
            setModalMessage(
              "Um erro não identificado impediu a atualização da sua conta tente novamente mais tarde ou recarregue a página e reenvie o formulário!"
            );

            setModalStatus(true);
          })
          .finally(() => {
            setSubmitting(false);
            console.log("Formulário submetido com sucesso!");
          });
      }}
    >
      <Form className="mt-3">
        <Input
          type="text"
          label="Usuário"
          placeholder="Novo nome de usuário"
          id="username-field"
          name="username"
          typeField="input"
        />
        <Input
          type="email"
          label="Email"
          placeholder="Novo email"
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
        <button
          type="submit"
          className="w-full mt-2 border-color-b border-1 py-2 color-b focus:scale-105 transition-all ease-in duration-300 libre-baskerville-regular font-bold uppercase text-center cursor-pointer"
        >
          Atualizar
        </button>
      </Form>
    </Formik>
  );
}

export default EditUserForm;
