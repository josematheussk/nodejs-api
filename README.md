# NodeJS API

> API simples desenvolvida em NodeJS, com funcionalidade de CRUD básico.

## 💻 Pré-requisitos

* Você instalou a versão mais recente do `NodeJS` e `NPM`.
* Você tem uma máquina `Windows` ou `Linux`. 


## ☕ Usando

Após ter clonado o projeto em sua máquina, abra o terminal no diretório do projeto e execute:

```
node app.js
``` 

O projeto será inicializado na rota `http://localhost:4002`.

## 🔸 Rotas

### GET http://localhost:4002/products

> Lista todos os produtos cadastrados na memória.

### GET http://localhost:4002/products/{id-do-produto}

> Mostra o produto individualmente por ID.

 ```
http://localhost:4002/products/e28cb9b1-49c4-4020-9622-bfc82d252919
 ```


### POST http://localhost:4002/products

> Adiciona um produto na memória.

 ```
 {
  "name": "Nome do produto",
  "price": 10
 }
 ```
 
 ### PUT http://localhost:4002/products/{id-do-produto}

> Altera um produto da memória pelo ID.

 ```
 {
  "name": "Novo nome do produto",
  "price": 10
 }
 ```
 
  ### DELETE http://localhost:4002/products/{id-do-produto}

> Deleta um produto da memória pelo ID.

 
 
