import React from "react";
import "./IAmBody.css";

const iAmBody = () => {
  return (
    <div className="row">
      <div className="col s12 m6 offset-m3">
        <div
          className="card light-blue lighten-5"
          style={{ marginTop: "25px" }}
        >
          <div className="card-content">
            <span className="card-title">名前</span>
            <p>安達 雄太郎</p>
          </div>
          <div className="card-action">
            <button
              className="waves-effect waves-light btn"
              style={{ marginRight: "20px" }}
            >
              <i className="material-icons left">edit</i>編集
            </button>
            <button className="waves-effect waves-light btn">
              <i className="material-icons left">delete</i>削除
            </button>
          </div>
        </div>
      </div>

      <div className="col s12 m6 offset-m3">
        <div className="card light-blue lighten-5">
          <div className="card-content">
            <span className="card-title">趣味</span>
            <p>私の趣味は〇〇です。</p>
          </div>
          <div className="card-action">
            <button
              className="waves-effect waves-light btn"
              style={{ marginRight: "20px" }}
            >
              <i className="material-icons left">edit</i>編集
            </button>
            <button className="waves-effect waves-light btn">
              <i className="material-icons left">delete</i>削除
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default iAmBody;
