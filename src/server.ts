import express, { Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/database';
import enrollmentRoutes from './routes/enrollmentRoutes';
import adminRoutes from './routes/adminRoutes';


dotenv.config();

const app: Application = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/enrollments', enrollmentRoutes);
app.use('/api/admin/login', adminRoutes);

const PORT = process.env.PORT || 5000;



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// use skillup
// db.admins.insertOne({
//   email: "admin@skillup.com",
//   password: "your_hashed_password_here"
// })