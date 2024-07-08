const express = require("express")
const { authorizeRoles, isAuthenticated } = require("../middleware/auth");
const { getNotifications, updateNotification, createNotification, deleteNotification } = require("../controllers/notification.controller");
const { createUserNotification, getUserNotifications, deleteUserNotification } = require('../controllers/usernotification.controller');
const notificationRoute = express.Router();
notificationRoute.get("/get-all-notifications", isAuthenticated, authorizeRoles("admin"), getNotifications);
notificationRoute.put("/update-notification/:id", isAuthenticated, authorizeRoles("admin"), updateNotification);
notificationRoute.post("/post-notification", isAuthenticated, createNotification);
notificationRoute.delete("/delete-notification/:id", isAuthenticated, authorizeRoles("admin"), deleteNotification);
notificationRoute.post('/user-notifications', createUserNotification);

// Route for fetching all user notifications
notificationRoute.get('/user-notifications', getUserNotifications);
notificationRoute.get('/user-notifications', getUserNotifications);
notificationRoute.delete('/user-notifications/:id', deleteUserNotification);
module.exports = notificationRoute;