import React, { Fragment } from "react";
import classNames from "classnames";
import axios from "axios";

import "./list.css";

const List = ({ isRemovable, onRemoveList, items, onClickItem, activeItem }) => {
  const removeList = (id) => {
    if (window.confirm("You really want to remove this announcements?")) {
      axios.delete("/" + id).then(() => {
        onRemoveList(id);
      });
    }
  };
  return (
    <Fragment>
      {items.map((item, index) => (
        <li
          key={index}
          className={classNames(item.className, { active: activeItem && activeItem.id === item.id })}
          onClick = {onClickItem ? () => onClickItem(item) : null}
        >
          <span>{item.name}</span>
          {isRemovable && (
            <button
              onClick={() => removeList(item.id)}
              className="list__remove-btn"
            >
              <i className="fa fa-close icon"></i>
            </button>
          )}
        </li>
      ))}
    </Fragment>
  );
};
export default List;
