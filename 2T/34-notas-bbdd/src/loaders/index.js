import expressLoader from './express-loader.js';

export function init(server, config){
    expressLoader(server);

import smtpLoader from './smtp-loader.js';


export function init(server, config){
    expressLoader(server);
    smtpLoader(config.smtp);
}
