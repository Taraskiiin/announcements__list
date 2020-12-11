import axios from "axios";
import moment from "moment";

export const getList = () => {
  return axios.get("https://secure-wave-34428.herokuapp.com/");
};

export const postNewAnnouncement = (inputValue) => {
  return axios.post("https://secure-wave-34428.herokuapp.com/", {
    name: inputValue,
    time: moment().format("MMMM Do YYYY, h:mm:ss a"),
  });
};

export const deleteAnnouncements = (id) => {
  return axios.delete(`https://secure-wave-34428.herokuapp.com/${id}`);
};

export const changeNameOfAnnouncement = (id, newName) => {
  return axios.put(`https://secure-wave-34428.herokuapp.com/${id}`, {
    name: newName,
    time: moment().format("MMMM Do YYYY, h:mm:ss a"),
  });
};

export const changeTextOfAnnouncement = (id, newText) => {
    return axios.put(`https://secure-wave-34428.herokuapp.com/${id}/change__post`, {
        post: newText, 
        time: moment().format("MMM Do YY"),
    })
};