---
id: core-concepts
title: Core concepts
---

## Overview
Grazie alle entitá Arke puoi create la struttura del tuo progetto attraverso una metodologia semplificata.
Istanzia in pochi e semplici passi il Backend e il Database per la tua applicazione e inizia a strutturarlo senza 
scrivere una riga di codice attraverso l'Arke Console. 

Scopriamo qui di seguito le entitá essenziali per comprendere come strutturare la tua applicazione con Arke.

Durante una di queste operazioni di struttura viene automaticamente generata l'endpoint Rest API per richiamare i dati 
da un client (applicazione frontend Webapps, applicazione mobile, altro server o servizio).

### Arke
Un Arke si può immaginare come una rappresentazione json di una tabella del database, il cui nome sarà 
determinato dal nome dell’Arke stesso. All'Arke verranno associati tutti i Parametri 
(immaginabili come le colonne del DB) che ogni record dovrà avere.

### Parametro
Un Parametro si può immaginare come la colonna di un DB, per cui bisognerà definire che tipo di dato verrà salvato al suo
interno (String, Int, Enum, etc.). Vengono creati a livello globale e possono quindi essere associati a diversi Arke.

Un Parametro può essere inoltre di quattro diversi formati:

- _MANY_: ...
- _STREAM_: Parametro con storico dati. Esempio: vengono prese diverse misurazioni di temperatura e quindi è bene salvare i diversi datetime così da poter creare degli analytics
- _CONNECTION_: Parametro che serve per simulare le relazioni tra due diversi Arke
- _ATTRIBUTE_: Parametro che non necessita uno storico

### Unit
Se immaginiamo l'Arke come una tabella e i Parametri come i campi che i record di questa tabella dovranno avere, allora 
la Unit è paragonabile al singolo record. 
Dopo aver associato i Parametri ad un determinato Arke questi compariranno nella struttura della Unit.

### Link
I Link definiscono le tipologie di connessione che possono esistere tra diverse Unit.

Le unit possono essere connesse tra loro per creare strutture distribuite.
Possiamo per esempio creare una unit **edificio**, una unit **piano** e connetterle (topologia).

### Gruppi
Consente di creare aggregazioni di Arke (es. gruppo di dispositivi).