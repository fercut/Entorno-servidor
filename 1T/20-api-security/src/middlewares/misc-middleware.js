export function printDateMiddleware(req, res, next) {
  // eslint-disable-next-line no-console
  console.log(`[${new Date().toISOString()}] ${req.method}: ${req.path}`);
  next();
}

export function validateAdminMiddleware(req, res, next) {
  // eslint-disable-next-line prefer-destructuring
  const password = req.headers.password;
  if (password === 'patata') {
    next();
  } else {
    res.status(401).json({ error: "Acceso restringido, por favor, incluya la palabra secreta en el parámetro 'password' en la cabecera de la petición" });
  }
}
