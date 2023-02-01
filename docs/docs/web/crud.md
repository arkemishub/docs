---
id: crud
title: Crud
---

This guide talks about setting a Crud page through Arke.

## Crud

### Step 1: Create a state

Create a dedicated state to manage your CRUD:

```tsx
type ID = string;
export interface CrudState {
    add?: boolean;
    edit?: boolean | ID;
    delete?: boolean | ID;
}

export default function Page() {
    const [crud, setCrud] = useState<CrudState>({
        add: false,
        edit: false,
        delete: false,
    })

    return (
        <div>
            ...
        </div>
    )
}
```

### Step 2: Create/Edit CrudComponent

Create a CrudComponent that will be used as Dialog/Drawer form to create/edit your Arke or Unit.

For example if you have to manage `Products` units, you can name it `ProductCrud` in the following way:

```tsx
export function ProductCrud(props: CrudProps) {
  const client = useClient();
  const { open, title, id, onClose } = props;

  return (
    <Dialog open={!!open} title={title} onClose={onClose}>
      <Form
        client={client}
        arke="product"
        unit={id}
        onSubmit={(data) => console.log(data)}
        exclude={['id', 'arke_id']}
      >
        {({ loading }) =>
          loading ? (
            <Loader />
          ) : (
            <>
              <Container>
                <FormField
                  parameter={'image'}
                  component={(props) => <ProductImage {...props} />}
                />
                <FormField parameter={'name'} />
                <FormField parameter={'slug'} />
                <FormField parameter={'product_type'} />
                <FormField parameter={'price'} />
                <FormField parameter={'description'} />
              </Container>
              <Action>
                <Button disabled={loading} variant="outlined" onClick={onClose}>
                  Annulla
                </Button>
                <Button disabled={loading} variant="contained" type="submit">
                  Conferma
                </Button>
              </Action>
            </>
          )
        }
      </Form>
    </Dialog>
  );
}
```

### Step 3: useCrud hook

Create a global `useCrud` hook to simply manage the create/edit API call on your CRUDs just passing arke, 
unit and callback params;  

```tsx
import { getClient } from '@arke/getClient';
import { TResponse, TUnit } from '@arkejs/client';

export default function useCrud(
  arke: string,
  unit: string | undefined,
  callback: (data: TResponse<TUnit>) => void
) {
  const client = getClient();
  function onSubmit(data: Record<string, unknown>) {
    if (!unit) {
      client.unit.create(arke, data).then(
        (res) => callback(res),
        (err) =>
          err.response.data.messages.forEach((item: { message: string }) =>
            // Error notification
            console.log(item.message)
          )
      );
    } else {
      client.unit.edit(arke, unit as string, data).then(
        (res) => callback(res),
        (err) =>
          err.response.data.messages.forEach((item: { message: string }) =>
            // Error notification
            console.log(item.message)
          )
      );
    }
  }
  return { onSubmit };
}
```

### Step 4: useCrud on CrudComponent

Import your useCrud hook on CrudComponent, this will provide the `onSubmit` that you can 
use on your Form.

```tsx
import { useCrud } from '@hooks'; 

export function ProductCrud(props: CrudProps) {
    // ...
    const {onSubmit} = useCrud('product', id, props.onSubmit);

    return (
        <Dialog open={!!open} title={title} onClose={onClose}>
            <Form
                // Connect useCrud onSubmit
                onSubmit={onSubmit}
            >
                ...
            </Form>
        </Dialog>
    )
}
```

### Step 5: Delete CrudComponent

Create and export a `Delete` component from ComponentCrud:

```tsx
function Delete(props: DeleteProps) {
  const client = useClient();
  const { arke, id, open, title, onClose, onSubmit } = props;

  function onDelete() {
      client.unit.delete(arke, id as string).then((res) => {
        onSubmit(res);
      });
  }

  return (
    <Dialog open={!!open} title={title} onClose={onClose}>
      <Container>
        <p className="text-sm">Sei sicuro di voler continuare?</p>
      </Container>
      <Action>
        <Button variant="outlined" onClick={onClose}>
          Annulla
        </Button>
        <Button variant="contained" onClick={onDelete}>
          Conferma
        </Button>
      </Action>
    </Dialog>
  );
}
```

### Step 6: Compose CRUD on your page

Import your CrudComponent on your page and connect the state variables:

```tsx
import {
    ProductCrud as ProductAdd,
    ProductCrud as ProductEdit,
    Delete as ProductDelete,
} from '@crud/products/ProductCrud';

export default function Products() {
    const [crud, setCrud] = useState<CrudState>({
        add: false,
        edit: false,
        delete: false,
    });
    
    <Button onClick={setCrud((p) => ({ ...p, add: false }))}>Add</Button>
    <Button onClick={setCrud((p) => ({ ...p, edit: false }))}>Edit</Button>
    <Button onClick={setCrud((p) => ({ ...p, delete: false }))}>Delete</Button>

    <ProductAdd
        title="Aggiungi prodotto"
        open={crud.add}
        onClose={() => setCrud((p) => ({ ...p, add: false }))}
        onSubmit={() => {
            toast.success(`Prodotto aggiunta con successo`);
            setCrud((p) => ({ ...p, add: false }));
        }}
    />
    <ProductEdit
        title="Modifica prodotto"
        open={crud.edit}
        id={crud.edit as string}
        onClose={() => setCrud((p) => ({ ...p, edit: false }))}
        onSubmit={() => {
            toast.success(`Prodotto modificata con successo`);
            setCrud((p) => ({ ...p, edit: false }));
        }}
    />
    <ProductDelete
        arke="product"
        title="Elimina prodotto"
        open={crud.delete}
        id={crud.delete as string}
        onClose={() => setCrud((p) => ({ ...p, delete: false }))}
        onSubmit={() => {
            toast.success(`Prodotto eliminata con successo`);
            setCrud((p) => ({ ...p, delete: false }));
        }}
    />
}
```

Repeat these steps for all CRUDs present in your application.

:::tip
You can generate a global and generalized components for all CRUDs
:::

## Advanced: Link after creation

In some cases on the unit creation process, it necessary `Link` your unit to another one.

### Step 1: useLink and useUnlink

Create the `useLink` and `useUnlink` hooks, that will used after the creation process.

```tsx
import { useClient } from '@hooks';

export function useLink(
  arkeParent: string,
  unitParent: string | string[] | undefined,
  arkeChild: string,
  callback?: () => void
) {
  const client = useClient();
  function onLink(unitChild: string) {
    return client.api
      .post(
        `/${arkeParent}/unit/${unitParent}/link/link/${arkeChild}/unit/${unitChild}`
      )
      .then(callback)
      .catch((err: string) => console.error(err));
  }
  return { onLink };
}

export function useUnlink(
  arkeParent: string,
  unitParent: string | string[] | undefined,
  arkeChild: string,
  callback?: () => void
) {
  const client = useClient();
  function onUnlink(unitChild: string) {
    return client.api
      .delete(
        `/${arkeParent}/unit/${unitParent}/link/link/${arkeChild}/unit/${unitChild}`
      )
      .then(callback)
      .catch((err: string) => console.error(err));
  }
  return { onUnlink };
}
```

### Step 2: Consume link hooks

Use useLink and useUnlink on your CRUD page:

```tsx
import {
    ProductCrud as ProductAdd,
    ProductCrud as ProductEdit,
    Delete as ProductDelete,
} from '@crud/products/ProductCrud';

export default function Products() {
    const [crud, setCrud] = useState<CrudState>({
        add: false,
        edit: false,
        delete: false,
    });

    // Link new product [child] to category [parent]
    const { onLink } = useLink('category', id, 'product', () => {
        toast.success(`Coworker aggiunto con successo`);
        setCrud((p) => ({ ...p, add: false }));
    });
    const { onUnlink } = useUnlink('category', id, 'product');

    <Button onClick={setCrud((p) => ({ ...p, add: false }))}>Add</Button>
    <Button onClick={setCrud((p) => ({ ...p, edit: false }))}>Edit</Button>
    <Button onClick={setCrud((p) => ({ ...p, delete: false }))}>Delete</Button>

    <ProductAdd
        title="Aggiungi prodotto"
        open={crud.add}
        onClose={() => setCrud((p) => ({ ...p, add: false }))}
        // Pass the id of the new product to onLink method
        onSubmit={(res) => onLink(res.data.content.id)}
    />
    <ProductEdit
        title="Modifica prodotto"
        open={crud.edit}
        id={crud.edit as string}
        onClose={() => setCrud((p) => ({ ...p, edit: false }))}
        onSubmit={() => {
            toast.success(`Prodotto modificata con successo`);
            setCrud((p) => ({ ...p, edit: false }));
        }}
    />
    <ProductDelete
        arke="product"
        title="Elimina prodotto"
        open={crud.delete}
        id={crud.delete as string}
        onClose={() => setCrud((p) => ({ ...p, delete: false }))}
        // Before delete unlink the selected product
        onBeforeSubmit={() => onUnlink(crud.delete as string)}
        onSubmit={() => {
            toast.success(`Prodotto eliminata con successo`);
            setCrud((p) => ({ ...p, delete: false }));
        }}
    />
}
```


