import React, { useState, Fragment } from "react";
import { postNewAnnouncement } from "../../helpers/api";
import { changeTextOfAnnouncement } from "../../helpers/api";
import "./AddButtonStyle.css";

const EditTextBlock = (onAdd) => {
  const ChosenId = list._id;
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const onClose = () => {
    setVisiblePopup(!setInputValue);
    setInputValue("");
  };
  const updatePost = () => {
    setIsLoading(true);
    postNewAnnouncement(inputValue)
      .then(({ data }) => {
        const listObj = { ...data, names: [] };
        onAdd(listObj);
      })
      .catch(() => {
        alert("ohhh man, we have create new announcement^-^");
      })
      .finally(() => {
        setIsLoading(false);
        onClose();
      });
  };
  return (
    <Fragment>
      {visiblePopup && (
        <div className="add__list__popup">
          <div onClick={() => onClose()} className="edit__text-close-btn">
            <i className="fa fa-close icon"></i>
          </div>
          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            placeholder="Bla bla bla"
            className="create__holder holder"
          ></textarea>
          <div className="button add-new__btn" onClick={updatePost}>
            {isLoading ? "Updating..." : "Submit"}
          </div>
        </div>
      )}
    </Fragment>
  );
};
export default EditTextBlock;
