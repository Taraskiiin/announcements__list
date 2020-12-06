const { Router } = require('express')
const AnnouncementsList = require('../models/Announcementlist')
const router = Router()

router.get('/', async (req, res) => {
    AnnouncementsList.find().then(announcementsList => res.json(announcementsList))
})
router.post('/create', (req, res) => {
    const newAnnouncementList = new AnnouncementList ({
        name: req.body.name,
        post,
        time 
        })
        newAnnouncementList.save().then(announcementsList => res.json(announcementsList))
})

router.post('/change_name', async (req, res) => {
    const announcements = await AnnouncementsList.findById(req.body.id)
    const newAnnouncementList = {
        name: req.body.name,
        ...announcements
        })
        newAnnouncementList.save().then(announcementsList => res.json(newAnnouncementList))
})

// router.post('/complete', async (req, res) => {
//   const todo = await Todo.findById(req.body.id)

//   todo.completed = !!req.body.completed
//   await todo.save()

//   res.redirect('/')
// })

module.exports = router