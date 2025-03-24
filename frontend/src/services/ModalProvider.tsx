import { useState, ReactNode } from "react";
import ModalContext from "./ModalContext";

function ModalProvider({ children }: { children: ReactNode }) {
  const [modalStatus, setModalStatus] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  return (
    <ModalContext.Provider
      value={{
        modalStatus,
        setModalStatus,
        modalTitle,
        setModalTitle,
        modalMessage,
        setModalMessage,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export default ModalProvider;
