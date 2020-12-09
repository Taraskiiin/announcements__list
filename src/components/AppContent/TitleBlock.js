import React from "react";
import { changeNameOfAnnouncement } from "../../helpers/api"

import "./TitleBlock.css";

const TitleBlock = ({ list, onEditTitle }) => {
  const ChosenId = list._id;
  const editTitle = () => {
    const newTitle = window.prompt(
      "New title of announcement:",
      list.name
    );
    if (newTitle) {
      onEditTitle(ChosenId, newTitle);
      changeNameOfAnnouncement(ChosenId, newTitle).catch(() => alert(`We can't change this title`));}
  };
  return (
    <div className="app__title">
      <h2 className="announcements__title">
        {list.name}
        <span onClick={editTitle} className="edit_btn">
          <i className="fa fa-edit icon"></i>
        </span>
      </h2>
    </div>
  );
};
export default TitleBlock;
