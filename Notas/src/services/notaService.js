import Nota from "../models/notaModels";

const getAllNotas = () =>{
  return notas;
};

const getNotaById = (id) => {
  return notas.find((nota) => nota.id === id);
};

const createNota = (titulo, contenido) => {
  const id = parseInt(notas.length)+1;
  const nuevaNota = new Nota(id, titulo, contenido);
  notas.push(nuevaNota);
};

const updateNota = (id,titulo, contenido) => {
  const index = notas.findIndex((nota) => nota.id === id);
  if(index !== -1) {
    notas[index].titulo = titulo;
    notas[index].contenido = contenido;
    return notas[index];
  }
  return null;
};

const deleteNota = (id) => {
  notas = notas.filter((nota) => nota.id !== id);
};

module.exports = {
  getAllNotas,
  getNotaById,
  createNota,
  updateNota,
  deleteNota,
};
