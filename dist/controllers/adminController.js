// import { Request, Response } from 'express';
// import jwt from 'jsonwebtoken';
// import {Admin , IAdmin } from '../models/Admin';
import jwt from 'jsonwebtoken';
import { Admin } from '../models/Admin.js';
export const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const admin = await Admin.findOne({ email });
        if (admin) {
            const passwordMatch = await admin.comparePassword(password);
            if (passwordMatch) {
                res.json({
                    _id: admin._id,
                    email: admin.email,
                    token: generateToken(admin._id),
                });
            }
            else {
                res.status(401).json({ message: 'Invalid password' });
            }
        }
        else {
            res.status(401).json({ message: 'Invalid email address' });
        }
    }
    catch (error) {
        console.error('Login error:', error); // Log the error for debugging
        res.status(500).json({ message: 'Error logging in', error: error instanceof Error ? error.message : 'Unknown error' });
    }
};
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
};
