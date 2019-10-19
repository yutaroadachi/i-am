import React, { useContext, useState } from "react";
import { IAmContext } from "./IAm.es6";
import NameFormModal from "./NameFormModal.es6";
import HobbyFormModal from "./HobbyFormModal.es6";
import "./IAmBody.css";

const IAmBody = () => {
  const [showNameFormModal, setShowNameFormModal] = useState(false);
  const clickEditNameBtn = () => {
    setShowNameFormModal(true);
  };
  const clickEditNameCancelBtn = () => {
    setShowNameFormModal(false);
  };

  const [showHobbyFormModal, setShowHobbyFormModal] = useState(false);
  const clickEditHobbyBtn = () => {
    setShowHobbyFormModal(true);
  };
  const clickEditHobbyCancelBtn = () => {
    setShowHobbyFormModal(false);
  };

  const iAmContext = useContext(IAmContext);
  const clickDeleteNameBtn = () => {
    iAmContext.nameDispatch({
      type: "delete"
    });
  };
  const clickDeleteHobbyBtn = () => {
    iAmContext.hobbyDispatch({
      type: "delete"
    });
  };

  return (
    <React.Fragment>
      <h4 className="center-align">Who Are You?</h4>
      <div className="row">
        <div className="col s12 m6 offset-m3">
          <div
            className="card cyan lighten-5 hoverable"
            style={{ marginTop: "25px" }}
          >
            <div className="card-content">
              <span className="card-title">名前</span>
              <p>{iAmContext.name ? iAmContext.name : "未設定"}</p>
            </div>
            <div className="card-action edit-and-delete-btns">
              <button
                className="btn-floating waves-effect waves-light"
                style={{ marginRight: "20px" }}
                onClick={clickEditNameBtn}
              >
                <i className="material-icons left">edit</i>
              </button>
              <button className="btn-floating waves-effect waves-light">
                <i className="material-icons left" onClick={clickDeleteNameBtn}>
                  delete
                </i>
              </button>
            </div>
          </div>
        </div>

        <div className="col s12 m6 offset-m3">
          <div className="card cyan lighten-5 hoverable">
            <div className="card-content">
              <span className="card-title">趣味</span>
              <p>{iAmContext.hobby ? iAmContext.hobby : "未設定"}</p>
            </div>
            <div className="card-action edit-and-delete-btns">
              <button
                className="btn-floating waves-effect waves-light"
                style={{ marginRight: "20px" }}
              >
                <i className="material-icons left" onClick={clickEditHobbyBtn}>
                  edit
                </i>
              </button>
              <button className="btn-floating waves-effect waves-light">
                <i
                  className="material-icons left"
                  onClick={clickDeleteHobbyBtn}
                >
                  delete
                </i>
                削除
              </button>
            </div>
          </div>
        </div>
      </div>

      {showNameFormModal ? (
        <NameFormModal onRequestClose={clickEditNameCancelBtn} />
      ) : null}
      {showHobbyFormModal ? (
        <HobbyFormModal onRequestClose={clickEditHobbyCancelBtn} />
      ) : null}
    </React.Fragment>
  );
};

export default IAmBody;
