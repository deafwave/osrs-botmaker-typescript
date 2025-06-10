# osrs-botmaker-typescript

Created by [Chandler 'Deafwave' Ferry](https://github.com/ChandlerFerry) to ease the programming strain of making [Botmaker](https://theplug.runelite.plus) scripts.

## Donate
- https://ko-fi.com/deafwave
- ETH/ERC-20: `0x6dEb51c4f253781d9354af86C3c0205eFf75Bf52`
- BNB/BEP-20: `0x40D84bA476FDEc7485F33eB3b82286366d0022aa`
- TRX/TRC-20: `TN6t6ZZSz1JQwXtFoo7sbmQAYXiw8JNeCt`
- BTC: `bc1qetcfw0pj4t3harm8glx8p0jkyeayhcu60emzzc`

## Contribute
There are several outlined improvements in [Github Issues](https://github.com/deafwave/osrs-botmaker-typescript/issues).

Take one on, submit a [Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)!

## Usage
### Install
- [pnpm](https://pnpm.io/installation)
- [node & npm](https://nodejs.org/en)
- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
1. [Create a Private Fork](https://docs.github.com/en/repositories/creating-and-managing-repositories/duplicating-a-repository#mirroring-a-repository) OR `git clone https://github.com/deafwave/osrs-botmaker-typescript`
2. `cd osrs-botmaker-typescript`
3. `pnpm i`
4. Install VSCode Extensions (ESLint, TypeScript, Prettier, Prettier-ESLint)

### Build
1. `pnpm watch` or `pnpm build`
2. View output in `dist/<FOLDER_NAME>.js`
3. Copy that output to BotMaker, Save & Run

### Create New Script
1. Create a folder in `src` for your script
2. Create an `index.ts` inside of there as the Entrypoint
3. Execute `pnpm watch` or `pnpm build` to have it output to the `dist` folder

## Common Errors
### Referenced project 'tsconfig.lib.json' must have setting "composite": true.
I'm still learning about this one as it's new to TypeScript >5.0.

For now, do not set composite: true, and ignore the error.

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
Create `.ts` files and place your `.js` code in them and leverage ESLint disable rules to make your life a little easier.

Resolve the errors & add typings over time.

## How do I view build artifacts in the CI/CD pipeline?
1. Open your repositories [Github Actions](https://github.com/deafwave/osrs-botmaker-typescript/actions)
2. Click on the latest workflow run
3. If the workflow run failed, diagnose why and fix it!
4. Once you have a successful workflow run, click `botmaker-scripts` in the Arifacts section

### Do I need to write my own .d.ts files?
No! `.d.ts` files are meant for external dependencies that do not have typings such as Runelite & Sox.

All `.ts` files automatically generate declaration files.

### How does the build pipeline work?
1. Rollup executes `tsc` to compile `.ts` to `.js` using ESNext module resolution
2. Rollup passes the compiled code through all custom & external plugins based on the `rollup.config.js`
3. Rollup passes the compiled code into Babel with a target of `rhino: '1.7.14'` to compile the final bundle to our required ES5 target

Resources:
- [Bundler - Rollup](https://rollupjs.org/)
- [Compiler - Babel (supports rhino 1.7.14)](https://babeljs.io/)
