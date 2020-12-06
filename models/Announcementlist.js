const { Schema, model } = require("mongoose");

const shema = new Schema({
  name: {
    type: String,
    required: true,
  },
  post: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});

module.exports = model("AnnouncementsList", shema);
