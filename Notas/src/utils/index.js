import config from '../config';

function getPath(name) {
  return `./${config.notes.folder}/${name}.${config.notes.ext}`;
}

module.exports = {
  getPath,
};