import express, { Router } from "express";
import TasksController from "../controllers/tasksController";

const router: Router = express.Router();

router
  .get("/tasks", TasksController.getTasks)
  .get("/tasks/:id", TasksController.getTaskById)
  .post("/tasks", TasksController.registerTask)
  .put("/tasks/:id", TasksController.updateTask)
  .delete("/tasks/:id", TasksController.deleteTask);

export default router;