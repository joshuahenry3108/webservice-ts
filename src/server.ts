import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json());

// GET / endpoint
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Welcome to the API',
    timestamp: new Date().toISOString()
  });
});

// GET /health endpoint
app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'healthy',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
