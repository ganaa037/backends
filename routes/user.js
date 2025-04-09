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
  .post("/users/:id", CreateUser)
  .get("/user", getUserById)
  .get("/user", getUsers)
  .delete("/user", userDelete)
  .put("/user", userUpdate);
