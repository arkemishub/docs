---
id: get-arke
title: get()
---

`get()` method returns the detail of an `Arke`.


## Parameters

---

**config** `ApiRequestConfig`

api configuration object

---

## Notes

* performs an api call and retrieves `Arke` detail
* returns an `Arke` detail of type `ArkeType`

## Example

```js
const detail = await client.arke('my_arke').get()
```

