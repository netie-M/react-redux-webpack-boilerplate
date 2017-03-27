import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    fullname: { type: String, default: '' },
    gender: { type: String, default: '' },
    age: { type: Number, min: 0, max: 200 }
});

UserSchema.path('fullname').required(true, '姓名不能为空');
UserSchema.path('gender').required(true, '性别不能为空');
UserSchema.path('age').required(true, '年龄不能为空');

export default mongoose.model('User', UserSchema);