import { Request, Response } from 'express';
import {Enrollment, IEnrollment } from '../models/Enrollment';

export const createEnrollment = async (req: Request, res: Response): Promise<void> => {
  try {
    const enrollment: IEnrollment = await Enrollment.create(req.body);
    res.status(201).json(enrollment);
  } catch (error) {
    res.status(400).json({ message: 'Error creating enrollment', error });
  }
};

export const getEnrollments = async (req: Request, res: Response): Promise<void> => {
  try {
    const enrollments: IEnrollment[] = await Enrollment.find().sort({ createdAt: -1 });
    res.status(200).json(enrollments);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching enrollments', error });
  }
};