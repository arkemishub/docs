---
id: add-child
title: addChild()
---

`addChild()` method add a child to an `ArkeUnit`.


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

* performs an api call that adds a child to an `ArkeUnit`

## Example

```js
await client.arke('my_arke').unit(1).addChild(2, 'my_connection')
```

