---
id: remove-child
title: removeChild()
---

`removeChild()` method removes a child from an `ArkeUnit`.


## Parameters

---
**childId** *required* `string | number`

child id

---
**connectionType** *required* `string`

connection type

---

**config** `ApiRequestConfig`

api configuration object

---

## Notes

* performs an api call that removes a child from an `ArkeUnit`

## Example

```js
await client.arke('my_arke').unit(1).removeChild(2, 'my_connection')
```

