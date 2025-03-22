import express from "express";
import "reflect-metadata";
import { adRouter } from "./ads/ad.route";

const app = express();

app.use("/ad", adRouter);

export default app;
