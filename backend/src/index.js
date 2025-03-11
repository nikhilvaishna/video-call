import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";

import { connectToSocket } from "./controllers/socketManager.js";
import mongoose from "mongoose";

import cors from "cors";
import userRoutes from "./routes/users.routes.js";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port", process.env.PORT || 5000);
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

app.use("/api/v1/users", userRoutes);

server.listen(app.get("port"), () => {
  console.log("app is listening on port 5000");
  mongoose.connect(
    "mongodb+srv://nikhilkumarp066:Nikhilk%407048@cluster0.oaq1f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  console.log("db connnected");
});
