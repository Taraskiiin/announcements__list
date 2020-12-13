import React from "react";
import { changeTextOfAnnouncement } from "../../helpers/api";

import "./EditTextBlock.css";

const EditTextBlock = ({
  list,
  setInEditMode,
  isInEditMode,
  setInputValue,
  inputValue,
}) => {
  const onClose = () => {
    if (window.confirm("Leave without changes?")) {
      setInEditMode(!isInEditMode);
      setInputValue(`${list.post}`);
    }
  };
  const updatePost = () => {
    changeTextOfAnnouncement(list._id, inputValue).then(setInEditMode(!isInEditMode)).finally(alert("Successful update! Open this announcement again, honey ^-^"));
  };
  return (
    <div className="edit_content__popup">
      {setInEditMode && (
        <>
          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            placeholder="Bla bla bla"
            className="change__content-area"
          ></textarea>
          <div className="save-change__btn" onClick={updatePost}>
            <i className="fa fa-save icon"></i>
          </div>
          <div onClick={() => onClose()} className="edit__text-close-btn">
            <i className="fa fa-close icon"></i>
          </div>
        </>
      )}
    </div>
  );
};
export default EditTextBlock;
