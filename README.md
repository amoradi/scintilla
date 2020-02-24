### Desc

Improves `react-sparklines`

**data**

- grants ability to plot multiple datasets within the same spark frame
- filter data based on `range`
- lacking: add `clip` to frame.
- lacking: drawing curve algo

**style**

- intra-data colorization
  - solid and gradient masks can applied to data. from any set of data.
  - stroke and fill
- lacking: spot/dots

### TODO

- finish `Line`

  - `stroke.color.solid`
  - `fill.gradient/solid`

- start & finish `Bar`

  - just like `Line`

- write behavorial tests. "This svg should LOOK LIKE this test svg."

- make public github endpoint

  - README & Demo link like: https://github.com/borisyankov/react-sparklines

- make "pack-able"
  - https://docs.npmjs.com/cli-commands/pack.html
  - https://classic.yarnpkg.com/en/docs/cli/link/
  - test package in fresh app repo
  - export types??
  - write README for npm & github? yarn???
  - github badges
    - tests passings
    - code coverage
    - version
    - stable
  - write build script?????

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
