const mongoose = require('mongoose');

const announcementSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    launchDate: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    thumbnailUrl: {
        type: String,
        required: true
    }
});

const Announcement = mongoose.model('Announcement', announcementSchema);

module.exports = Announcement;