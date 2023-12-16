export const sortNotes = (notes, sortBy) => {
  return notes.sort((a, b) => {
    if (sortBy === 'date') return new Date(b.fechadecreacion) - new Date(a.fechadecreacion);
    if (sortBy === 'editdate') return new Date(b.fechadeedicion) - new Date(a.fechadeedicion);
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    if (sortBy === 'size') return a.size - b.size;
  });
};

export function filterNotesByQuery(notes, query) {
  return notes.filter((note) => {
    return (
      note.name.toLowerCase().includes(query.toLowerCase()) ||
      note.content.toLowerCase().includes(query.toLowerCase())
    );
  });
}

export const paginateNotes = (notes, page, pageSize) => {
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return notes.slice(startIndex, endIndex);
};