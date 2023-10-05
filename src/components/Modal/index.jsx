import { useContext } from "react";
import "./styles.css";
import { AppContext } from "../../context/AppContext";

export default function Modal({ children }) {

    const { showModal, setShowModal } = useContext(AppContext)

  return (
    <>
   { showModal === true && 
     <section className="modal-container">
     <div className="modal-overlay" onClick={() => setShowModal(false)}></div>
     <div className="modal-content">
           {children}
     </div>
   </section>
   }
    </>
  );
}
