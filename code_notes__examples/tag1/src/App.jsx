// src/App.jsx
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
      <button data-open-modal>open modal</button>
      <Modal></Modal>
    </>
  );
}
