import {Console} from "console";
import fs from "fs";

const file = fs.createWriteStream("application.log");

const log = new Console({
    stdout: file,
    stderr: file
});

log.info("Hello world!");
log.error("Hellow world");

const person = {
    firstName: "Gallick",
    lastName: "Gun"
}

log.table(person)