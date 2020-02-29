### Desc

Improves `react-sparklines`

**data**

- grants ability to plot multiple datasets within the same spark frame
- filter data based on `range`
- lacking: drawing curve algo. todo 0.1.0
- lacking: add `clip` to frame.

**style**

- intra-data colorization
  - solid and gradient masks can applied to data. from any set of data.
  - stroke and fill
- lacking: markers. todo 0.1.0

### TODO

- finish `Line`

  - `stroke.color.solid` DONE
  - `fill.gradient/solid` DONE
  - write behavorial tests. "This svg should LOOK LIKE this test svg."

- push to public github

- README & Demo link like: https://github.com/borisyankov/react-sparklines

- make "pack-able"

  - https://docs.npmjs.com/cli-commands/pack.html
  - https://classic.yarnpkg.com/en/docs/cli/link/
  - test package in fresh app repo
  - write README for npm & github? yarn???
  - github badges
    - tests passings
    - code coverage
    - version
    - stable
  - write build script????? NO
  - export types?? NO

- 0.1.0
  - `Bar` type. 0.1.0 feature
  - markers
  - curve path

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
