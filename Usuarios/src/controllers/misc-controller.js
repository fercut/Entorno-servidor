export function pingController(req, res) {
    res.send('pong');
}

export function adminAccessController(req, res) {
    res.status(200).send('Bieenvenid@, disfruta del contenido');
}