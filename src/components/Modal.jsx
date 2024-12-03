import { useEffect, useRef } from "react";

export default function Modal({ isOpen, onClose, children }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (isOpen) {
      dialog.showModal();
    } else {
      dialog.close();
    }

    function handleClickOutside(e) {
      const dialogBoundary = dialog.getBoundingClientRect();
      const isInDialog =
        e.clientX >= dialogBoundary.left &&
        e.clientX <= dialogBoundary.right &&
        e.clientY <= dialogBoundary.top &&
        e.clientY >= dialogBoundary.bottom;
      if (!isInDialog) {
        onClose();
      }
    }
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      decodeURIComponent.removeListener("click", handleClickOutside);
    };
  }, [isOpen, onClose]);
  function handleContentClick(e) {
    e.stopPropagation();
  }
  function toggleDialog() {
    if (!dialogRef.current) {
      return;
    }
    dialogRef.current.hasAttribute("open")
      ? dialogRef.current.close()
      : dialogRef.current.showModal();
  }
  return (
    <>
      <button onClick={toggleDialog}>open modal</button>
      <dialog ref={dialogRef}>
        <p>I'm a modal</p>
        <button onClick={toggleDialog}>close modal</button>
      </dialog>
    </>
  );
}
