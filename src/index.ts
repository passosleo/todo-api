import 'dotenv/config'
import express, { Application } from "express";
import db from "./config/dbConnect";
import routes from "./routes/index";

db.on("error", console.error.bind(console, "Connection Error"));

db.once("open", () => {
  console.log("Connected to mongoDB");
});

const app: Application = express();

app.use(express.json());

routes(app);

const port: number | string = process.env.PORT ?? 6000;

app.listen(port, () => {
  console.log(`Server initilized in http://localhost:${port}`);
});

export default app;
