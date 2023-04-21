---
title: Core Concepts
---

In order to get started with Arke development you need to understand how data should be modeled.
Below you can find a brief description of core entities.

## Arke

Arke is a type of abstract model that can represent a person, a place or a thing, so it is an abstraction of a concept.

An Arke can be imagined as a json representation of a database table, the name of which will be
determined by the name of the Arke itself. The Arke will be associated with all the Parameters
(imaginable as the DB columns) that each record must have.

Imagine that you want to create a database to manage your company, you will need to create an Arke for each entity that you want to manage (e.g., employees, departments, etc.).

## Parameter

A Parameter can be thought of as the column of a DB, so you will need to define what type of data will be saved
within it (String, Int, Enum, etc.). They are created globally and can therefore be associated with different Arke.

Suppose that you have an Arke called Employee, you will need to define the parameters that each employee will have (e.g., first_name, last_name, age, etc.).

## Unit
Units can be intended as the records of a DB table, so they are the instances of a given Arke.

After we have created Employee Arke and its parameters we can create a new Unit which will represent our employee by providing the values of the parameters.

## Link
Links define the type of relation that can exist between different Units.

Units can be linked together to create distributed structures.
For example, we can create a Unit of Employee, a Unit of Company(new Arke with its parameters) and connect them with Link.

## Groups
Allows the creation of Arke aggregations (e.g., device group).
