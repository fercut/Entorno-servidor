import jwt from 'jsonwebtoken';
import { secretKey, adminUsername } from '../config/config.js';

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).send({ message: 'Token no proporcionado' });
  }

  try {
    const decoded = jwt.verify(token.replace('Bearer ', ''), secretKey);

    if (decoded.username === adminUsername) {
      req.user = decoded;
      next();
    } else {
      res.status(403).send({ message: 'Acceso no autorizado' });
    }
  } catch (error) {
    res.status(401).send({ message: 'Token invalido' });
  }
};

export default authMiddleware;