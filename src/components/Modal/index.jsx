import { useContext } from "react";
import "./styles.css";
import { AppContext } from "../../context/AppContext";

export default function Modal() {
  const { showModal, setShowModal, modalContent } = useContext(AppContext);

  return (
    <>
      {showModal && (
        <section className="modal-container">
          <div
            className="modal-overlay"
            onClick={() => setShowModal(false)}
          ></div>
          <div className="modal-content">{modalContent}</div>
        </section>
      )}
    </>
  );
}
