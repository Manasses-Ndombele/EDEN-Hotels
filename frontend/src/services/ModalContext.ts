import { createContext } from "react";

interface ModalType {
  modalStatus: boolean;
  setModalStatus: (modalStatus: boolean) => void;
  modalTitle: string;
  setModalTitle: (modalTitle: string) => void;
  modalMessage: string;
  setModalMessage: (modalMessage: string) => void;
}

const ModalContext = createContext<ModalType>({
  modalStatus: false,
  setModalStatus: () => {},
  modalTitle: "",
  setModalTitle: () => {},
  modalMessage: "",
  setModalMessage: () => {},
});

export default ModalContext;
