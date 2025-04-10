import { v4 as uuidv4 } from "uuid";
const order = [];
export const createOrder = (req, res) => {
  const { food, price, userId } = req.body;
  // let usern = "";
  // users.map((us) => {
  //   if (us.id == id) {
  //     usern = users.username;
  //   }
  // });
  order.push({
    userId,
    // name: usern,
    food,
    price,
    createdAt: new Date(),
    updAte: new Date(),
    id: uuidv4(),
  });
  res.send({
    success: true,
    message: "amjilttai",
  });
};
export const getOrder = (req, res) => {
  res.send(order);
};
