import React, { useState, useEffect } from "react";
import { getList } from "./helpers/api"

import "./index.css";
import SidebarList from "./components/Sidebar/SidebarList";
import TitleBlock from "./components/AppContent/TitleBlock";
import TextBlock from "./components/AppContent/TextBlock"


function App() {
  const [lists, setLists] = useState([]);
  const onEditListTitle = (id, title) => {
    const newList = lists.map((item) => {
      if (item.id === id) {
        item.name = title;
      }
      return item;
    });
    setLists(newList);  
  };
  const [activeItem, setActiveItem] = useState(null);
  useEffect(() => {
    getList().then(({ data }) => {
      setLists(data);
    });
  }, [lists, activeItem]);
  return (
    <div className="app">
      <div className="app__sidebar">
        <SidebarList
          lists={lists}
          setLists={setLists}
          onClickItem={(item) => {
            setActiveItem(item);
          }}
          activeItem={activeItem}
        />
      </div>
      {lists && activeItem && (
        <div className="app__content">
        <TitleBlock list={activeItem} onEditTitle={onEditListTitle}/>
        <TextBlock list={activeItem}/>
        </div>
      )}
    </div>
  );
}

export default App;
