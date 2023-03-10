import express, { json, Request, Response } from 'express';
import cors from 'cors';
import taskRouter from './routers/task-router.js';

const app = express();
app.use(json()).use(cors());

app.get('/health', (req: Request, res: Response) => res.send("I'm ok!"));
app.use(taskRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
