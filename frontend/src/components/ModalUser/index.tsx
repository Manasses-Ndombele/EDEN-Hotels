import { useContext, useEffect } from "react";
import { GrClose } from "react-icons/gr";
import EditUserForm from "../EditUserForm";
import ModalUserContext from "../../services/ModalUser";

function ModalUser() {
  const { modalUserStatus, setModalUserStatus } = useContext(ModalUserContext);
  useEffect(() => {
    if (modalUserStatus) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [modalUserStatus]);
  return (
    <div
      id="modal-user-overlay"
      className={`${
        modalUserStatus ? "activated" : "deactivated"
      } fixed bottom-0 start-0 w-screen h-screen bg-color-ab items-center px-3`}
    >
      <div id="modal-user-content" className="bg-color-d p-5 w-full">
        <div id="modal-header" className="flex justify-content-between">
          <h3 className="w-full text-lg font-bold libre-baskerville-regular color-b uppercase">
            Atualizar conta
          </h3>
          <button
            type="button"
            className="text-2xl color-c cursor-pointer"
            onClick={() => {
              setModalUserStatus(false);
            }}
          >
            <GrClose />
          </button>
        </div>
        <div id="modal-user-body" className="max-h-[80vh] overflow-y-auto overflow-x-hidden">
          <EditUserForm />
        </div>
      </div>
    </div>
  );
}

export default ModalUser;
