const buffer  = Buffer.from("GallickGun", "utf-8");
console.info(buffer.toString());
console.info(buffer.toString("hex"));
console.info(buffer.toString("base64"));

const bufferBase64 = Buffer.from("R2FsbGlja0d1bg==", "base64");
console.info(bufferBase64.toString("utf-8"));