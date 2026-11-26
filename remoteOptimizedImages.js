// eslint-disable-next-line @typescript-eslint/no-require-imports -- Loaded by the optimizer through Node.js require().
const { gallery } = require("./data/projects/mistolaImages");

module.exports = gallery.map((photo) => photo.src);
