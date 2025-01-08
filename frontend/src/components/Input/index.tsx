import { Field, ErrorMessage } from "formik";

interface Props {
  type?: string;
  label: string;
  placeholder: string;
  id: string;
  name: string;
  typeField: string;
  selectOptions?: string[];
}

function setField({
  type,
  placeholder,
  id,
  name,
  typeField,
  selectOptions,
}: Props) {
  if (typeField == "select") {
    selectOptions?.unshift(placeholder);
    return (
      <Field type={type} id={id} name={name} component="select">
        {selectOptions?.map((option, index) =>
          index == 0 ? (
            <option key={index} selected disabled>
              {option}
            </option>
          ) : (
            <option key={index}>{option}</option>
          )
        )}
      </Field>
    );
  } else {
    return (
      <Field
        type={type}
        placeholder={placeholder}
        id={id}
        name={name}
        component={typeField}
      />
    );
  }
}

function Input({ type, label, placeholder, id, name, typeField }: Props) {
  return (
    <section>
      <label htmlFor={id}>{label}</label>
      {setField({ type, label, placeholder, id, name, typeField })}
      <ErrorMessage name={name} component="span" />
    </section>
  );
}

export default Input;
