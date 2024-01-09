import jwt from 'jsonwebtoken';

const secretKey = 'ayoze';
export const generarToken = (req, res) => {
  const token = jwt.sign({ mensaje: 'Conozco tu secreto' }, secretKey);
  res.json({ token });
};

export const rutaProtegida = (req, res) => {
  res.json({ mensaje: 'Acceso autorizado. Ruta protegida.' });
};
