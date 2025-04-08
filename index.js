import express, { json } from "express";
import { v4 as uuidv4 } from "uuid";
const port = 8000;
const app = express();
app.use(json());

let users = [];
app.post("/user/create", (request, response) => {
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
});
app.get("/users", (req, res) => {
  res.send(users);
});
app.get("/user", (req, res) => {
  const { id } = req.body;
  const mail = users.find((users) => {
    users.id === req.body.id;
  });
  res.send(mail);
});
app.delete("/user/delete", (req, res) => {
  const { id } = req.body;
  users = users.filter((user) => user.id !== id);
  res.send({
    success: true,
    message: "removed",
  });
});
// app.get("/", (req, res) => {
//   res.send("hello world");
// });
// app.get("/user", (req, res) => {
//   const { username, password } = req.body;
//   console.log(username, "use");

//   if (username.length < 5) {
//     res
//       .status(404)
//       .send({
//         success: false,
//         message: "username zaawal 5 aas deesh bh",
//       })
//       .end();
//   }
//   if (password.length < 5) {
//     res.status(404).send({
//       success: false,
//       message: "pass zaawal 5 aas deesh bh",
//     });
//   }
//   res.send({ success: true });
//   console.log(req.body, "req");
// });

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
