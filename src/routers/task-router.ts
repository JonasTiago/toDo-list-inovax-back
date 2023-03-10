import { Router } from 'express';
import {
  createTask,
  deleteTask,
  getTask,
  updateTask,
} from '../controllers/task-controller.js';
import { validateSchemaMiddleware } from '../middlewares/schema-validator.js';
import taskSchema from '../schemas/task-schema.js';

const taskRouter = Router();
taskRouter.get('/task', getTask);
taskRouter.post('/task', validateSchemaMiddleware(taskSchema), createTask);
taskRouter.put('/task/:id', validateSchemaMiddleware(taskSchema), updateTask);
taskRouter.delete('/task/:id', deleteTask);

export default taskRouter;
