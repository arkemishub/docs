---
id: intro
title: Introduction
---

An isomorphic JavaScript client for Arke.


## Usage

First of all, you need to install the library:

```sh
yarn install @arke/js
npm install @arke/js
pnpm install @arke/js
```

Then you're able to import the library and establish the connection with the database:

```js
import { initializeClient } from '@arke/js'

// Create a single arke js for interacting with your server
const arkeClient = initializeClient('http://localhost:4000')
```