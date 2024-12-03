import { useState } from "react";
import Modal from "./components/Modal";

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
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <p>My Modal Content</p>
      </Modal>
    </>
  );
}
