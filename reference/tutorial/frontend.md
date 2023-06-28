---
id: frontend
title: Integrating with custom frontend
---

## Setup

### Clone the base repo
We have several templates available to start with. For this tutorial we will use the [`nextjs-crud` template](https://github.com/arkemishub/frontend-starters/tree/main/examples/nextjs-crud).

```bash
arkectl create-app nextjs-todo --local --frontend --template=nextjs-crud
```

### Setup .env file for the frontend
Cloned template comes in with an existent `.env.development` example. Let's change the value of `NEXT_PUBLIC_ARKE_PROJECT` to `nextjs-todo` in order to make the frontend point to the previously created project.

```js
NEXT_PUBLIC_ARKE_PROJECT=nextjs-todo
```

### Start the frontend
Let's start the frontend by running the following command:

```bash
pnpm dev
```

---

## Development


### Retrieve a list of todos
We created a `todo` unit in the previous chapter, let's see how we can retrieve a list of todos from the frontend.
Since the project is using Next.js we'll fetch the data in the `getServerSideProps` function of the `todos.tsx` page.

```tsx
const fetchAllTodos = (client: Client) => client.unit.getAll("todo");
```

```tsx
export const getServerSideProps: GetServerSideProps = async (context) => {
    const client = getClient(context);
    try {
        const response = await fetchAllTodos(client);
        return {
            props: {
                todos: response.data.content.items,
            },
        };
    } catch (e) {
        return {
            redirect: {
                destination: "/404",
                permanent: false,
            },
        };
    }
};
```

Todo page receive now `todos` as props, this list will contain all the `todo` units.

### Creating a new `todo`

Now that we have all the fetched todos it's time to make new ones, to do that we will use `arke.struct` method of the client.
This will give us the structure of parameters linked to the `todo` arke.

Let's call struct method in `getServerSideProps` function of the `todos.tsx` page.

```tsx
export const getServerSideProps: GetServerSideProps = async (context) => {
    // ... rest of the code
    const structResponse = await client.arke.struct("todo");
    
    return {
        props: {
            // ... others
            struct: structResponse.data.content.parameters,
        },
    };
};
```

Struct is thought to be ready to be used with `@arkejs/form` library. Let's see how we can use it.

```tsx
import { Form, FormField } from "@arkejs/form";
import { Button, Spinner } from "@arkejs/ui";

function Todos({struct, todos}) {
    
    return (
        <>
            <Form onSubmit={handleSubmit} style={{ height: "100%" }} fields={struct}>
                {() =>
                    loading ? (
                        <div
                            className="flex items-center justify-center"
                        >
                            <Spinner />
                        </div>
                    ) : (
                        <>
                            <div className="grid gap-4">
                                {struct.map((field) => (
                                    <FormField key={field.id} id={field.id} />
                                ))}
                            </div>
                            <div className="mt-4 flex justify-between gap-4">
                                <Button color="primary" type="submit">
                                    Submit
                                </Button>
                            </div>
                        </>
                    )
                }
            </Form>
        </>
    );
}
```

Let's now define `handleSubmit` callback as following.

```ts
const handleSubmit = async (data) => {
    client.unit
    .create("todo", data);
};
```

By calling `client.unit.create` we are creating a new `todo` unit with the data provided by the form.


### Conclusions

We just saw how to retrieve a list of units and how to create a new one. Arke is able to handle CRUD operations on units with ease, so you can also update and delete them.
Following you'll find a list of useful links to learn more about the libraries used in this tutorial: 

- [@arkejs/form](https://arkemishub.github.io/form/docs/install/)
- [@arkejs/client](https://arkemishub.github.io/clientjs/docs/install/)
