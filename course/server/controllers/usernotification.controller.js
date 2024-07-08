const { userNotificationModel } = require("../models/usernotification.model");
const ErrorHandler = require("../utils/ErrorHandler");

const createUserNotification = async (req, res, next) => {
    try {
        const { user, title, message, status } = req.body;

        // Create a new user notification
        const newUserNotification = new userNotificationModel({
            user,
            title,
            message,
            status: status || "unread", // Set the default status if not provided
        });

        // Save the user notification to the database
        await newUserNotification.save();

        res.status(201).json({
            success: true,
            message: "User notification created and saved successfully",
            notification: newUserNotification,
        });
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
};

const getUserNotifications = async (req, res, next) => {
    try {
        // Fetch all user notifications from the database
        const userNotifications = await userNotificationModel.find({});

        res.status(200).json({
            success: true,
            message: "User notifications fetched successfully",
            notifications: userNotifications,
        });
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
};

const deleteUserNotification = async (req, res, next) => {
    try {
        const notificationId = req.params.id;

        // Check if the notification exists
        const notification = await userNotificationModel.findById(notificationId);
        if (!notification) {
            return next(new ErrorHandler("Notification not found", 404));
        }

        // Delete the notification from the database
        await notification.deleteOne();

        res.status(200).json({
            success: true,
            message: "User notification deleted successfully",
        });
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
};

module.exports = { createUserNotification, getUserNotifications, deleteUserNotification };