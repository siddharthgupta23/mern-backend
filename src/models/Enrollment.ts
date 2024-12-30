import mongoose from 'mongoose';

export interface IEnrollment {
  fullName: string;
  email: string;
  phoneNumber: string;
  qualification: string;
  message?: string;
  createdAt: Date;
}

const enrollmentSchema = new mongoose.Schema<IEnrollment>({
  fullName: {
    type: String,
    required: [true, 'Full name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email']
  },
  phoneNumber: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true
  },
  qualification: {
    type: String,
    required: [true, 'Qualification is required'],
    trim: true
  },
  message: {
    type: String,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export const Enrollment = mongoose.model<IEnrollment>('Enrollment', enrollmentSchema);