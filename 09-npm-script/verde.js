import chalk from 'chalk'

const argumento = process.argv[2];

if (argumento) {
  console.log(chalk.green(argumento));
} else {
  console.log('No se proporcionó un argumento.');
}