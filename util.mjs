import util from "util";

console.info(util.format("Name: %s", "Gallick"));

const person = {
    firstName: "Gallick",
    lastName: "Gun"
};

console.info(util.format("Person: %j" , person))