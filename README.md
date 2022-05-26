# Some Notes

## error TS2307 when running tsc app.ts

- Error: `7 import * as estree from "../../../Desktop/Web前端综合课程/Webpack/02-setup-app/node_modules/@types/estree";`
- Solution: `npm install --save-dev @types/eslint-scope` && add `"types": ["eslint-scope"]` in the `tsconfig.json` file
