---
id: getting-started-local-installation
title: Quickstart on Local Machine
---

This guide will help you get up and running quickly with the Arke Engine on local machine.

### Step 1: Define the Workspace

In the `Workspace` folder create an `Arke` folder, inside it we will initialize the backend project and the Arke Console.

```shell
cd ~/Workspace/
mkdir Arke
```

Define in the file `~/.zshenv` the path to the Arke directory with the key `ARKE_WORKSPACE`

```shell
# Arke workspace
export ARKE_WORKSPACE=/Users/<YOUR_USERNAME>/Workspace/Arke
```


### Step 2: Init the Starter frontend project

Clone the `Starter Frontend` project.

```shell
git clone git@github.com:arkemishub/arke-starter-frontend.git
```

#### Environment

Create a new `SECRETH_AUTH` for the next project with the command:

```shell
openssl rand -base64 32
```

In the `Frontend Starter` folder create a `.env.local` file and add the following environment variables:

```shell
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=<SECRETH_AUTH>
# Client Side require NEXT_PUBLIC_
NEXT_PUBLIC_ARKE_SERVER_URL=http://localhost:4000
```

To start the starter frontend from the root of the `arke-starter-frontend` project run:

```shell
pnpm install 
pnpm dev
```

### Step 3: Init the Starter Backend project

Clone the `Backend Starter` project and backend libraries.

```shell
git clone git@github.com:arkemishub/arke-starter-backend.git
git clone git@github.com:arkemishub/arke-monorepo-elixir.git
```

In the `arke-starter-backend` folder, create a `.env` file and add the following environment variables:

```shell
export DB_NAME=<ARKE_DB_NAME>
export DB_HOSTNAME=<ARKE_DB_HOSTNAME>
export DB_USER=<ARKE_DB_USER>
export DB_PASSWORD=<ARKE_DB_PASSWORD>
```

To start the Arke backend launch from the project root `arke-starter-backend`: 

```shell
git fetch --all -p
git pull origin main
mix deps.clean --all
mix deps.get
source .env
iex -S mix phx.backend
```

### Step 4: Init the Arke Console project

Clone the `Arke Console` project.

```shell
git clone git@github.com:arkemishub/arke-console.git
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

#### Environment

Create a new `SECRETH_AUTH` for the next project with the command:

```shell
openssl rand -base64 32
```

In the `arke_console` folder create a `.env.local` file and add the following environment variables:

```shell
NEXTAUTH_URL=http://local.arkehub.com:3100
NEXTAUTH_SECRET=<SECRETH_AUTH>
# Client Side require NEXT_PUBLIC_
NEXT_PUBLIC_ARKE_SERVER_URL=http://localhost:4000
```

To start the console from the root of the `arke_console` project run:

```shell
pnpm install 
pnpm dev
```

Then access the console from the browser by reaching the address [https://local.arkehub.com:3100](https://local.arkehub.com:3100)