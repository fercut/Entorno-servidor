import jwt from 'jsonwebtoken';

import { secretKey, adminUsername } from '../config/config.js';

export const generateToken = () => {
  const token = jwt.sign({ username: adminUsername }, secretKey, { expiresIn: process.env.JWT_EXPIRES_IN });
  return token;
};

export const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (error) {
    return null;
  }
};