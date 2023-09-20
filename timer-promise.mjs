import timers from "timers/promises";

// console.info(new Date());
// const name = await timers.setTimeout(5000, "GallickGun");
// console.info(name)
// console.info(new Date());

for await (const startTime of timers.setInterval(1000, new Date())){
    console.info(`start Time at ${new Date()}`);
}