import { useEffect, useRef } from "react";
import styles from "../styles/Modal.module.css"; // Adjust the path as needed

export default function Modal({ isOpen, onClose, children }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      dialog.showModal();
    } else {
      dialog.close();
    }

    const handleCancel = (e) => {
      e.preventDefault();
      onClose();
    };

    dialog.addEventListener("cancel", handleCancel);

    return () => {
      dialog.removeEventListener("cancel", handleCancel);
    };
  }, [isOpen, onClose]);

  return (
    <dialog className={styles.modal} ref={dialogRef}>
      {children}
      <button onClick={onClose}>Close Modal</button>
    </dialog>
  );
}
