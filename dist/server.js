import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/database.js';
import enrollmentRoutes from './routes/enrollmentRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import path from "path";
dotenv.config();
const app = express();
// Connect to MongoDB
connectDB();
// Middleware
app.use(cors());
app.use(express.json());
const __dirname = path.resolve();
// Routes
app.use('/api/enrollments', enrollmentRoutes);
app.use('/api/admin/login', adminRoutes);
const PORT = process.env.PORT || 5000;
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../my-react-app/dist")));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../my-react-app", "dist", "index.html"));
    });
}
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
// use skillup
// db.admins.insertOne({
//   email: "admin@skillup.com",
//   password: "your_hashed_password_here"
// })
