---
id: add-parameter
title: addParameter()
---

`addParameter()` assigns a `Parameter` to an `Arke`.


## Parameters

---
**payload** *required* `Record<string, unknown>`

new parameter

---
**config** `ApiRequestConfig`

api configuration object

---


## Notes

* performs an api call for assigning a `Parameter` to an `Arke`
* returns the assigned `Parameter` which has `ParameterType` as type

## Example

```js
await client.arke('my_arke').addParameter({ id: 'new_parameter', type: 'string' })
```

