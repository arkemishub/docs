# Arke

Arke is a type of abstract model that can represent a person, a place or a thing, so it is an abstraction of a concept.

An Arke can be imagined as a json representation of a database table, the name of which will be
determined by the name of the Arke itself. The Arke will be associated with all the Parameters
(imaginable as the DB columns) that each record must have.

# Parameter
A Parameter can be thought of as the column of a DB, so you will need to define what type of data will be saved within it
within it (String, Int, Enum, etc.). They are created globally and can therefore be associated with different Arkes.

# Unit

If we imagine the Arke as a table and the Parameters as the fields that the records in this table are to have, then
the Unit is comparable to the individual record.
After associating the Parameters with a given Arke these will appear in the Unit structure.

# Link
Links define the types of connections that can exist between different Units.

Units can be connected together to create distributed structures.
For example, we can create a **building** unit, a **floor** unit and connect them (topology).

# Groups
Allows the creation of Arke aggregations (e.g., device group).