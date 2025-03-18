import BrandArea from "../BrandArea";
import { Formik, Form, Field, ErrorMessage } from "formik";

function Footer() {
  return (
    <footer>
      <BrandArea />
      <div>
        <div id="contacts-area">
          <p>Tel: (+55) 923 475 898</p>
          <p>Email: info@edenhotels.service</p>
          <p>Local: Europa</p>
        </div>
        <div id="newsletter-form-area">
          <Formik
            initialValues={{ email: "" }}
            onSubmit={(values, { resetForm, setSubmitting }) => {
              console.log(`Email fornecido: ${values.email}`);
              resetForm();
              setSubmitting(true);
            }}
          >
            <Form>
              <label htmlFor="email-field">Email</label>
              <Field
                type="email"
                placeholder="Seu melhor email"
                id="email-field"
                name="email"
              />
              <ErrorMessage component="span" name="email" />
              <button type="submit">Submeter</button>
            </Form>
          </Formik>
        </div>
        <div>
          <p>&copy; 2025 - Manassés Ndombele - Dev Freelancer</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
