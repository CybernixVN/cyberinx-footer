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

## Granular Access Token (recommended settings)

If you publish under a scoped org (for example `@cybernixvn`), create a Granular Access Token on npmjs.com with the following recommended settings:

- **Token name**: `Cybernix-package` (or another unique name)
- **Description**: (optional) e.g. "Publish token for footer-protect CI"
- **Allowed IP ranges**: (optional) provide CIDR ranges if you want to lock usage to specific IPs
- **Packages and scopes**: select the scope `@cybernixvn` (or the specific package `@cybernixvn/footer-protect`) so the token only applies to that scope
- **Permissions**: enable `packages:read` and `packages:publish` (read + write for the selected scope)
- **Organizations**: select `cybernixvn` if prompted
- **Bypass 2FA**: enable this option if you plan to publish from CI or automation (required in some org setups)
- **Expiration**: choose an expiration date (e.g. 90 days) and rotate tokens regularly

After generating the token, copy it immediately (it will be shown only once) and store it securely. Do NOT commit the token to source control.

Example local usage (PowerShell session only):

```powershell
$env:NPM_TOKEN = 'PASTE_YOUR_NEW_TOKEN_HERE'
$env:NODE_AUTH_TOKEN = $env:NPM_TOKEN
cd footer-protect
npm version patch
npm publish --access public
```

For CI/CD, store the token in repository secrets (e.g. `NPM_TOKEN`) and expose it as `NODE_AUTH_TOKEN` during the publish step.

If you do not control the org scope `@cybernixvn`, you can publish as a non-scoped package by changing the `name` field in `package.json` (for example to `"cybernix-footer-protect"`).
