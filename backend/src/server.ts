import { config as useDotEnv } from "dotenv";

import express from "express";

import { userRoutes } from "./routes/user.routes";
import { storageRoutes } from "./routes/storage.routes";

useDotEnv();

const PORT = process.env.PORT || 3000;

const server = express();

server.use(express.json());

server.use("/", (request, response) => {
  return response.status(200).json({ message: "Hello world!" });
});
server.use("/user", userRoutes);
server.use("/storage", storageRoutes);

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
