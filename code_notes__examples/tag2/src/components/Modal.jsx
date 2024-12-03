import { useEffect, useRef } from "react";
import styles from "../styles/Modal.module.css";
export default function Modal({ isOpen, onClose, children }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }

    function handleClickOutside(e) {
      const dialogBoundary = dialog.getBoundingClientRect();
      const isInDialog =
        e.clientX >= dialogBoundary.left &&
        e.clientX <= dialogBoundary.right &&
        e.clientY >= dialogBoundary.top &&
        e.clientY <= dialogBoundary.bottom;
      if (!isInDialog) {
        onClose();
      }
    }
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen, onClose]);

  function handleContentClick(e) {
    e.stopPropagation();
  }

  return (
    <dialog
      className={styles.modal}
      ref={dialogRef}
      onClick={handleContentClick}
    >
      {children}
      <button onClick={onClose}>close modal</button>
    </dialog>
  );
}
