import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

const port = 8080;

app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log("A user connected");

  io.emit("chat message", "A user connected");

  socket.on("chat message", (message) => {
    io.emit("chat message", message);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");

    io.emit("chat message", "A user disconnected");
  });
});

httpServer.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
