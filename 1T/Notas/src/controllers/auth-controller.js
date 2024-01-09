import { generateToken } from "../utils/token.js";

const users = [];

const adminName = process.env.ADMIN_NAME || 'admininstrador';
const secretKey = process.env.SECRET_KEY || 'fermin';

users.push({
  username: adminName,
  password: secretKey,
});

export const authenticateUser = (req, res) => {
  const { username, password } = req.body;

  const user = users.find((u) => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).send({ message: 'Credencial invalida' });
  }

  const token = generateToken();
  res.send({ token });
};


export const createUser = (req, res) => {
  const { username, password } = req.body;

  const existingUser = users.find((u) => u.username === username);

  if (existingUser) {
    console.log(username, password);
    return res.status(400).send({ message: 'El usuario no existe' });
  }

  const newUser = { username, password };
  users.push(newUser);

  const token = generateToken();
  res.send({ token });
};