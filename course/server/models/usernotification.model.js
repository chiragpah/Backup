const mongoose = require("mongoose");

// Schema for user notifications
const userNotificationSchema = new mongoose.Schema({
    user: Object,
    title: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        default: "unread"
    }
}, { timestamps: true });

// Model for user notifications
const userNotificationModel = mongoose.model('UserNotification', userNotificationSchema);
module.exports = { userNotificationModel };