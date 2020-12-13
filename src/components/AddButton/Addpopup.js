import React, { Fragment } from "react";
import { postNewAnnouncement } from "../../helpers/api";
import './Addpopup.css';

const Addpopup = ({
  visiblePopup,
  setVisiblePopup,
  isLoading,
  setIsLoading,
  inputValue,
  setInputValue,
  onAdd,
}) => {
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
    postNewAnnouncement(inputValue)
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
      {visiblePopup && (
        <div className="add__list__popup">
          <button
            onClick={() => onClose()}
            className="add-list__popup-close-btn"
          >
            <i className="fa fa-close icon"></i>
          </button>
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
export default Addpopup;
