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
import { createClient } from '@arke/js'

// Create a single arke js for interacting with your server
const arkeClient = createClient('http://localhost:5000')
```


Simple JS
```js
import { createClient } from '@arke/js'

const arkeClient = createClient('http://localhost:5000')
```

React/Next.js Application

```js
import { createClient } from '@arke/js'
import { ArkeClientProvider, useArkeAuth, useArke } from '@arke/react';

export const App = () => {
  return (
    <ArkeClientProvider arkeClient={createClient('http://localhost:5000')}>
      <ReactComponent/>
    </ArkeClientProvider>
  )
}

export const ReactComponent = () => {
  const { isAuthenticated, login, logout } = useArkeAuth();
  const environment = useArke('environment');
  
  return(
    <>
      <button onClick={() => environment.getArke()}/>
      <button onClick={() => environment.getArkePrepare()}/>
      <button onClick={() => environment.getUnit(1)}/>
      <button onClick={() => environment.getUnitPrepare(1)}/>
    </> 
  )
}
```