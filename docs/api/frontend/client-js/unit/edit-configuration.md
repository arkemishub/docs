---
id: edit-unit-configuration
title: editConfiguration()
---

`editConfiguration()` performs a change on the configuration of an `ArkeUnit`.


## Parameters

---
**data** *required* `Record<string, unknown>`

edited data

---
**config** `ApiRequestConfig`

api configuration object

---


## Notes

* performs an api call to edit the configuration of an `ArkeUnit` 
* returns the edited `ArkeUnit`

## Example

```js
const edited = await client.arke('my_arke').unit(1).editConfiguration({ name: 'New Name' })
```

