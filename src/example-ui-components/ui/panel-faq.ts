export const SWING_UI_SUMMARY = `Swing UI Summary    

To summarize the work we have done, we have created a Swing UI that allows you to create and manage your UI components.

The helper functions are designed to allow for simple UI element, while incorporating methods for caching values directly to the bmCache, without much additional effort.

The example panel is there to offer some insight in to how the Swing UI can be used, and is by no means a comprehensive example of the Swing UI.
There are many additional changes available for you to leverage, and personalize based on your own design choices. This was done to offer a starting point for you to build upon, and is not intended to be a complete solution.

I highly suggest you spend some time exploring the helper functions, and understanding how they work.

Not all of the Swing UI elements are fully typed, and may require you to either type cast them yourself, or open a PR request on the Types repository to make the changes yourself.
To test the changes locally, simply clone the Types repository, and run the following command to link it to the local repository

pnpm link 'Your directory path to the osrs-botmaker-types repository'
pnpm i

Once you've made changes to the types repository, simply run the following within the Types repository to build the changes:
pnpm build

Upon validation that the types work, I suggest you make a PR request to the Types repository to have the changes merged, for all to enjoy and benefit from.

Once your changes are merged, you will be able to update the Types version to that on the Types repository and once again, running pnpm i to update the dependencies.

-bik
`;
