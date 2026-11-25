import eslintConfig from "./eslint.config.mjs";

export default [
  ...eslintConfig,
  {
    rules: {
      "simple-import-sort/exports": "error",
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            ["^react", "^next", "^@?\\w"],
            ["^@/shared/hooks/"],
            ["^@/(?:components|shared/components)/"],
            ["^@/"],
            ["^\\.(?!.*\\.(?:css|scss|sass|less)$)"],
            ["^.+\\.(?:css|scss|sass|less)$"],
          ],
        },
      ],
    },
  },
];
