interface Props {
  type: string;
  children: string;
}

function Button({ type = "button", children }: Props) {
  return <button type={type}>{children}</button>;
}

export default Button;
