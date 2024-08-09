import jwt from 'jsonwebtoken';
import User from '../models/user.js'; 

export const checkAuth = async (req, res, next) => {
    const authorizationHeader = req.headers['authorization'];
    if (!authorizationHeader) {
        return res.status(401).json({ message: 'No token provided' });
    }

    const [schema, token] = authorizationHeader.split(' ');
    if (schema.toUpperCase() !== 'BEARER') {
        return res.status(401).json({ message: `Unsupported authorization schema ${schema}` });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.sub).populate('subscriptions').exec();
        if (user) {
            req.user = user;
            next();
        } else {
            res.status(401).json({ message: 'Unauthorized' });
        }
    } catch (err) {
        res.status(401).json({ message: err.message });
    }
};

export const checkRole = (role) => {
    return (req, res, next) => {
        if (req.user && req.user.role === role) {
            next();
        } else {
            res.status(403).json({ message: 'Access forbidden' });
        }
    };
};