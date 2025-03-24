import { createRoot } from "react-dom/client";
import Router from "./services/Router";
import ModalProvider from "./services/ModalProvider";
import ModalUserProvider from "./services/ModalUserProvider";
import InfoModal from "./components/InfoModal";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <ModalUserProvider>
    <ModalProvider>
      <Router />
      <InfoModal />
    </ModalProvider>
  </ModalUserProvider>
);
