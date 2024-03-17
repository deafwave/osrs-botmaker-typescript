# osrs-botmaker-typescript

Created by [Chandler 'Deafwave' Ferry](https://github.com/ChandlerFerry) to ease the programming strain of making [Botmaker](https://theplug.runelite.plus) scripts.

## Donate
- https://ko-fi.com/deafwave
- ETH/ERC-20: `0x6dEb51c4f253781d9354af86C3c0205eFf75Bf52`
- BNB/BEP-20: `0x40D84bA476FDEc7485F33eB3b82286366d0022aa`
- TRX/TRC-20: `TN6t6ZZSz1JQwXtFoo7sbmQAYXiw8JNeCt`
- BTC: `bc1qetcfw0pj4t3harm8glx8p0jkyeayhcu60emzzc`

## Contribute
There are several outlined improvements in [Github Issues](https://github.com/ChandlerFerry/osrs-botmaker-typescript/issues).

Take one on, submit a [Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)!

## Usage
### Install
- [pnpm](https://pnpm.io/installation)
- [node & npm](https://nodejs.org/en)
- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
1. [Create a Private Fork](https://docs.github.com/en/repositories/creating-and-managing-repositories/duplicating-a-repository#mirroring-a-repository) OR `git clone https://github.com/ChandlerFerry/osrs-botmaker-typescript`
2. `pnpm i`
3. `npm i -g nx typescript ts-patch`
4. Install VSCode Extensions (ESLint, TypeScript, Prettier, Prettier-ESLint, Jest, Nx Console, GitLens)


### Build
1. `nx run-many -t=build`
2. View output in `dist/packages/.../index.js`


### Test
- `nx run api:test`
- `nx run cakestall:test`

### Create New Package
_This process will become easier once [#1](https://github.com/ChandlerFerry/osrs-botmaker-typescript/issues/1) is solved._

1. Duplicate the `cakestall` folder & rename it to `<NewPackageName>`
2. Find and replace `cakestall` inside of the new folder with `<NewPackageName>` 
3. Update `tsconfig.base.json` `compilerOptions.paths`, adding `"@packages/<NewPackageName>": ["packages/<NewPackageName>/src/index.ts"]`

## Common Errors
### Referenced project 'tsconfig.lib.json' must have setting "composite": true.
I'm still learning about this one as it's new to TypeScript >5.0.

For now, do not set composite: true, and ignore the error.

### NX Console "We couldn't find any projects in this workspace"
1. Run `pnpm i` inside of the `osrs-botmaker-typescript` folder
2. Reload VSCode window

### nx.ps1 cannot be loaded because running scripts is disabled on this system.
1. Open Powershell as Admin
2. Run `Set-ExecutionPolicy RemoteSigned`
3. Restart VSCode

## FAQ
### How do I write TypeScript?
With proper extensions, this repository will twist your programming style to its opinions to make this easy.

Install the suggested VSCode extensions and listen to what VSCode tells you.

Start by creating `.ts` files and writing the same exact JavaScript code you are familiar with.

ESLint and TypeScript will tell you when you're doing something improper. Follow the guidance, you will write better code over time.


### Where do I learn more about TypeScript?
[Execute Program](https://www.executeprogram.com/courses/typescript) is the most valuable interactive course I've found (16 free lessons).

[TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/) is a valuable 'raw' resource.


## How do I transition from `.js` to `.ts`?
Stick this at the top of your `.js` files to ignore linting (TEMPORARY)
```
/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */
```

Then start modularizing your code, split things out to utils folders, etc. Use `.ts` files to do this, and fix the ESLint errors that occur as you do so.

## How do I view build artifacts in the CI/CD pipeline?
1. Open your repositories [Github Actions](https://github.com/ChandlerFerry/osrs-botmaker-typescript/actions)
2. Click on the latest workflow run
3. If the workflow run failed, diagnose why and fix it!
4. Once you have a successful workflow run, click `botmaker-scripts` in the Arifacts section

## How do I add multiple output bundles for a package?
Update the `packages/<PackageName>/project.json`, adding `additionalEntryPoints` of every bundle that you would like to create:
```
"main": "packages/cakestall/src/index.ts",
"additionalEntryPoints": [
	"packages/cakestall/src/quest1/quest1.ts",
	"packages/cakestall/src/quest2/quest2.ts"
],
```

### Do I need to write my own .d.ts files?
No! `.d.ts` files are meant for external dependencies that do not have typings such as Runelite & Sox.

All `.ts` files automatically generate declaration files.

### How do I make ESLint/TSC more strict so I encounter fewer edge cases?
1. Update `tsconfig.base.json`:
    - ```"extends": ["@tsconfig/node20/tsconfig"]```
    - ->
    - ```"extends": ["@tsconfig/strictest/tsconfig", "@tsconfig/node20/tsconfig"],```
2. Update `eslint.config.js`:
    - ```...__configs.recommendedTypeChecked```
    - ->
    - ```...__configs.strictTypeChecked```

### Why are we using a monorepo?
Botmaker requires scripts to be compiled down to rhino 1.7.14, then bundled.

This presents a challenge that is easily overcome by separating scripts into bundle targets and leveraging monorepo architecture to combine bundle targets when necessary.

### How does the build pipeline work?
1. Integrated Nx Monorepo uses `nx graph` to identify dependencies
    - Integrated paths fetched from `tsconfig.base.json`'s `compilerOptions.paths`
    - Package dependencies based on e.g. `import {...} from "@packages/cakestall"`
2. Nx executes `build` with dependsOn `^build` to build dependencies in reverse order
3. During build, Nx passes the files to the customRollup plugin which executes the Rollup Bundler
4. Rollup fetches the required files, and manipulates them based on the `rollup.cjs`
5. During Rollup bundling, alias() is called to merge packages, and cleanup() is called to remove all comments
6. On Rollup bundle output, getBabelOutputPlugin() is called with a target of `rhino: '1.7.14'` to compile the final bundle to our required target

Resources:
- [Monorepo - Nx](https://nx.dev/)
    - Modern solution to sustainable monorepos in TypeScript (still extremely time consuming though!)
- [Bundler - Rollup](https://rollupjs.org/)
    - Used solely because it supports Babel, preferred is [esbuild](https://esbuild.github.io/)
- [Compiler - Babel](https://babeljs.io/)
    - Used solely because it supports Rhino 1.7.14, preferred is [tsc](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
