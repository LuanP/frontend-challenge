>## Movies - Socket.io
> Simple web app to search movies in a socket.io server 

## What's inside it?
* Webpack 3+
* Babel
* React hot loader
* HTML and CSS generated automatically by webpack
* Lodash
* Moment
* ES6
* Socket.io
* Redux Logic
* Webpack tree shaking!
* [Preact](https://preactjs.com/) for production build

## Dependencies:
- Node.js `>=` v6;
- node-gyp (only mac os) - $npm install -g node-gyp

## Up and running
- Clone this repository: `git clone https://github.com/hernanif1/frontend-challenge.git`;
- Install dependencies: `yarn` (or `npm i`);
- Run `yarn dev` (or `npm start`) to develop on `http://localhost:3000`
- Run `yarn build` (or `npm run build`) for production build (files will be generated on `dist` directory)

## Troubleshooting
If you are on Windows, and try to run `yarn lint`, you'll get an error
because `spawn` module does not work very well on Windows.

You should install `cross-spawn`, and edit `gulpfile.js`, removing line `4` and
uncomment line `7`.

## Scripts
- `yarn dev (or npm run dev)`: Starts the application on development mode
- `yarn build (or npm run build)`: Build project to production
- `yarn start (or npm start)`: Run in dev mode, also `yarn dev`.

## License

[MIT](https://github.com/fdaciuk/licenses/blob/master/MIT-LICENSE.md) &copy; Hernani Fernandes
