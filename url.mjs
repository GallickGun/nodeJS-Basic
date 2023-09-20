import {URL} from "url";

const website =  new URL("https://starocean2r.square-enix-games.com/en-gb/?_gl=1*ud5nt1*_gcl_au*MjMzOTk5ODU3LjE2OTUxODg3Mjg.");

console.info(website.toString());
console.info(website.protocol);
console.info(website.href);
console.info(website.hostname);