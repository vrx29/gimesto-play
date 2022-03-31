import { Close } from "assets/icons";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./style.module.css";

export function Toast({ isOpen, setIsOpen }) {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsOpen(false);
    }, 2000);
    return () => clearInterval(timeoutId);
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className={styles.modal}>
      <div className="toast toast-success">
        <span className="toast-msg">Success</span>
        <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
          <Close />
        </button>
      </div>
    </div>,
    document.getElementById("toast")
  );
}
