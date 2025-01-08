interface Props {
  title: string;
  description: string;
  status: boolean;
}

function Modal({ title, description, status }: Props) {
  return (
    <div className="modal" data-status={status ? "on" : "off"}>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}

export default Modal;
