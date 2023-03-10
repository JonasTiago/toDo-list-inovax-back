import joi from 'joi';
import { TaskInput } from '../repositories/task-repository';

const taskSchema = joi.object<TaskInput>({
  text: joi.string().min(5).required(),
  done: joi.boolean(),
});

export default taskSchema;
