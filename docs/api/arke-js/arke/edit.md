---
id: edit-arke
title: edit()
---

`edit()` performs an edit of instanced `Arke`.


## Parameters

---
**payload** *required* `Record<string, unknown>`

edit payload

---
**config** `ApiRequestConfig`

api configuration object

---


## Notes

* performs an api call for editing an `Arke`
* returns the edited `Arke` which has `ArkeType` as type

## Example

```js
const edited = await client.arke('my_arke').edit({ name: 'New Name' })
```

