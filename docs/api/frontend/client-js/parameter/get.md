---
id: get-parameter
title: get()
---

`get()` method returns the detail of a `Parameter`.


## Parameters

---

**config** `ApiRequestConfig`

api configuration object

---

## Notes

* performs an api call and retrieves `Parameter` detail
* returns a `Parameter` detail of type `ParameterType`

## Example

```js
const parameter = await client.arke('my_arke').parameter('name').get()
```

