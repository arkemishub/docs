---
id: get-child
title: getChild()
---

`getChild()` method returns all child of an `ArkeUnit`.


## Parameters

---

**config** `ApiRequestConfig`

api configuration object

---

## Notes

* performs an api call and retrieves all `ArkeUnit` child
* returns a list of `ArkeUnit` of type `ArkeUnitType[]`

## Example

```js
const childs = await client.arke('my_arke').unit(1).getChild()
```

