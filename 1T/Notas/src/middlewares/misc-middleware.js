export function printDateMiddleware(req, res, next) {
  console.log(`[${new Date().toISOString()}] ${req.method}: ${req.path}`);
  next();
}
  
export function validateAdminMiddleware(req, res, next) {
  const password = req.headers['password'];
  if (password === 'patata') {
    next();
  } else {
    res.status(401).json({ error: "Acceso restringido, falta el password" });
  }
}