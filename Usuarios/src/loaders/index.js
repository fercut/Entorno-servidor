import expressLoader from './express-loader.js';
import loadUser from './user-loaders.js';

export function init(server){
    expressLoader(server);
    loadUser();
}