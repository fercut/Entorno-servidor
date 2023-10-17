import chalk from 'chalk';
import { faker } from '@faker-js/faker';

function generarColorRGB() {
    const rojo = Math.floor(Math.random() * 256);
    const verde = Math.floor(Math.random() * 256);
    const azul = Math.floor(Math.random() * 256);
    return [rojo, verde, azul];
  }

const color = generarColorRGB();
const name = faker.internet.userName();

console.log(chalk.rgb(...color)(name));