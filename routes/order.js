import express from "express";
import { createOrder, getOrder } from "../controllerss/order.js";
export const orderRouter = express.Router();
orderRouter.post("/", createOrder).get("/", getOrder);
