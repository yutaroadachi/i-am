import React, { useContext, useState } from "react";
import { IAmContext } from "./IAm.es6";
import Modal from "./Modal.es6";
import "./HobbyFormModal.css";

const HobbyFormModal = props => {
  const iAmContext = useContext(IAmContext);

  const [hobbyForm, setHobbyForm] = useState(
    iAmContext.hobby ? iAmContext.hobby : ""
  );
  const changeHobbyForm = e => {
    setHobbyForm(e.target.value);
  };

  const clickSaveHobbyBtn = () => {
    iAmContext.hobbyDispatch({
      type: "save",
      hobby: hobbyForm
    });
    props.onRequestClose();
  };

  return (
    <Modal onRequestClose={props.onRequestClose}>
      <div className="row">
        <h4 className="center-align">あなたの趣味は？</h4>
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">favorite</i>
              <textarea
                id="hobby"
                className="materialize-textarea"
                value={hobbyForm}
                onChange={changeHobbyForm}
                autoFocus
              />
              <label htmlFor="hobby">趣味</label>
              {hobbyForm === "" ? (
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
              onClick={clickSaveHobbyBtn}
              disabled={hobbyForm === ""}
            >
              保存
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default HobbyFormModal;
