// src/components/Modal.jsx
// import useEffect and useRef hooks from react
import { useEffect, useRef } from "react";
import styles from "../styles/Modal.module.css";
// export a default function called Modal
export default function Modal({ isOpen, onClose, children }) {
  const dialogRef = useRef(null);
  useEffect(() => {
    const dialog = dialogRef.current;

    // make a if else block
    if (isOpen) {
      dialog?.showModal();
    } else {
      dialog?.close();
    }

    function handleClickOutside(e) {
      const dialogDimensions = dialog?.getBoundingClientRect();
      if (dialogDimensions) {
        if (
          e.clientX < dialogDimensions.left ||
          e.clientX > dialogDimensions.right ||
          e.clientY < dialogDimensions.top ||
          e.clientY > dialogDimensions.bottom
        ) {
          onClose();
        }
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    // check the condition that isOpen is true or false
    // call the showModal() or close() method on the dialog element based on the condition
    return () => {
      document.removeEventListener("mousdown", handleClickOutside);
    };
  }, [isOpen, onClose]);
  return (
    <dialog className={styles.modal} ref={dialogRef}>
      {children}
      <button onClick={onClose}>close modal</button>
    </dialog>
  );
}
// cache a dialogRef to the useRef with an initial state of null
// return a dialog element
