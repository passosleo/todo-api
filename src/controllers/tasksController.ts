import { Request, Response } from 'express';
import { CallbackError } from "mongoose";
import Task from "../models/Task";
import { ITask } from '../types';

class TasksController {

  static getTasks = (req: Request, res: Response) => {
    Task.find((err: CallbackError, tasks: ITask) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - falha ao buscar tarefas.` });
      } else {
        res.status(200).json(tasks);
      }
    });
  };

  static getTaskById = (req: Request, res: Response) => {
    const id: string = req.params.id;

    Task.findById(id, (err: CallbackError, task: ITask) => {
      if (err) {
        res
          .status(400)
          .send({ message: `${err.message} - Id da tarefa não localizado.` });
      } else {
        res.status(200).send(task);
      }
    });
  };

  static registerTask = (req: Request, res: Response) => {
    const task = new Task(req.body);

    task.save((err: CallbackError, task: ITask) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - falha ao cadastrar tarefa.` });
      } else {
        res.status(201).send(task);
      }
    });
  };

  static updateTask = (req: Request, res: Response) => {
    const id: string = req.params.id;

    Task.findByIdAndUpdate(id, { $set: req.body }, (err: CallbackError) => {
      if (!err) {
        res.status(200).send({ message: `Tarefa ${id} atualizada com sucesso` });
      } else {
        res
          .status(500)
          .send({ message: `${err.message} - falha ao atualizar tarefa.` });
      }
    });
  };

  static deleteTask = (req: Request, res: Response) => {
    const id: string = req.params.id;

    Task.findByIdAndRemove(id, (err: CallbackError) => {
      if (!err) {
        res.status(200).send({ message: `Tarefa ${id} excluída com sucesso` });
      } else {
        res
          .status(500)
          .send({ message: `${err.message} - falha ao excluir tarefa.` });
      }
    });
  };
}

export default TasksController;
