import chalk from 'chalk';
const columns = process.stdout.columns;
const rows = process.stdout.rows;

function flag() {
  let line = "*".repeat(columns);
  let colorChunk = line.repeat(Math.floor(rows / 3));
  const flagLt = chalk.yellow(colorChunk) + chalk.green(colorChunk) + chalk.red(colorChunk);
  console.log(flagLt);
}
flag();