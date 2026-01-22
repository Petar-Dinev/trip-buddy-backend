import { Schema, model } from 'mongoose';

const emailPattern = /^[a-zA-Z0-9._]{2,}@[a-zA-Z]{3,}\.[a-zA-z]{2,}$/

const userSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Email is required!'],
        match: [emailPattern, 'Email is not valid!'],
        trim: true
    },
    username: {
        type: String,
        required: [true, 'Username is required!'],
        minLength: [3, 'Username must be at least 3 characters long!'],
        trim: true
    },
    password: {
        type: String,
        required: [true, 'Password is required!']
    }
},
    {
        timestamps: true
    }
);

userSchema.index({ email: 1 }, {
    collation: {
        locale: 'en',
        strength: 2
    }
});

export default model('User', userSchema);