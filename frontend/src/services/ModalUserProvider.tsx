import { useState, ReactNode } from "react";
import ModalUserContext from "./ModalUser";

function ModalUserProvider({ children }: { children: ReactNode }) {
  const [modalUserStatus, setModalUserStatus] = useState(false);
  return (
    <ModalUserContext.Provider value={{ modalUserStatus, setModalUserStatus }}>
      {children}
    </ModalUserContext.Provider>
  );
}

export default ModalUserProvider;
