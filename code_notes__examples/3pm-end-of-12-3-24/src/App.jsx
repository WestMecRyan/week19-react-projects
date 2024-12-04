// src/App.jsx
import "./App.css";
import { useState } from "react";
import Modal from "./components/Modal";
export default function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  // create a openModal function that sets the modal state to true
  function openModal() {
    setModalOpen(true);
  }
  // create a closeModal function that sets the state to false
  function closeModal() {
    setModalOpen(false);
  }

  // pass closeModal as a prop called onClose
  return (
    <>
      <button onClick={openModal}>open modal</button>
      <Modal onClose={closeModal} isOpen={isModalOpen}>
        Some content from app
      </Modal>
    </>
  );
}
