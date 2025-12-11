# @cybernix/footer-protect

Small React footer component packaged for npm.

## Contents

- `index.js` — CommonJS export: `{ Footer }` React component.

## Usage

If published to the registry, install:

```bash
npm install @cybernix/footer-protect
```

Then import in a CommonJS setup:

```js
const React = require("react");
const { Footer } = require("@cybernix/footer-protect");

// use in render
React.createElement(Footer);
```

Or in ES modules (if you build/transform the package):

```js
import React from "react";
import { Footer } from "@cybernix/footer-protect";

function App() {
  return (
    <div>
      {/* ... */}
      <Footer />
    </div>
  );
}
```

## Publish

### Public NPM (or scoped public)

Make sure the package `private` is `false` and you are logged in to npm.

```bash
npm login
npm publish --access=public
```

### Private NPM (restricted)

```bash
npm login
npm publish --access=restricted
```

Note: private scoped packages require a paid plan on npm for org-level private packages.

### GitHub Packages (scope)

1. Create a repo on GitHub and push this package.
2. Use an `.npmrc` with a token for users to install from GitHub Packages:

```text
@cybernix:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_TOKEN
```

3. Then publish with `npm publish`.

## Notes

- This is a minimal CommonJS package. If you want TypeScript, ESM build, or a transpile step, I can add `tsconfig`, `rollup`/`vite` build, and types.
- If you want me to commit these files and push to `main`, say so and I will create a git commit.
