import { useEffect, useRef } from "react";
import styles from "../styles/Modal.module.css";
export default function Modal({ isOpen, onClose }) {
  const dialogRef = useRef(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    if (isOpen) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [isOpen, onClose]);
  return (
    // connect the dialog element to the dialogRef
    <dialog className={styles.modal} ref={dialogRef}>
      <button onClick={onClose}>close modal</button>
    </dialog>
  );
}
