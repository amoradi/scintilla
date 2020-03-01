# Scintilla — React Sparklines Component

### TODO

- outline README with api, usage, quick start, etc.
- create demo page like: https://github.com/borisyankov/react-sparklines
  - code-visuals listing
- publish to npm

  - write README for npm (reuse githubs)
  - github badges
    - tests passings
    - code coverage
    - version
    - stable
  - export types
  - tiny size plz
  - test package in fresh app repo
    - https://docs.npmjs.com/cli-commands/pack.html
    - https://classic.yarnpkg.com/en/docs/cli/link/

- 0.2.0
  - `Bar` component
  - markers option
  - curve path component
  - long short component

`react-sparklines` comparison

**data**

- grants ability to plot multiple datasets within the same spark frame
- filter data based on `range`
- lacking: drawing curve algo. todo 0.1.0
- lacking: add `clip` to frame. won't do, don't pass in that data

**style**

- intra-data colorization
- solid and gradient masks can applied to data. from any set of data.
- stroke and fill
- lacking: markers. todo 0.1.0

### `yarn start`

### `yarn test`

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
