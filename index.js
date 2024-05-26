

import chalk from "chalk";
import inquirer from "inquirer";
class Student {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Person {
    students = [];
    addstudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const programmeStart = async (person) => {
    do {
        console.log(chalk.bold.blue("welcome"));
        const ans = await inquirer.prompt({
            name: "select",
            type: "list",
            message: chalk.bold.green("whom would you like to interact with"),
            choices: ["staff", "student", "exit"]
        });
        if (ans.select == "staff") {
            console.log(chalk.bold.blue("you are welcome in the staff room please feel free to ask any querry"));
        }
        else if (ans.select == "student") {
            const ans = await inquirer.prompt({
                name: "student",
                type: "input",
                message: chalk.bold.green(chalk.bold.green("enter the student name you want to engage with")),
            });
            const student = persons.students.find(val => val.name === ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addstudent(name);
                console.log(chalk.bold.blue(`hello i am  ${chalk.bold.green(name.name)} nice to meet you`));
                console.log(chalk.bold.green("new student added"));
                console.log(chalk.bold.green("current student list:"));
                console.log(chalk.bold.green(persons.students));
            }
            else {
                console.log(chalk.bold.blue(`hello i am ${chalk.bold.green(student.name)} nice meeting with you`));
                console.log(chalk.bold.blue("exiting from student list"));
                console.log(chalk.bold.green(persons.students));
            }
        }
        else if (ans.select == "exit") {
            console.log(chalk.bold.blue("exiting the programme"));
        }
    } while (true);
};
programmeStart(persons);
