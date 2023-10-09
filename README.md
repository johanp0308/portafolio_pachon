
# Portafolio Web Project

In this repository, I will save what I learned requests to the mockAPI where I make the basic queries of any data storage system.

##


### API Reference

#### GET all items

**Method** : `GET`

**URL** : `http://localhost:5500/registros`

**Storage** : `src/modules/dataCRUD.js`

**Module** : `update` 

**Querys** : `(tabla)`

**Autho Required** : `false`

```javascript
{
  "records":[
    {
      "id": "2",
      "cash":"egreso",
      "value":20000
    },
    ...
  ]
}
```

#### POST items

**Method**: `POST`

**URL** : `http://localhost:5500/registros`

**Storage** : `src/modules/dataCRUD.js`

**Module** : `createData` 

**Querys** : `(data)`

**Auth Required** : `False`

```javascript
//Enviado
  data = {
      cash: "egreso",
      value: "20000"
  }
```

#### Delete Item

**Method**: `DELETE`

**URL** : `http://localhost:5500/registros/:id`

**Storage** : `src/modules/dataCRUD.js`

**Module** : `deleteData` 

**Querys** : `(id)`

**Auth Required** : `False`

```javascript
//Enviado
{
  "id":"1"
  "cash":"ingreso",
  "value":20000
}
```


#### PUT

**Method**: `PUT`

**URL** : `http://localhost:5500/registros/:id`

**Storage** : `src/modules/dataCRUD.js`

**Module** : `editData` 

**Querys** : `(id)`

**Auth Required** : `false`

```javascript
//Enviado
{
  "id":"1"
  "cash":"ingreso",
  "value":20000
}
```

## JSON-server installation

To install json-server in the project, we must have node, if we do not have it we can use the following tool to install Node and install npm.

### NVM installation Windows

First we will download this [NVM zip](https://github.com/coreybutler/nvm-windows/releases/download/1.1.7/nvm-setup.zip), then we will unzip it and run the normal installation.

We open a terminal and write the following command:

```shell
nvm --version
```

Now with nvm installed, we proceed on a command line to install node and npm:

```shell
nvm install 18.16.1
```

Then we verify that everything has been installed and we also verify the list of versions.

```shell
node -v
#18.16.1

npm -v
# 9.6.7
```

After having installed npm, we continue with the installation of json-server

```shell
npm -E -D install json-server 
```

To start the json-server, it will run on port 5500, so we run the following command:

```shell
npm run dev
```

