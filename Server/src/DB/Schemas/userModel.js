import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    Templates: {
        type: Array,
        default: [],
    },
   
});

userSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

const UserModel = model('User', userSchema);

export default UserModel;
