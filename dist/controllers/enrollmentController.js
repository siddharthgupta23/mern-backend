import { Enrollment } from '../models/Enrollment.js';
export const createEnrollment = async (req, res) => {
    try {
        const enrollment = await Enrollment.create(req.body);
        res.status(201).json(enrollment);
    }
    catch (error) {
        res.status(400).json({ message: 'Error creating enrollment', error });
    }
};
export const getEnrollments = async (req, res) => {
    try {
        const enrollments = await Enrollment.find().sort({ createdAt: -1 });
        res.status(200).json(enrollments);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching enrollments', error });
    }
};
