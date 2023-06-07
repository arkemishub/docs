---
id: cli
title: CLI usage
---

`arkectl` is the official CLI for Arke. It is a command-line tool that allows you to interact with Arke from a terminal window.
It allows you to create new projects, start the console and the API service.

## Prerequisites
- [Docker](https://docs.docker.com/get-docker/)
- [Homebrew](https://brew.sh/) or [GO](https://golang.org/doc/install)

## Installation

1. Install `arkectl` using Homebrew or GO.

    ### Homebrew
    ```bash
    brew tap arkemishub/homebrew-arkectl
    brew install arkectl
    ```
    
    ### GO
    ```bash
    go install github.com/arkemishub/arkectl@latest
    ```
2. Expose a new variable called ARKEPATH within your `.zshrc` or `.bashrc`
    ```bash title=.zshrc
    export ARKEPATH=$HOME/arke
    ```
3. Run `arkectl install` to download required files to run Arke locally.
   ```bash
   arkectl install
   ```

## Commands
---
### install
Downloads required files to run Arke locally.
    
```bash
arkectl install
```
---
### init

Bootstrap Arke environment by starting the console and the API service.

Args:
 - `project-name` - Name of the project to create (optional)

```bash
arkectl init <project-name>
```

---
### start

Starts the console and the API service.

```bash
arkectl start
```
---

## Notes

By using the CLI you will be able to create a new project, start the console and the API service.
By default the console will be available at [http://localhost:3010](http://localhost:3010) and the API service at [http://localhost:4000](http://localhost:4000).
