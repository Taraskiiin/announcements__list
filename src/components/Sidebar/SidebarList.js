import React from "react";

import "./SidebarList.css";
import AddButton from "../AddButton/AddButton";
import List from "../List/List.js";

const Sidebar__list = ({lists, setLists, onClickItem, activeItem}) => {
  const onAddList = (obj) => {
    const newList = [...lists, obj];
    setLists(newList);
  };
  const [searchQuery, setSearchQuery] = React.useState(" ");
  return (
    <div sidebar__block>
      <ul className="sidebar__list">
        <li>
          <label htmlFor="search__holder">
            <i className="fa fa-search icon"></i>
          </label>
          <input
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            placeholder="Search"
            id="search__holder"
            className="holder"
          />
        </li>
        {lists ? (
          <List
            onRemoveList={(id) => {
              const newLists = lists.filter((item) => item.id !== id);
              setLists(newLists);
            }}
            items={lists}
            onClickItem={onClickItem}
            activeItem = {activeItem}
            isRemovable
          />
        ) : (
          "...Loading"
        )}
      </ul>
      <AddButton onAdd={onAddList}/>
    </div>
  );
};

export default Sidebar__list;
