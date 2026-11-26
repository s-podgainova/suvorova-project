// eslint-disable-next-line @typescript-eslint/no-require-imports
const { storageBaseUrl } = require("./storage");

const baseUrl = `${storageBaseUrl}/mistola`;

const files = [
  "1 (1).webp",
  "2 (1).webp",
  "3 (1).webp",
  "4 (1).webp",
  "5.webp",
  "6 (1).webp",
  "7 (1).webp",
  "8.webp",
  "9.webp",
  "10.webp",
  "11.webp",
  "12.webp",
  "13.webp",
  "14.webp",
  "15.webp",
  "16.webp",
  "17.webp",
  "18.webp",
  "19.webp",
  "20.webp",
  "IMG_1957.webp",
];

const gallery = files.map((file) => ({
  src: `${baseUrl}/${encodeURIComponent(file)}`,
  width: 1800,
  height: file === "6 (1).webp" || file === "18.webp" ? 2398 : 2400,
}));

const cover = gallery[2].src;

module.exports = { cover, gallery };
