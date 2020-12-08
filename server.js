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

// app.get("/", (req, res) => {
//   res.send();
// });
// app.post("/", (req, res) => {
//   const { emails = [] } = req.body;
//   const uniqEmails = new Set(emails);
//   const validEmails = [];
//   const requests = [...uniqEmails].map(
//     (el) =>
//       new Promise((resolve, reject) => {
//         emailExists({
//           sender: "taraskravets95@gmail.com",
//           recipient: el,
//         }).then((data) => { 
//           if (data === "NOT_FOUND") {
//             validEmails.push(el);
//           }
//           return resolve();
//         }).catch(resolve);
//       })
//   );
//   Promise.all(requests).then(() => res.json({ emails: validEmails }));
// });

start ();