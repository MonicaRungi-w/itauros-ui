import React, { ReactNode } from "react";
import ModalContent from "./ModalContent";
import ReactPortal from "./ReactPortal";

import "./../common.css";
import "./Modal.css";

type ModalProps = JSX.IntrinsicElements["div"] & {
  open: boolean;
  setOpen: (b: boolean) => void;
  onSubmit: () => void;
  title: ReactNode;
  content: ReactNode;
  isSubmitDisabled?: boolean;
};

const Modal = ({
  open,
  title,
  content,
  setOpen,
  onSubmit,
  isSubmitDisabled,
  ...props
}: ModalProps) => {
  return (
    <div>
      {open ? (
        <div>
          {ReactPortal(
            <div className="wrapper">
              <ModalContent
                title={title}
                setOpen={setOpen}
                onSubmit={onSubmit}
                content={content}
                isSubmitDisabled={isSubmitDisabled}
                {...props}
              />
            </div>,
            "root"
          )}
        </div>
      ) : null}
    </div>
  );
};

export default Modal;
