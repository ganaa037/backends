import express, { json } from "express";

import { userRouter } from "./routes/user.js";
import { orderRouter } from "./routes/order.js";
import { config } from "dotenv";
import cors from "cors";
config();
const port = process.env.PORT;

const app = express();

app.use(json());
app.use(cors());
app.use("/user", userRouter);
app.use("/order", orderRouter);

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
  console.log(`Server running at http://localhost:${port}`);
});
