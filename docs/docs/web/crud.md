---
id: crud
title: CRUD
---

This guide talks about setting a Crud page through Arke.

## Init CRUD

### Step 1: Create a CRUD state

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

### Step 2: Create a useStruct hook

With useStruct hook you can simplify the retrieval data and get the fields list:

```tsx
import { useEffect, useState } from 'react';
import useClient from '@/arke/useClient';
import { Field } from '@arkejs/form';

export default function useStruct(
  arke: string,
  unit: string | undefined,
  open: boolean
) {
  const client = useClient();
  const exclude = ['id', 'arke_id'];
  const [loading, setLoading] = useState<boolean>(true);
  const [fields, setFields] = useState<Field[]>([]);

  useEffect(() => {
    if (open) {
      setLoading(true);
      const getStruct = () =>
        unit
          ? client.unit.struct(arke, unit, {
              params: { exclude },
            })
          : client.arke.struct(arke, {
              params: { exclude },
            });

      getStruct()
        .then((res) => setFields(res.data.content.parameters))
        .catch((e) => console.error(e))
        .finally(() => setLoading(false));
    }
  }, [open]);

  return { fields, loading };
}
```

### Step 3: Create a useCrud hook

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
    const client = useClient();
    function onSubmit(data: Record<string, unknown>) {
        const promise = !unit
            ? client.unit.create(arke, data)
            : client.unit.edit(arke, unit as string, data);
        promise.then(
            (res) => callback(res),
            (err) =>
                err.response.data.messages.forEach((item: { message: string }) =>
                    toast.error(item.message)
                )
        );
    }
    return { onSubmit };
}
```

### Step 4: Create/Edit CrudComponent

Create a CrudComponent that will be used as Dialog/Drawer form to create/edit your Arke or Unit.

For example if you have to manage `Products` units, you can name it `ProductCrud`.

Import your useStruct and useCrud hook on CrudComponent, this will provide the `onSubmit` that you can
use on your Form.


```tsx
export function ProductCrud(props: CrudProps) {
  const client = useClient();
  const { open, title, id, onClose } = props;
  const { fields, loading } = useStruct(arke, id, open as boolean);
  const { onSubmit } = useCrud('product', id, props.onSubmit);
    
  return (
    <Dialog open={!!open} title={title} onClose={onClose}>
      <Form
        fields={fields}
        onSubmit={onSubmit}
      >
        {() =>
          loading ? (
            <Loader />
          ) : (
            <>
              <Container>
                <FormField
                  id={'image'}
                  render={(props) => <ProductImage {...props} />}
                />
                <FormField id={'name'} />
                <FormField id={'slug'} />
                <FormField id={'product_type'} />
                <FormField id={'price'} />
                <FormField id={'description'} />
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

### Step 6: Delete CrudComponent

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

### Step 7: Compose CRUD on your page

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


