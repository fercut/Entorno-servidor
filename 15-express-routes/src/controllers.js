export function headersController(req, res) {
  res.send(`<pre>${JSON.stringify(req.headers, null, 2)}</pre>`);
}

export function queryController(req, res){
  const queries = Object.entries(req.query).map(([key,value]) => `<li><b>${key}</b>: ${value}</li>`);
  res.send(`<ul>${queries.join('')}</ul>`);
}

export function paramsController(req, res){
  res.send(req.params.name);
}
export function paramsSaludaController(req, res){
  res.send(`Hello ${req.params.name}!`);
}

export function bodyController(req, res){
  res.send(req.body);
}

// Para probar esta query localhost:3000
