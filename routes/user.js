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
  .post("/user/", CreateUser)
  .get("/user:id", getUserById)
  .get("/user", getUsers)
  .delete("/user", userDelete)
  .put("/user", userUpdate);
