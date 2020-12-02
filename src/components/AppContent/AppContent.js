import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

import "./AppContent.css";

const App__content = ({ lists, onEditTitle }) => {
  const [isInEditMode, setInEditMode] = useState(false);
  const [time, setTime] = useState(null);
  const [posts, setPosts] = useState("");
  const ChosenId = lists.id;
  const theInputText = useRef();
  useEffect(() => {
    axios.get("http://localhost:3000/posts/" + ChosenId).then(({ data }) => {
      setPosts(data);
    });
    axios.get("http://localhost:3000/time/" + ChosenId).then(({ data }) => {
      setTime(data);
    });
  }, [posts]);
  const editTitle = () => {
    const newTitle = window.prompt(
      "New title of announcement, reload this page please",
      lists.name
    );
    if (newTitle) {
      onEditTitle(lists.id, newTitle);
      axios
        .patch("http://localhost:3000/lists/" + ChosenId, {
          name: newTitle,
        })
        .catch(() => alert(`We can't change this title`));
    }
  };
  const renderEditView = () => {
    return (
      <div className="announcements__text">
        <textarea defaultValue={posts.text} ref={theInputText}></textarea>
        <button className="update__text" onClick={() => updatingText()}>
          <i className="fa fa-save icon"></i>
        </button>
        <button
          className="close__texteditor"
          onClick={() => setInEditMode(!isInEditMode)}
        >
          <i className="fa fa-close icon"></i>
        </button>
      </div>
    );
  };
  const renderDefaultView = () => {
    return (
      <div
        onDoubleClick={() => setInEditMode(!isInEditMode)}
        className="announcements__text"
      >
        {posts.text}
      </div>
    );
  };
  const updatingText = () => {
    setInEditMode(false);
    axios
      .patch("http://localhost:3000/Posts/" + ChosenId, {
        text: theInputText
      })
      .catch(() => alert(`We can't change this text`));
  };
  return (
    <div className="app__content">
      <h2 className="announcements__title">
        {lists.name}
        <button onClick={editTitle} className="edit_btn">
          <i className="fa fa-edit icon"></i>
        </button>
      </h2>
      {isInEditMode ? renderEditView() : renderDefaultView()}
      {time && <p className="announcements__time">{time.value}</p>}
    </div>
  );
};
export default App__content;
