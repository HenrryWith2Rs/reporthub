import express from 'express';
const app = express();
import cors from 'cors';
import koreRoutes from './routes/koreRoutes';

// middleware
app.use(express.json());
app.use(cors({}));

// routes
app.use('/api', koreRoutes);

const port = 3001;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
