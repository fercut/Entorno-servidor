import jwt from 'jsonwebtoken';

const secretKey = 'ayoze';

const validarTokenMiddleware = (req, res, next) => {
  const token = jwt.sign({ message: 'I know your secret' }, secretKey);

  if (!token) {
    return res.status(401).json({ message: 'Acceso no autorizado. Token no proporcionado.' });
  }

  try {
    const decoded = jwt.verify(token, secretKey);

    if (decoded.message === 'I know your secret') {
      next();
    } else {
      return res.status(401).json({ message: 'Acceso no autorizado. Mensaje incorrecto.' });
    }
  } catch (error) {
    return res.status(401).json({ message: 'Acceso no autorizado. Token inválido.' });
  }
};

export default validarTokenMiddleware;
