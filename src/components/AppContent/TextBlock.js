import React, { useState, Fragment } from "react";
import "./TextBlock.css";
import EditTextBlock from "./EditTextBlock";
const TextBlock = ({ list }) => {
  const [isInEditMode, setInEditMode] = useState(false);
  const [inputValue, setInputValue] = useState(`${list.post}`);
  return (
    <div className="content__text-block">
      {isInEditMode ? (
        <EditTextBlock
          list={list}
          setInEditMode={setInEditMode}
          isInEditMode={isInEditMode}
          setInputValue={setInputValue}
          inputValue={inputValue}
        />
      ) : (
        <div>
          <p
            onDoubleClick={() => setInEditMode(!isInEditMode)}
            className="announcements__text"
          >
            {list.post}
          </p>
          <p className="announcements__time">{list.time}</p>
        </div>
      )}
    </div>
  );
};
export default TextBlock;
