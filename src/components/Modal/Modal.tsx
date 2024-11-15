/** @jsxImportSource @emotion/react */
import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
import { css } from "@emotion/react";

type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
};

const modalOverlayStyle = css`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const modalContentStyle = css`
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  width: 90%;
  max-width: 600px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

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
