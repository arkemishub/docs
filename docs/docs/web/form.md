---
id: form
title: Form
---

`@arkejs/form` Arke form is a component to automate form generation process 
through [@arkejs/client](client-js.md)

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

Use Form and the FormField components to create your Form:

```js
import { Form, FormField } from '@arkejs/form'

function Application() {
    return (
        <FormProvider>
            <Form
                // Arke client from @arkejs/client 
                client={client}
                arke="<ARKE_NAME>"
                onSubmit={(values) => setData(values)}
                // Exclude parameters from the form
                exclude={['id', 'arke_id']}
                onChange={(values) => console.log(values)}
            >
                {({ parameters, loading }) =>
                    loading ? (
                        <Loader size={20} />
                    ) : (
                        <div>
                            <FormField parameter={'profile_image'}/>
                        </div>
                    )}
            </Form>
        </FormProvider>
    )
}
```

:::tip
You can create customized single FormField components through the `component` prop:

```js
<FormField 
    parameter={'profile_image'} 
    component={(props) => <ProfileImage {...props}/>} 
/>
```
:::