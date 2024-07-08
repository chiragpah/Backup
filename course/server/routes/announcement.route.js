const express = require('express');
const router = express.Router();
const multer = require('multer');
const { deleteAnnouncementById, uploadAnnouncement, getallannoucement } = require('../controllers/course.controller');

// Configure Multer for handling file uploads
const storage = multer.diskStorage({});
const upload = multer({ storage });

router.post('/upload', upload.single('thumbnail'), uploadAnnouncement);
router.get('/getallnotifications', getallannoucement);
router.delete('/deleteannouncement/:id', deleteAnnouncementById);

module.exports = router;