const user = { name: "John", email: "john@example.com",city: "Phoenix", state: "AZ", country: "USA"}

//El operador spread (...) es la clave
const str = `({ name, email, ...rest} = user ).toString()` 