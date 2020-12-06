import React, { useState, useEffect } from "react";
import axios from "axios";

import "./index.css";
import SidebarList from "./components/Sidebar/SidebarList";
import AppContent from "./components/AppContent/AppContent";

function App() {
  const [lists, setLists] = useState(null);
  useEffect(() => {
    axios.get("/").then(({ data }) => {
      setLists(data);
    });
  }, [lists]);
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
        <AppContent lists={activeItem} onEditTitle={onEditListTitle} />
      )}
    </div>
  );
}

export default App;
