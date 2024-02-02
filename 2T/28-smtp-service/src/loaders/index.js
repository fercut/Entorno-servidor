import expressLoader from './express-loader.js';
<<<<<<< HEAD

export function init(server, config){
    expressLoader(server);
=======
import smtpLoader from './smtp-loader.js';

export function init(server, config){
    expressLoader(server);
    smtpLoader(config.smtp);
>>>>>>> dfd062b0318b791dd9ba09840a4be63e47b75ac7
}
