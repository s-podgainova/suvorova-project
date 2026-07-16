import sorting from "postcss-sorting";

const config = {
  plugins: [
    sorting({
      order: ["custom-properties", "declarations", "at-rules", "rules"],
      "properties-order": "alphabetical",
      "unspecified-properties-position": "bottom",
    }),
  ],
};

export default config;
