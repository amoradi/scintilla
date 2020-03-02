# TODO

- yarn publish: publish to npm

  - https://hackernoon.com/how-to-publish-your-package-on-npm-7fc1f5aae600
  - write README for npm (reuse githubs)
  - export types
  - tiny size plz
  - test package in fresh app repo
    - https://docs.npmjs.com/cli-commands/pack.html
    - https://classic.yarnpkg.com/en/docs/cli/link/

- create demo page like: https://github.com/borisyankov/react-sparklines

  - host @ https://github.com/gitname/react-gh-pages
  - possibly have a "playground for tampering". \*\* NO
  - add "docs" page
    - this content reads from README.md OR both read from same source.
    - so as I update in 1 place, they simulataneously updates
    - or write api in www and LINK to it from README
  - visuals + code listing
    - cycle through all permutations
    - need syntax highlighter \*\* DONE
  - for now, locally, link to package \*\* DONE
  - put one chart on page \*\* DONE

- clean up code

- 0.2.0
  - markers option
  - fill vertical fade option
  - clip data option ??
  - `Bar` component
  - `Curve` component
  - `LongShort` component
