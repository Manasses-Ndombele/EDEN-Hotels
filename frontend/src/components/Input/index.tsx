import { Field, ErrorMessage } from "formik";

interface SetFieldProps {
  type?: string;
  placeholder: string;
  id: string;
  name: string;
  typeField: string;
  selectOptions?: string[];
}

interface InputProps extends SetFieldProps {
  label: string;
}

function setField({
  type,
  placeholder,
  id,
  name,
  typeField,
  selectOptions,
}: SetFieldProps) {
  if (typeField === "select") {
    const options = selectOptions ? [placeholder, ...selectOptions] : [placeholder];

    return (
      <Field type={type} id={id} name={name} as="select">
        {options.map((option, index) =>
          index === 0 ? (
            <option key={index} value="" disabled>
              {option}
            </option>
          ) : (
            <option key={index} value={option}>
              {option}
            </option>
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
        as={typeField}
      />
    );
  }
}

function Input({ type, label, placeholder, id, name, typeField, selectOptions }: InputProps) {
  return (
    <section>
      <label htmlFor={id}>{label}</label>
      {setField({ type, placeholder, id, name, typeField, selectOptions })}
      <ErrorMessage name={name} component="span" />
    </section>
  );
}

export default Input;