function samplePromise() {
    return Promise.resolve("name: GallickGun");
}

const name = await samplePromise();
console.info(name);