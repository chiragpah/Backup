const { Server } = require('socket.io');
const http = require('http');
const initSocketServer = (server) => {
    const io = new Server(server, {
        cors: {
            origin: "http://localhost:4200",
            methods: ["GET", "POST"],
            allowedHeaders: ["my-custom-header"],
            credentials: true
        }
    });

    io.on("connection", (socket) => {
        console.log('user connected');

        socket.on('notification', (data) => {
            console.log("ew got the event " + data.user)
            socket.broadcast.emit('newNotification', data);
        });

        socket.on('annoucement_notify', (data) => {
            console.log("we got the event " + JSON.stringify(data.user))
            socket.broadcast.emit('newannoucement_notify', data);
        });
        socket.on('disconnect', () => {
            console.log("user disconnected");
        });
    });

    return io;
};

module.exports = { initSocketServer };