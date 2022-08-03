import express, { Application } from "express";
import db from "./config/dbConnect";
import routes from "./routes/index";

db.on("error", console.error.bind(console, "Connection Error"));

db.once("open", () => {
  console.log("Connected to mongoDB");
});

const app: Application = express();

const port: Number | String = process.env.PORT || 6000;

app.use(express.json());

routes(app);

app.listen(port, () => {
  console.log(`Server initilized in http://localhost:${port}`);
});

export default app;
