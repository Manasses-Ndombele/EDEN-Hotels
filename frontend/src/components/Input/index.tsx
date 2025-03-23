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
      <Field type={type} id={id} name={name} as="select" className="italic border-b-[1px] libre-baskerville-regular">
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
        className="italic border-b-[1px] libre-baskerville-regular"
      />
    );
  }
}

function Input({ type, label, placeholder, id, name, typeField, selectOptions }: InputProps) {
  return (
    <section className="flex flex-col gap-1 mb-3">
      <label htmlFor={id} className="libre-baskerville-regular font-bold cursor-pointer">{label}</label>
      {setField({ type, placeholder, id, name, typeField, selectOptions })}
      <ErrorMessage name={name} component="span" className="text-red-600 libre-baskerville-regular mt-2" />
    </section>
  );
}

export default Input;