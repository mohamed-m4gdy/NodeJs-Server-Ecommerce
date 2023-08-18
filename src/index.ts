import express, { Application, Request, Response } from 'express';

const PORT = 5000;
const app: Application = express();

// Add Route To Get Local
app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'hello World',
  });
});

app.listen(PORT, () => {
  console.log(`Server is Running Port: ${PORT}`);
});

export default app;
