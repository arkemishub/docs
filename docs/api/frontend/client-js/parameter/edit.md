---
id: edit-parameter
title: edit()
---

`edit()` performs an edit of instanced `Parameter`.


## Parameters

---
**data** *required* `Record<string, unknown>`

edit payload

---
**config** `ApiRequestConfig`

api configuration object

---


## Notes

* performs an api call for editing a `Parameter`
* returns the edited `Parameter` which has `ParameterType` as type

## Example

```js
const edited = await client.arke('my_arke').parameter('name').edit({ type: 'string' })
```

