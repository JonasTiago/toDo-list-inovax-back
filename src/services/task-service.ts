import httpStatus from 'http-status';
import taskRepository from '../repositories/task-repository.js';

async function getTask() {
  const user = await taskRepository.getTask();
  return user;
}

async function createTask(text: string) {
  const conflict = await taskRepository.getTaskByContent(text);
  if (conflict && !conflict.done) {
    throw httpStatus.CONFLICT;
  }
  await taskRepository.createTask(text);
}

async function updateTask(taskId: number, text: string, done: boolean) {
  const upTask = await taskRepository.updateTask(taskId, text, done);
  if (!upTask) {
    throw httpStatus.NOT_FOUND;
  }
}

async function deleteTask(taskId: number) {
  const delTask = await taskRepository.deleteTask(taskId);
  if (!delTask) {
    throw httpStatus.NOT_FOUND;
  }
}

const taskService = {
  getTask,
  createTask,
  updateTask,
  deleteTask,
};

export default taskService;
