import { Request, Response } from 'express';
import httpStatus from 'http-status';
import taskService from '../services/task-service.js';

export async function getTask(req: Request, res: Response) {
  try {
    const user = await taskService.getTask();
    res.send(user);
  } catch (error) {
    res.sendStatus(httpStatus.NOT_FOUND);
  }
}

export async function createTask(req: Request, res: Response) {
  const { text }: { text: string } = req.body;
  try {
    await taskService.createTask(text);
    res.sendStatus(httpStatus.CREATED);
  } catch (err) {
    res.sendStatus(httpStatus.CONFLICT);
  }
}

export async function updateTask(req: Request, res: Response) {
  const { text, done }: { text: string; done: boolean } = req.body;
  const taskId: number = parseInt(req.params.id);
  try {
    await taskService.updateTask(taskId, text, done);
    res.sendStatus(httpStatus.OK);
  } catch (error) {
    res.sendStatus(httpStatus.CONFLICT);
  }
}

export async function deleteTask(req: Request, res: Response) {
  const taskId: number = parseInt(req.params.id);
  try {
    await taskService.deleteTask(taskId);
    res.sendStatus(httpStatus.OK);
  } catch (error) {
    res.sendStatus(httpStatus.NOT_FOUND);
  }
}
