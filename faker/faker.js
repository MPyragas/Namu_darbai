import {faker} from "@faker-js/faker";
import {appendFile} from "node:fs/promises";
import * as readline from "node:readline/promises";
import chalk from "chalk";

function createRandomUser() {
    return {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      birthdate: faker.date.birthdate().toLocaleDateString('lt-LT'),
    };
  }

const rl = readline.createInterface({input:process.stdin,output:process.stdout});
const login = await rl.question("Enter username\n");
const pass = await rl.question("Enter password\n");
if(login !== "admin"||pass !== "1234") {
    rl.close();
    console.log(chalk.red("Neteisingi prisijungimo duomenys"));
}else {
const user = createRandomUser();
const userStr = `${user.firstName},${user.lastName},${user.email},${user.password},${user.birthdate}\n`
appendFile("./people.txt",userStr);
console.log(chalk.green("Duomenys faile sėkmingai išsaugoti"));
};
rl.close();