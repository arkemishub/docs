---
id: console
title: Structure your data
---

In order to structure your data, you will use the Arke console.

## Create your first project

Once the console is started, you need to log in. By default, you can use:

```bash
username: admin
password: admin
```

We will now define the project by filling the form, let's use `todo-app` as name.
Once you submitted the form, make sure to copy and paste the values into `.env.local` file of the console.

:::warning
todo: screen/video
:::

## Create your first Arke

Since our goal is to create a todo app we need to create an **Arke** named `Todo`.

* Navigate to [http://localhost:3010/arke](http://localhost:3010/arke)
* Click `Add Arke`
* Fill the form as following
  :::warning
  todo: screen/video
  ::: 

## Create parameters

For our todo list, we will create following parameters: `title`, `status` and `priority`.
It's important to understand which type you need for each parameter, in our case title will be a `string`, status will be a `bool` and priority an `enum`.

* Navigate to [http://localhost:3010/parameters](http://localhost:3010/parameters)
* Click `Add Parameter` 
* Create the parameters as shown below.
  :::warning
    todo: screen/video
  :::

## Link parameters
Now that we have the parameters all we have to do is link them to our Todo `Arke`.

* Navigate to [http://localhost:3010/arke/todo](http://localhost:3010/arke/todo#parameters)
* Click on `Parameters` tab
* Click `Link Parameters`
* Link the parameters as shown below
  :::warning
   todo: screen/video
  :::


## Create a todo

Let's create our first task:
* Navigate to [http://localhost:3010/arke/todo](http://localhost:3010/arke/todo#units)
* Click `Add Todo`
* Fill the form with some data
  
## Recap
Congrats, you created your first `Arke`! 
