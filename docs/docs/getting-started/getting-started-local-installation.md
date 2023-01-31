---
id: getting-started-local-installation
title: Quickstart on Local Machine
---

## Introduction

This guide will help you get up and running quickly with the Arke Engine on local machine.

### Step 1: Define the Workspace

In the `Workspace` folder create an `Arke` folder, inside it we will initialize the backend project and the Arke Console.

```shell
cd ~/Workspace/
mkdir Arke
```

Define in the file `~/.zshenv` the path to the Arke directory with the key `ARKE_WORKSPACE`

```shell
# Arkemis
export ARKE_WORKSPACE=/Users/<YOUR_USERNAME>/Workspace/Arke
```

### Step 2: Init the Arke Backend project

Clone the `Phoenix Starter` project and backend libraries.

```shell
git clone git@github.com:arkemishub/phoenix_starter.git
git clone git@github.com:arkemishub/arke-monorepo-elixir.git
```

In the `phoenix_starter` folder, create a `.env` file and add the following environment variables:

```shell
export DB_NAME=<ARKE_DB_NAME>
export DB_HOSTNAME=<ARKE_DB_HOSTNAME>
export DB_USER=<ARKE_DB_USER>
export DB_PASSWORD=<ARKE_DB_PASSWORD>
```

To start the Arke backend launch from the project root `phoenix_starter`: 

```shell
git fetch --all -p
git pull origin main
mix deps.clean --all
mix deps.get
source .env
iex -S mix phx.server
```

## 

### Step 2: Init the Arke Console project

Clone the `Arke Console` project and frontend libraries.

```shell
git clone git@github.com:arkemishub/arke-console.git
git clone git@github.com:arkemishub/arke-monorepo.git
```

Define in the `hosts` file a dedicated console host `local.arkehub.com`:

```shell
cd /etc/hosts
sudo vim hosts
```

```shell
# Arke Hosts
127.0.0.1 local.arkehub.com
```

### Environment

Create a new `SECRETH_AUTH` for the next project with the command:

```shell
openssl rand -base64 32
```

In the `arke_console` folder create a `.env.local` file and add the following environment variables:

```shell
NEXTAUTH_URL=http://local.arkehub.com:3100
NEXTAUTH_SECRET=<SECRETH_AUTH>
GH_PA_TOKEN=<GH_PA_TOKEN>
# Client Side require NEXT_PUBLIC_
NEXT_PUBLIC_ARKE_SERVER_URL=http://localhost:4000
```


To start the console from the root of the `arke_console` project run:

```shell
pnpm install 
pnpm start
```

Then access the console from the browser by reaching the address [https://local.arkehub.com:3100](https://local.arkehub.com:3100)