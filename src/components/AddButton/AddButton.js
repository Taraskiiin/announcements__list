import React, { useState, Fragment } from "react";
import Addpopup from "./Addpopup";

const Add__button = (onAdd) => {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  return (
    <Fragment>
      <button
        className="button create-new__button"
        onClick={() => setVisiblePopup(!visiblePopup)}
      >
        Create new announcements
      </button>
      <Addpopup
        visiblePopup={visiblePopup}
        setVisiblePopup={setVisiblePopup}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        inputValue={inputValue}
        setInputValue={setInputValue}
        onAdd={onAdd}
      />
    </Fragment>
  );
};
export default Add__button;
