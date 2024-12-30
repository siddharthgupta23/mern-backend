// import { Request, Response } from 'express';
// import jwt from 'jsonwebtoken';
// import {Admin , IAdmin } from '../models/Admin';

// export const loginAdmin = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const { email, password } = req.body;
//     const admin: IAdmin | null = await Admin.findOne({ email });

//     if (admin && (await admin.comparePassword(password))) {
//       res.json({
//         _id: admin._id,
//         email: admin.email,
//         token: generateToken(admin._id),
//       });
//     } else {
//       res.status(401).json({ message: 'Invalid email or password' });
//     }
//   } catch (error) {
//     res.status(500).json({ message: 'Error logging in', error });
//   }
// };

// const generateToken = (id: string): string => {
//   return jwt.sign({ id }, process.env.JWT_SECRET as string, {
//     expiresIn: '30d',
//   });
// };
// import { Request, Response } from 'express';
// import jwt from 'jsonwebtoken';
// import { Admin, IAdmin } from '../models/Admin';

// export const loginAdmin = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const { email, password } = req.body;
//     const admin: IAdmin | null = await Admin.findOne({ email });

//     if (admin && (await admin.comparePassword(password))) {
//       res.json({
//         _id: admin._id,
//         email: admin.email,
//         token: generateToken(admin._id),
//       });
//     } else {
//       res.status(401).json({ message: 'Invalid email or password' });
//     }
//   } catch (error) {
//     console.error('Login error:', error); // Log the error for debugging
//     res.status(500).json({ message: 'Error logging in', error: error instanceof Error ? error.message : 'Unknown error' });
//   }
// };

// const generateToken = (id: string): string => {
//   return jwt.sign({ id }, process.env.JWT_SECRET as string, {
//     expiresIn: '30d',
//   });
// };
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { Admin, IAdmin } from '../models/Admin';

export const loginAdmin = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    const admin: IAdmin | null = await Admin.findOne({ email });

    if (admin) {
      const passwordMatch = await admin.comparePassword(password);
      if (passwordMatch) {
        res.json({
          _id: admin._id,
          email: admin.email,
          token: generateToken(admin._id),
        });
      } else {
        res.status(401).json({ message: 'Invalid password' });
      }
    } else {
      res.status(401).json({ message: 'Invalid email address' });
    }
  } catch (error) {
    console.error('Login error:', error); // Log the error for debugging
    res.status(500).json({ message: 'Error logging in', error: error instanceof Error ? error.message : 'Unknown error' });
  }
};
const generateToken = (id: string): string => {
     return jwt.sign({ id }, process.env.JWT_SECRET as string, {
       expiresIn: '30d',
     });
   };
