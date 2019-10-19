import React from "react";
import ReactModal from "react-modal";

const Modal = props => {
  const { onRequestClose } = props;

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      position: "relative",
      zIndex: "1000",
      width: "750px",
      maxWidth: "750px",
      maxHeight: "750px",
      padding: "50px",
      backgroundColor: "#fcfcfc",
      borderColor: "#d3d7dc",
      boxShadow: "0px 15px 15px 0px rgba(0, 0, 0, 0.2)",
      overflow: "scroll"
    }
  };

  return (
    <ReactModal
      isOpen={true}
      onRequestClose={onRequestClose}
      style={customStyles}
      ariaHideApp={false}
    >
      {props.children}
    </ReactModal>
  );
};

export default Modal;
