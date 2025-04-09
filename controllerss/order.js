export const userCreate = (req, res) => {
  const { food, price, userId } = req.body;
  // let usern = "";
  // users.map((us) => {
  //   if (us.id == id) {
  //     usern = users.username;
  //   }
  // });
  order.push({
    userId,
    name: usern,
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
app.get("/order", (req, res) => {
  res.send(order);
});
