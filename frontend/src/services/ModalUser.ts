import { createContext } from "react";

interface ModalUserType {
  modalUserStatus: boolean;
  setModalUserStatus: (modalUserStatus: boolean) => void;
}

const ModalUserContext = createContext<ModalUserType>({
  modalUserStatus: false,
  setModalUserStatus: () => {},
});

export default ModalUserContext;
