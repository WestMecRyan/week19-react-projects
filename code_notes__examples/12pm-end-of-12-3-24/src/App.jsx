// src/App.jsx
import "./App.css";
// import useState hook from react
import { useState } from "react";
import Modal from "./components/Modal";
import Divcount from "./components/Divcount";

export default function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [count, setCount] = useState(1);
  // create a state called isModalOpen with a setter called setModalOpen and initialize state to false
  // function called openModal that calls the setModalOpen method and changes the state to true
  function openModal() {
    setModalOpen(true);
  }
  // function called closeModal that calls setModalOpen and changes state to false
  function closeModal() {
    setModalOpen(false);
  }
  return (
    <>
      {/* <Divcount Appcount={count}></Divcount> */}
      <button onClick={openModal}>open modal</button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <p>Some info about the modal</p>
      </Modal>
    </>
  );
}
