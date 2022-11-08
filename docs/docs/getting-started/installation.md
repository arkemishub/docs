---
id: installation
title: Local Installation
---

## Creare un Arke App da ambiente locale

### Workspace

Di seguito viene descritto tutto l'occorrente per lavorare con Arke sulla propria macchina.

Nella cartella `Workspace` creare una cartella `Arke`, al suo interno inizializzeremo il progetto del backend
Arke della console.

```shell
cd ~/Workspace/
mkdir Arke
```

Definiamo nel file `~/.zshenv` il path della directory Arke con la chiave `AR

```shell
# Arkemis
export ARKE_WORKSPACE=/Users/<YOUR_USERNAME>/Workspace/Arke
```

## Arke Backend

### Init

Cloniamo il progetto `Phoenix Starter` e le librerie backend.

```shell
git@github.com:arkemishub/phoenix_starter.git
git@github.com:arkemishub/arke-monorepo-elixir.git
```

### Environment

Nella cartella `phoenix_starter` creare un file `.env` e aggiungere le seguenti variabili d'ambiente:

```shell
export DB_NAME=<ARKE_DB_NAME>
export DB_HOSTNAME=<ARKE_DB_HOSTNAME>
export DB_USER=<ARKE_DB_USER>
export DB_PASSWORD=<ARKE_DB_PASSWORD>
```

### Start

Per avviare il backend Arke lanciare dalla root del progetto `phoenix_starter`: 

```shell
git fetch --all -p
git pull origin main
mix deps.clean --all
mix deps.get
source .env
iex -S mix phx.server
```

## Arke Console

### Init 

Cloniamo il progetto `Arke Console` e le librerie frontend.

```shell
git@github.com:arkemishub/arke-console.git
git@github.com:arkemishub/arke-monorepo.git
```

### Host
Definiamo nel file `hosts` un host dedicato alla console `local.arkehub.com`:

```shell
cd /etc/hosts
sudo vim hosts
```

Aggiungere l'host

```shell
# Arke Hosts
127.0.0.1 local.arkehub.com
```

### Environment

Creaiamo un nuovo `SECRETH_AUTH` per il progetto next con il comando:

```shell
openssl rand -base64 32
```

Nella cartella `arke_console` creare un file `.env.local` e aggiungere le seguenti variabili d'ambiente:

```shell
NEXTAUTH_URL=http://local.arkehub.com:3100
NEXTAUTH_SECRET=<SECRETH_AUTH>
GH_PA_TOKEN=<GH_PA_TOKEN>
# Client Side require NEXT_PUBLIC_
NEXT_PUBLIC_ARKE_SERVER_URL=http://localhost:4000
```

### Start

Per avviare la console dalla root del progetto `arke_console`:

```shell
pnpm install 
pnpm start
```

Accedere quindi alla console da browser raggiungendo l'indirizzo: `https://local.arkehub.com:3100`

### Development App 

Una volta che backend e console sono pronti é possibile utilizzare la console per generare Arke/Parametri/Unit 
e consumare le relative api, anche attraverso le librerie frontend `@arke/js` e `@arke/react-ui`.