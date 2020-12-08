const { Router } = require("express");
const AnnouncementsList = require("../models/Announcementlist");
const router = Router();

router.get("/", async (req, res) => {
  AnnouncementsList.find().then((announcementsList) =>
    res.json(announcementsList)
  );
});
router.post("/", async (req, res) => {
  const newAnnouncementList = AnnouncementsList({
    name: req.body.name || " ",
    post: " ",
    time: " "
  });
  newAnnouncementList
    .save()
    .then((announcementsList) => res.json(announcementsList));
});
// router.put("/:id", async (req, res) => {
//   const announcements = await AnnouncementsList.findByIdAndUpdate(req.params.id, req.body);
//   const newAnnouncementList = {
//     name: req.body.name,
//     ...announcements
//   };
//   newAnnouncementList
//     .save()
//     .then((announcementsList) => res.json(announcementsList));
// });

router.delete('/:id', (req, res) => {
  AnnouncementsList.findByIdAndDelete(req.params.id)
  .then(() => res.json({ remove: true }))
})
module.exports = router;
