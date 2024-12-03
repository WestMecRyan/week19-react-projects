// src/App.jsx
import { useState } from "react";
import Modal from "./components/Modal.jsx";
import "./App.css";

export default function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  function openModal() {
    setModalOpen(true);
  }
  function closeModal() {
    setModalOpen(false);
  }
  return (
    <>
      {" "}
      <button data-open-modal onClick={openModal}>
        open modal
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <p>My Modal</p>
      </Modal>
    </>
  );
}
