## Undestructering

Trying out a different way of calling an array of functions for LOLs.

### Before

```js
const [count, setCount] = createSignal(0);

export default function Counter() {
  function add() {
    setCount(count() + 1);
  }

  function remove() {
    setCount(count() - 1);
  }
// etc...
```

### After
Nothing magical about `$`; only a convention to let me know variable is a Signal array of functions.

```js
//const get = 0, put = 1
const count$ = createSignal(0);

export default function Counter() {
  function add() {
    count$[1](count$[0]() + 1);
  }

  function remove() {
    count$[1](count$[0]() - 1);
  }

// etc	...
```

Forked from code [video on SolidJS](https://youtu.be/ZZ-a7B761Ds?list=PLakykuPxo3cjkiGcCjiIN_kT6QLWAisP3).

## Usage

Those templates dependencies are maintained via [pnpm](https://pnpm.io) via `pnpm up -Lri`.

This is the reason you see a `pnpm-lock.yaml`. That being said, any package manager will work. This file can be safely be removed once you clone a template.

```bash
$ npm install # or pnpm install or yarn install
```
### Learn more on the [Solid Website](https://solidjs.com) and come chat with us on our [Discord](https://discord.com/invite/solidjs)

## Available Scripts

In the project directory, you can run:

### `npm dev` or `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>

### `npm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles Solid in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Deployment

You can deploy the `dist` folder to any static host provider (netlify, surge, now, etc.)
