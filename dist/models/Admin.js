// import mongoose from 'mongoose';
// import bcrypt from 'bcryptjs';
// export interface IAdmin {
//   email: string;
//   password: string;
//   comparePassword(candidatePassword: string): Promise<boolean>;
// }
// const adminSchema = new mongoose.Schema<IAdmin>({
//   email: {
//     type: String,
//     required: [true, 'Email is required'],
//     unique: true,
//     trim: true,
//     lowercase: true
//   },
//   password: {
//     type: String,
//     required: [true, 'Password is required'],
//     minlength: [6, 'Password must be at least 6 characters']
//   }
// });
// adminSchema.pre('save', async function(next) {
//   if (!this.isModified('password')) return next();
//   try {
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
//     next();
//   } catch (error: any) {
//     next(error);
//   }
// });
// adminSchema.methods.comparePassword = async function(candidatePassword: string): Promise<boolean> {
//   return bcrypt.compare(candidatePassword, this.password);
// };
// export const Admin = mongoose.model<IAdmin>('Admin', adminSchema);
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
const adminSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters']
    }
});
// Method to compare passwords
adminSchema.methods.comparePassword = async function (candidatePassword) {
    console.log('Candidate Password:', candidatePassword);
    console.log('Stored Password:', this.password);
    return await bcrypt.compare(candidatePassword, this.password);
};
adminSchema.pre('save', async function (next) {
    if (!this.isModified('password'))
        return next();
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    }
    catch (error) {
        next(error);
    }
});
const Admin = mongoose.model('Admin', adminSchema);
export { Admin };
