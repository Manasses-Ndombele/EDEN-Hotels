import { useContext } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import BrandArea from "../BrandArea";
import Input from "../Input";
import ModalContext from "../../services/ModalContext";

function Footer() {
  const { setModalStatus, setModalTitle, setModalMessage } =
    useContext(ModalContext);
  return (
    <footer className="bg-color-a p-4 libre-baskerville-regular md:mt-10">
      <BrandArea />
      <div className="md:mt-5">
        <div className="md:flex md:justify-between md:max-w-[800px] md:mx-auto">
          <div
            id="contacts-area"
            className="text-center mt-5 color-c md:text-left"
          >
            <p className="mb-3 text-lg">Tel: (+55) 923 475 898</p>
            <p className="mb-3 text-lg">Email: info@edenhotels.service</p>
            <p className="mb-3 text-lg">Local: Europa</p>
          </div>
          <div
            id="newsletter-form-area"
            className="color-e max-w-[350px] mx-auto"
          >
            <p className="mb-3 text-lg font-bold">
              Se inscreva na nossa newsletter
            </p>
            <Formik
              initialValues={{ newsletterEmail: "" }}
              validationSchema={Yup.object().shape({
                newsletterEmail: Yup.string()
                  .email("Email inválido!")
                  .required("Este campo é obrigatório"),
              })}
              onSubmit={(values, { resetForm, setSubmitting }) => {
                setSubmitting(true);
                setModalTitle("Agredecemos imenso!");
                setModalMessage(
                  `Seja bem vindo a nossa newsletter onde você será impactado com contéudos que exclusivos sobre o nosso hotel, sempre dizemos não ao spam na nossa newsletter vamos informar apenas atualizações sobre o hotel!\n\n${values.newsletterEmail}`
                );

                resetForm();
                setSubmitting(false);
                setModalStatus(true);
              }}
            >
              <Form>
                <Input
                  type="email"
                  label="Email"
                  placeholder="Seu melhor email"
                  id="newsletter-email-field"
                  name="newsletterEmail"
                  typeField="input"
                />
                <button
                  type="submit"
                  className="w-full md:w-min md:px-7 p-3 text-lg bg-color-b cursor-pointer mt-3 border-r-4 border-b-4 border-color-a active:border-0 transition-all ease-in duration-200"
                >
                  Submeter
                </button>
              </Form>
            </Formik>
          </div>
        </div>
        <div className="mt-5 color-e md:mt-8">
          <p className="mb-3 text-lg text-center italic">
            &copy; 2025 -
            <a
              href="https://manassesndombele.vercel.app/"
              target="_blank"
              rel="external"
              className="underline"
            >
              Manassés Ndombele
            </a>
            - Dev Fullstack
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
