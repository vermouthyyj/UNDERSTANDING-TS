# Some Notes

## error TS2307 when running tsc app.ts

- Error: `7 import * as estree from "../../../node_modules/@types/estree";`
- Solution: `npm install --save-dev @types/eslint-scope` && add `"types": ["eslint-scope"]` in the `tsconfig.json` file

## Notes

### SourceMap (simplifies debug)

Enables the generation of sourcemap files. These files allow debuggers and other tools to display the original TypeScript source code when actually working with the emitted JavaScript files. Source map files are emitted as .js.map (or .jsx.map) files next to the corresponding .js output file.

### outDir and rootDir

- src folder holding all the ts files
- dist folder holding all the output js files
- "rootDir": When TypeScript compiles files, it keeps the same directory structure in the output directory as exists in the input directory.
- "outDir": "dist": If specified, .js (as well as .d.ts, .js.map, etc.) files will be emitted into this directory. The directory structure of the original source files is preserved.

### downlevelIteration

- This flag is to enable support for a more accurate implementation of how modern JavaScript iterates through new concepts in older JavaScript runtimes.

### noEmitOnError

- Default: false
- Do not emit compiler output files like JavaScript source code, source-maps or declarations if any errors were reported.
