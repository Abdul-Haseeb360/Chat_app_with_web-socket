const http = require("http");
const express = require("express");
const PORT = 8000;
const path = require("path");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  socket.on("chat message", (data) => {
    io.emit("chat message", data);
  });
});

app.use(express.static(path.resolve("./public")));

app.get("/", (req, res) => {
  return res.sendFile(path.resolve("/public/index.html"));
});

server.listen(PORT, () => console.log(`Server is ruuning at ${PORT}`));
