import fs from 'fs/promises';

import { formatDate } from '../utils/formatDate.js';
import { filterNotesByQuery, paginateNotes, sortNotes } from '../utils/api-pagination.js';

const notesDir = './notes';
const notesPerPage = 5;

export async function getNotes(req, res, next) {
  try {
    const { sort, filter, page, pageSize } = req.query;
    const notes = await fs.readdir(notesDir);

    let notesWithInfo = await Promise.all(
      notes.map(async (note) => {
        const fullPath = `${notesDir}/${note}`;
        const stat = await fs.stat(fullPath);
        const content = await fs.readFile(fullPath, 'utf-8');
        const createDate = formatDate(stat.birthtime);
        const editDate = formatDate(stat.mtime);

        return {
          name: note,
          fechadecreacion: createDate,
          fechadeedicion: editDate,
          size: content.length,
        };
      })
    );

    if (sort) notesWithInfo = sortNotes(notesWithInfo, sort);
    if (filter) notesWithInfo = filterNotesByQuery(notesWithInfo, filterQuery);

    const paginatedNotes = paginateNotes(
      notesWithInfo,
      parseInt(page) || 1,
      Math.min(parseInt(pageSize) || notesPerPage)
    );

    const response =
      paginatedNotes.length > 0 ? { notes: paginatedNotes } : { notes: "We couldn't find any notes" };
    res.status(200).send(response);
  } catch (error) {
    next(error);
  }
}


export async function postNote(req, res, next) {
  try {
    const { noteName, content } = req.body;
    await createNewNote(noteName, content);
    res.status(201).send('Nota creada');
  } catch (error) {
    next(error);
  }
}

export async function editNote(req, res, next) {
  try {
    const { noteName } = req.params;
    const { content } = req.body;
    await fs.writeFile(`${notesDir}/${noteName}.note`, content);
    res.status(200).send('Nota editada.');
  } catch (error) {
    next(error);
  }
}

export async function deleteNote(req, res, next) {
  try {
    const { noteName } = req.params;
    await fs.unlink(`${notesDir}/${noteName}.note`);
    res.status(200).send('Nota borrada');
  } catch (error) {
    next(error);
  }
}

const createNewNote = async (noteName, content) => {
  try {
    await fs.mkdir(notesDir, { recursive: true });
    await fs.writeFile(`${notesDir}/${noteName}.note`, content);
  } catch (error) {
    throw new Error('Error al crear la nota');
  }
};