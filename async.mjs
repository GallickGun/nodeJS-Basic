function samplePromise() {
    return Promise.resolve("GallickGun");
}

const name = await samplePromise();
console.info(name);