import React, { useState, Fragment } from "react";

import "./TextBlock.css";
import "./EditTextBlock";
const TextBlock = ({ list }) => {
  const [isInEditMode, setInEditMode] = useState(false);
  return (
    <Fragment>
      {isInEditMode ? (
        <EditTextBlock list={list} setInEditMode={setInEditMode()}/>
      ) : (
        <div
          onDoubleClick={() => setInEditMode(!isInEditMode)}
          className="announcements__text"
        >
          {list.post}
        </div>
      )}
      {list && <p className="announcements__time">{list.time}</p>}
    </Fragment>
  );
};
export default TextBlock;
