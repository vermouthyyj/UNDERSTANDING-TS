# Some Notes

## Setting up our development environement

### error TS2307 when running tsc app.ts

- Error: `7 import * as estree from "../../../node_modules/@types/estree";`
- Solution: `npm install --save-dev @types/eslint-scope` && add `"types": ["eslint-scope"]` in the `tsconfig.json` file

## The advantages of Typescript

- Types!
- Next-gen Js Features (compiled down for older Browsers)
- Non-Js Features like Interfaces of Generics
- Meta-Programming Features like Decorators
- Rich Configuration Options
- Modern Tooling that helps even in non-Ts projects

## Core Types in Typescript

| Type    |     Examples     |                                                                       Description |
| :------ | :--------------: | --------------------------------------------------------------------------------: |
| number  |   1, 5.3, -10    |                        All numbers, no differentiation between integers or floats |
| string  | 'Hi', "Hi", `Hi` |                                                                   All Text values |
| boolean |   true, false    |                                                                    Just these two |
| object  |    {age: 30}     |          Any JavaScript object, more specific types (type of object) are possible |
| Array   |     [1,2,3]      | Any JavaScript array, type can be flexible or strict (regarding the element type) |
| Tuple   |      [1,2]       |                                           Added by TypeScript: Fixed-length array |
| Enum    | enum {NEW, OLD}  |         Added by TypeScript: Automatically enumerated global constant identifiers |
| Any     |        \*        |               Added by TypeScript: Any kind of value, no specific type assignment |

- Union Types

```
    function combine(input1: number | string, input2: number | string) {
        let result;
        if (typeof input1 === 'number' && typeof input2 === 'number') {
            result = input1 + input2;
        }
        else {
            result = input1.toString() + input2.toString();
        }
        return result;
    }

    const combinedAges = combine(30, 26);
    const combinedNames = combine('Max', 'Anna');
```

- Literal Type

```
    function combine(
        input1: number | string,
        input2: number | string,
        resultConversion: 'as-number' | 'as-text'
    ) {
        let result;
        if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
            result = +input1 + +input2;
        }
        else {
            result = input1.toString() + input2.toString();
        }

        return result;
    }

    const combinedAges = combine(30, 26, 'as-number');
    const combinedStringAges = combine('30', '26', 'as-number');
    const combinedNames = combine('Max', 'Anna', 'as-text');
```

- Type Alias

```
    type Combinable = number | string;
    type ConversionDescriptor = 'as-number' | 'as-text';
    function combine(
        input1: Combinable,
        input2: Combinable,
        resultConversion: ConversionDescriptor
    ) {
        let result;
        if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
            result = +input1 + +input2;
        }
        else {
            result = input1.toString() + input2.toString();
        }

        return result;
    }

    const combinedAges = combine(30, 26, 'as-number');
    const combinedStringAges = combine('30', '26', 'as-number');
    const combinedNames = combine('Max', 'Anna', 'as-text');
```

- function return types and void

1. in JS we got undefined as a return value for a return void function
2. `undefined` is not a type in TS

- function types

```
function add (n1: number, n2: number) {
    return n1+n2;
}

function printResult(num: number): void {
    console.log('Result: ', num);
}

let combineValus: (a: number, b: number) => number; // define the return type and parameter type of the function

combineValues = add; // no warning
console.log(combineValues(8,8)); // no error

printResult(add(5,12)); // no error
combineValues = printResult // error!!! because the parameter type doesn't match
```

- function types and Callback

```
    // the type of callback function should match here
    function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
        const result = n1+n2;
        cb(result);
    }

    addAndHandle(10, 20, (result) => {
        console.log(result);
    })
```

- Unknown type

```
    let userInput: unknown;
    let userName: string;

    userInput = 5;
    userInput = 'Max';

    userName = userInput; // error here: unknown cannot assign value, solution: change `unknown` to `any`
```

- Never type

```
    function generateError (message: string, code: number): never {
        throw { message: message, errorCode: code };
    }

    generateError ('An error occurred!', 500); // since the error is thrown, it never produce a value, never returns anything include undefined
```

## tsconfig.json

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

### strict

- strict: true (enable all strict type-checking options)
- noImplicitAny: where no type annotations are present, TypeScript will fall back to a type of `any` for a variable when it cannot infer the type
- strictNullChecks: enable null check, `const button = document.querySelector('button')` if there is no button on the page
- strictindCallApply

```
function clickHandler(message: string) {
    console.log('Click!' + message);
}

if (button) {
    button.addEventListener('click', clickHandler.bind(null));`
}
```

## Code Quality Options

- noUnusedLocals
- noUnusedParameters
- noImplicitReturns

```
    function add(n1: number, n2: number) {
        if (n1+n2 > 0) {
            return (n1+n2);
        }
    }
```

## Debugging with VsCode

Have a great development flow

- ESLint: improve the code quality, help in more advanced project
- Prettier: formatting the code
- Debugfer for Chrome: debug ts code use VSCode
