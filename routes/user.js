import express from "express";
import {
  CreateUser,
  getUserById,
  getUsers,
  userDelete,
  userUpdate,
} from "../controllerss/user.js";

export const userRouter = express.Router();

userRouter
  .post("/", CreateUser)
  .get("/:id", getUserById)
  .get("/", getUsers)
  .delete("/", userDelete)
  .put("/", userUpdate);
