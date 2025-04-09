import { v4 as uuidv4 } from "uuid";
import { userRouter } from "../routes/user.js";

const users = [];
export const CreateUser = (request, response) => {
  const { username, gender, age, email } = request.body;
  console.log(username, gender, age, email, "body");
  users.push({
    username,
    gender,
    age,
    email,
    id: uuidv4(),
  });
  console.log(users, "users");

  response.send({
    success: true,
    message: "done,",
  });
};
export const getUsers = (req, res) => {
  res.send(users);
};
export const getUserById = (req, res) => {
  const { id } = userRouter;
  const mail = users.find((users) => {
    users.id === id;
  });
  res.send(mail);
};
export const userDelete = (req, res) => {
  const { id } = req.body;
  const users = users.filter((user) => user.id !== id);
  res.send({
    success: true,
    message: "removed",
  });
};
export const userUpdate = (req, res) => {
  const { id, username, email, gender, age } = req.body;
  const response = users.map((user) => {
    if (user.id == id) {
      user.username = username;
      user.email = email;
      user.gender = gender;
      user.age = age;
    }
    return users;
  });
  res.send({
    success: true,
    message: "update",
  });
};
