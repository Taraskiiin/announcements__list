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
    time: req.body.time || " ",
  });
  newAnnouncementList
    .save()
    .then((announcementsList) => res.json(announcementsList));
});
router.put("/:id", async (req, res) => {
  const Announcement = await AnnouncementsList.findById(req.params.id); 
    Announcement.name = req.body.name || " ";
    Announcement.time = req.body.time || " ";
    Announcement.save();
    res.redirect("/:id");
});
router.put("/:id/change__post", async (req, res) => {
  const Announcement = await AnnouncementsList.findById(req.params.id); 
    Announcement.post = req.body.post || " ";
    Announcement.time = req.body.time || " ";
    Announcement.save();
    res.redirect("/:id");
});
router.delete("/:id", (req, res) => {
  AnnouncementsList.findByIdAndDelete(req.params.id).then(() =>
    res.json({ remove: true })
  );
});
module.exports = router;
