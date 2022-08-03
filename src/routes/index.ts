import express, { Application, Request, Response } from "express";
import tasks from "./tasksRoutes";

const routes = (app: Application) => {

  app.route("/").get((req: Request, res: Response) => {
    res.status(200).send("Todo API v1.0.0");
  });

  app.use(express.json(), tasks);
};

export default routes;
