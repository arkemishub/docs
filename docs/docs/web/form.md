---
id: form
title: Form
---

`@arkejs/form` Arke form is a component to automate form generation process

## Install

Is available on npm registry, visit 
[https://www.npmjs.com/package/@arkejs/form](https://www.npmjs.com/package/@arkejs/form)
to get more information.

Install the library running:

```sh
npm install @arkejs/form
```

## Step 1: Create a FormProvider

You can create a FormProvider to associate automatically a component to Arke parmeter type:

```js
import { FormProvider } from '@arkejs/form'

function Application() {
    return (
        <FormProvider
            components={{
                boolean: (props) => (<input {...props} type="checkbox" />),
                string: (props) => (<MaterialInput{...props} />),
                date: (props) => (<TailwindDate{...props} />)
            }}
        >
            ...
        </FormProvider>
    )
}
```

## Step 2: Create a Form

Use Form and the FormField components to create your Form :

```js
import { Form, FormField } from '@arkejs/form'

function Application() {
    const fields = [
        {
            id: "name",
            label: "Name",
            required: true,
            type: "string",
        },
        {
            id: "surname",
            label: "Surname",
            required: true,
            type: "string",
        },
        {
            id: "email",
            label: "Email",
            required: true,
            type: "string",
        },
        {
            id: "active",
            label: "Active",
            required: false,
            type: "boolean",
        },
    ]
    
    return (
        <FormProvider>
            <Form
                fields={fields}
                onSubmit={(values) => setData(values)}
                onChange={(values) => console.log(values)}
            >
                {({ fields }) =>
                    <div>
                        {/* Automatically get all params using id */} 
                        <FormField id={'name'}/>
                        <FormField id={'surname'}/>
                    </div>
                }
            </Form>
        </FormProvider>
    )
}
```

:::tip
You can create customized single FormField components through the `render` prop:

```js
<FormField 
    id={'profile_image'} 
    // Customize the field without using type and FormProvider
    render={(props) => <ProfileImage {...props}/>} 
/>
```
:::