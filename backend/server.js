import { app } from "./app.js";
import { Server } from "socket.io";
import http from "http";
import { config } from "dotenv";
import { connect } from "./utils/db.js";

const server = http.createServer(app);
const io = new Server(server,{
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
      },
});

config({
    path: "./config.env",
  });

connect();

io.on("connection", (socket) => {
    console.log("Socket connected: " + socket.id);
    socket.on("disconnect", () => {
        console.log("Socket disconnected: " + socket.id);
    });
})
server.listen(8000,() => {console.log("Socket server running on port 8000")});