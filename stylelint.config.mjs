import recessPropertyGroups from "stylelint-config-recess-order/groups";

/** @type {import("stylelint").Config} */
const config = {
  extends: ["stylelint-config-standard", "stylelint-config-recess-order"],
  ignoreFiles: [
    "**/node_modules/**",
    "**/.next/**",
    "**/out/**",
    "**/build/**",
    "**/coverage/**",
  ],
  reportDescriptionlessDisables: true,
  reportInvalidScopeDisables: true,
  reportNeedlessDisables: true,
  rules: {
    "order/properties-order": [
      recessPropertyGroups,
      {
        severity: "warning",
      },
    ],
  },
  overrides: [
    {
      files: ["**/*.module.css"],
      extends: ["stylelint-config-css-modules"],
      rules: {
        "keyframes-name-pattern": [
          "^[a-z][a-zA-Z0-9]*$",
          {
            message: (name) =>
              `Expected CSS Module keyframe name "${name}" to be lower camel case`,
          },
        ],
        "selector-class-pattern": [
          "^[a-z][a-zA-Z0-9]*$",
          {
            message: (selector) =>
              `Expected CSS Module class selector "${selector}" to be lower camel case`,
          },
        ],
      },
    },
  ],
};

export default config;
