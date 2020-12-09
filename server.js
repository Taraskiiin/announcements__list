const express = require("express");
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const announcementsRoutes = require('./routes/annoucementRoute')
const PORT = process.env.PORT || 3000
app.use(cors());
app.use(express.json());
app.use(announcementsRoutes);

async function start() {
    try {
        await mongoose.connect('mongodb+srv://taraskiiin:1q2w3e4r@cluster0.vfjn8.mongodb.net/announcementlist', {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => {
            console.log("Server was started!");
        });
    }
    catch (e) {
        console.log(e);
    }
}

start ();