const users = [
  {id: '1', name: 'Manuel Paco', age: 40, gender: 'male'},
  {id: '2', name: 'Juan', age: 55, gender: 'male'},
  {id: '3', name: 'Miguel', age: 25, gender: 'male'},
];

export function getUsers(req, res) {
  if(users) {
    return res.send(users);
  }
  return res.status(404).send({message: 'Users not found'});
}

export function getOrderUsers(req, res) {
  const { sort } = req.query;
  const orderUsers = sort ? [...users].sort((a, b) => (a[sort] > b[sort] ? 1 : -1)) : [...users];
  res.send(orderUsers);
}

export function getFilterUsers(req, res) {
  const { name } = req.query;
  if (name) {
    const filteredUsers = users.filter(user => user.name.toLowerCase().includes(name.toLowerCase()));
    return res.send(filteredUsers);
  }
  return res.status(400).send({ message: 'Name parameter is required for filtering.' });
}

export function getPaginationUsers(req, res) {
  const { page = 1, pageSize = 5 } = req.query;
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + parseInt(pageSize);
  const paginatedUsers = users.slice(startIndex, endIndex);

  res.send(paginatedUsers);
}
