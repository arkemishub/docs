---
id: getting-started-docker
title: Quickstart with Docker
---

import Label from '@site/src/components/Label';

<Label variant="error">Work in progress</Label>

## Introduction

This guide will help you get up and running quickly with the Arke Engine and a Postgres database running as Docker 
containers using Docker Compose.

### Prerequisites

- [Docker](https://docker.com) installed and running.

### Step 1: Get the Compose file & start the containers

Get the Compose file from our repo. If you're using curl, run this command in a new directory:

```shell
curl <https://<>.docker-compose.yaml> -o docker-compose.yml
```