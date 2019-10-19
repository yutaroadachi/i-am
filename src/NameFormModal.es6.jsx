import React, { useContext, useState } from "react";
import { IAmContext } from "./IAm.es6";
import Modal from "./Modal.es6";
import "./NameFormModal.css";

const NameFormModal = props => {
  const iAmContext = useContext(IAmContext);

  const [nameForm, setNameForm] = useState(
    iAmContext.name ? iAmContext.name : ""
  );
  const changeNameForm = e => {
    setNameForm(e.target.value);
  };

  const clickSaveNameBtn = () => {
    iAmContext.nameDispatch({
      type: "save",
      name: nameForm
    });
    props.onRequestClose();
  };

  return (
    <Modal onRequestClose={props.onRequestClose}>
      <div className="row">
        <h4 className="center-align">あなたの名前は？</h4>
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">account_circle</i>
              <input
                id="name"
                type="text"
                className="validate"
                value={nameForm}
                onChange={changeNameForm}
                autoFocus
              />
              <label htmlFor="name">名前</label>
              {nameForm === "" ? (
                <div className="errorText">入力してください</div>
              ) : null}
            </div>
          </div>
          <div className="modal-btns">
            <button
              className="waves-effect waves-light btn"
              style={{ marginRight: "20px" }}
              onClick={props.onRequestClose}
            >
              キャンセル
            </button>
            <div
              className="waves-effect waves-light btn"
              onClick={clickSaveNameBtn}
              disabled={nameForm === ""}
            >
              保存
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default NameFormModal;
