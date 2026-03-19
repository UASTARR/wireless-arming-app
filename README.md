# UASTARR Wireless Rocket Arming

A wireless rocket-arming app based on react native and expo (for cross-platform support)

## Details:
The app is based on the 'Expo' framework.

The main react app is built and situated in [`App.tsx`](App.tsx). 

[`App.tsx`](App.tsx) will (almost) exclusively contain the App() function that is exported as the main program. 

> Any dependencies, helper functions, and ui-related react components will be situated in the [`src`](src/) folder.

### src folder contents

1. [`index.ts`](src/index.ts)

    Exports the files in [`src`](src/) that will link back to [`App.tsx`](App.tsx).

2. [`styles.ts`](src/styles.ts)

    Contains Stylesheets for the UI.

3. [`ui_modules.tsx`](src/ui_modules.tsx)

    A `.tsx` file containing react components that will be used in the app. 

4. [`utils.ts`](src/utils.ts)

    Contains helper functions and bluetooth functionality.




