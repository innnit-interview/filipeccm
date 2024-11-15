/** @jsxImportSource @emotion/react */
import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
import { css } from "@emotion/react";

type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
};

const modalOverlayStyle = css({
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflowY: "auto",
  padding: "16px",
});

const modalContentStyle = css({
  backgroundColor: "#ffffff",
  borderRadius: "10px",
  padding: "26px",
  maxWidth: "600px",
  width: "100%",
  maxHeight: "90vh",
  overflowY: "auto",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
});

const Modal: React.FC<ModalProps> = ({ children, isOpen }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div css={modalOverlayStyle}>
      <div css={modalContentStyle}>{children}</div>
    </div>,
    document.body
  );
};

export default Modal;
