import React, { useState, useRef } from "react";
import { changeTextOfAnnouncement } from "../../helpers/api";
import "./TextBlock.css";

const TextBlock = ({ list }) => {
  const [isInEditMode, setInEditMode] = useState(true);
  const ChosenId = list._id;
  const theInputText = useRef();

  const renderEditView = () => {
    return (
      <div className="announcements__text">
        <input defaultValue={list.post} ref={theInputText}></input>
        <button className="update__text" onClick={() => updatingText()}>
          <i className="fa fa-save icon"></i>
        </button>
        <button
          className="close__texteditor"
          onClick={() => setInEditMode(!isInEditMode)}
        >
          <i className="fa fa-close icon"></i>
        </button>
      </div>
    );
  };
  const renderDefaultView = () => {
    return (
      <div
        onDoubleClick={() => setInEditMode(!isInEditMode)}
        className="announcements__text"
      >
        {list.post}
      </div>
    );
  };
  const updatingText = () => {
    setInEditMode(!isInEditMode);
    changeTextOfAnnouncement(ChosenId, theInputText).catch(() =>
      alert(`We can't change this text`)
    );
  };
  return (
    <div>
      {isInEditMode ? renderEditView() : renderDefaultView()}
      {list && <p className="announcements__time">{list.time}</p>}
    </div>
  );
};
export default TextBlock;
