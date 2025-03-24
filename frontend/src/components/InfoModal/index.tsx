import { useContext, useEffect } from "react";
import { GrClose } from "react-icons/gr";
import ModalContext from "../../services/ModalContext";

function InfoModal() {
  const {
    modalStatus,
    setModalStatus,
    modalTitle,
    setModalTitle,
    modalMessage,
    setModalMessage,
  } = useContext(ModalContext);

  function resetModal() {
    setModalTitle("");
    setModalMessage("");
    setModalStatus(false);
  }

  useEffect(() => {
    if (modalStatus) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [modalStatus]);
  return (
    <div
      id="modal-overlay"
      className={`${
        modalStatus ? "activated" : "deactivated"
      } fixed bottom-0 start-0 w-screen h-screen bg-color-ab items-center px-3`}
    >
      <div id="modal-content" className="bg-color-d p-5 w-full">
        <div id="modal-header" className="flex justify-content-between">
          <h3 className="w-full text-lg font-bold libre-baskerville-regular color-b uppercase">
            {modalTitle}
          </h3>
          <button
            type="button"
            className="text-2xl color-c cursor-pointer"
            onClick={() => {
              resetModal();
            }}
          >
            <GrClose />
          </button>
        </div>
        <div id="modal-body">
          <p className="libre-baskerville-regular color-a mt-3">
            {modalMessage}
          </p>
        </div>
      </div>
    </div>
  );
}

export default InfoModal;
