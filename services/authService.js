import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const JWT_SECRET = process.env.JWT_SECRET;

async function register(email, username, password) {
    const existingUser = await User.findOne({ email }).collation({ locale: 'en', strength: 2 });

    if (existingUser) {
        throw new Error('Email is already taken!');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.crate({
        email,
        username,
        password: hashedPassword
    });

    const token = createToken(user);

    return {
        _id: user._id,
        email: user.email,
        username: user.username,
        accessToken: token
    };
}

async function login(email, password) {
    const user = await User.findOne({ email }).collation({ locale: 'en', strength: 2 });

    if (!user) {
        throw new Error('Invalid email or password!');
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
        throw new Error('Invalid email or password!');
    }

    const token = createToken(user);

    return {
        _id: user._id,
        email: user.email,
        username: user.username,
        accessToken: token
    };
}

function createToken({ _id, email, username }) {
    return jwt.sign({
        _id,
        email,
        username
    },
        JWT_SECRET,
        {
            expiresIn: '2h'
        }
    );
};

function verifyToken(token) {
    return jwt.verify(token, JWT_SECRET);
}

export {
    register,
    login,
    verifyToken
}