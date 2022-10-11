import React, { ReactNode } from "react";
import "./Modal.css";

export interface ModalProps {
  onClose: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  open: boolean;
  children: ReactNode;
}

function Modal(props: ModalProps) {
  if (!props.open) {
    return null;
  }
  return (
    <div className="modal" id="modal">
      <div className="content">{props.children}</div>
    </div>
  );
}

export default Modal;
