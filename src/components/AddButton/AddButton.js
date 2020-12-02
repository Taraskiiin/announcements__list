import React, { useState, Fragment } from "react";
import axios from "axios";

import "./AddButtonStyle.css";

const Add__button = (onAdd) => {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const onClose = () => {
    setVisiblePopup(!setInputValue);
    setInputValue("");
  };
  const addList = () => {
    if (!inputValue) {
      alert("Enter name for new annoucements");
      return;
    }
    setIsLoading(true);
    axios
      .post("http://localhost:3000/lists", {
        name: inputValue,
      })
      .then(({ data }) => {
        const listObj = { ...data, names: [] };
        onAdd(listObj);
       
      })
      .catch(() => {
        alert("ohhh man, we have update-list ^-^");
      })
      .finally(() => {
        setIsLoading(false);
        onClose();
      });
  };
  return (
    <Fragment>
      <button
        className="button create-new__button"
        onClick={() => setVisiblePopup(!visiblePopup)}
      >
        Create new announcements
      </button>
      {visiblePopup && (
        <div className="add__list__popup">
          <button
            onClick={() => onClose()}
            className="add-list__popup-close-btn"
          ><i className="fa fa-close icon"></i></button>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            placeholder="Enter new announcements name:"
            className="create__holder holder"
          ></input>
          <button className="button add-new__btn" onClick={addList}>
            {isLoading ? "Updating..." : "Submit"}
          </button>
        </div>
      )}
    </Fragment>
  );
};
export default Add__button;
