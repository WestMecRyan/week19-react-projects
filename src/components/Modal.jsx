// src/components/Modal.jsx
// import useEffect and useRef hooks from react
import { useEffect, useRef } from "react";
import styles from "../styles/Modal.module.css";
// export a default function called Modal
export default function Modal({ isOpen, onClose, children }) {
  console.log(isOpen);
  const dialogRef = useRef(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    // make a if else block
    if (isOpen) {
      dialog.showModal();
    } else {
      dialog.close();
    }
    // check the condition that isOpen is true or false
    // call the showModal() or close() method on the dialog element based on the condition
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
