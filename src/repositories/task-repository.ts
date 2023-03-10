import { Task } from '@prisma/client';
import prisma from '../config/database.js';

export type TaskInput = Omit<Task, 'id' | 'createdAt' | 'updatedAt'>;

async function getTask() {
  const tasks = await prisma.task.findMany({
    orderBy: {
      id: 'asc',
    },
  });
  return tasks.reverse();
}

async function getTaskByContent(text: string) {
  return await prisma.task.findFirst({
    where: {
      text,
    },
  });
}

async function createTask(text: string) {
  return await prisma.task.create({
    data: {
      text,
    },
  });
}

async function updateTask(id: number, text: string, done: boolean) {
  return await prisma.task.update({
    where: {
      id,
    },
    data: {
      text,
      done,
    },
  });
}
async function deleteTask(id: number) {
  return await prisma.task.delete({
    where: {
      id,
    },
  });
}

const TaskRepository = {
  getTask,
  getTaskByContent,
  createTask,
  updateTask,
  deleteTask,
};

export default TaskRepository;
