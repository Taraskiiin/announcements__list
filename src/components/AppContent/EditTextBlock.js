import React, { useState } from "react";
import { changeTextOfAnnouncement } from "../../helpers/api";

const EditTextBlock = ({ list, setInEditMode, isInEditMode, setInputValue, inputValue }) => {
  const [isLoading, setIsLoading] = useState(false);
  const onClose = () => {
    setInEditMode(!isInEditMode);
    setInputValue("");
  };
  const updatePost = () => {
    setIsLoading(true);
    changeTextOfAnnouncement(list._id, inputValue)
      .finally(() => {
        setIsLoading(false);
        onClose(false);
      });
  };
  return (
    <div className="edit_content__popup">
      {setInEditMode && (
        <>
          <div onClick={() => setInEditMode(false)} className="edit__text-close-btn">
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
        </>
      )}
    </div>
  );
};
export default EditTextBlock;
