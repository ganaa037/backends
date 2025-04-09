import express, { json } from "express";
import { v4 as uuidv4 } from "uuid";
import { userRouter } from "./routes/user.js";
const port = 8000;
const app = express();
app.use(json());
app.use(userRouter);
let order = [];
let users = [];

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
