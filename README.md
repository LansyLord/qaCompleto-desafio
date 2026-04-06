# qa20252
Repositório com os códigos da turma de Qualidade de Software.

<img width="1446" height="350" alt="image" src="https://github.com/user-attachments/assets/0e7a1e8c-75b4-4986-93a6-84cc5b065328" />

# Colletion dos Enpoints:
```{
  "info": {
    "_postman_id": "638641b6-b99d-4366-a895-3c930dcd20fa",
    "name": "Desafio Qualidade de Software",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
    "_exporter_id": "37928664"
  },
  "item": [
    {
      "name": "Listar Todos",
      "protocolProfileBehavior": {
        "disableBodyPruning": true
      },
      "request": {
        "method": "GET",
        "header": [],
        "body": {
          "mode": "raw",
          "raw": ""
        },
        "url": {
          "raw": "http://localhost:8080/api/items",
          "protocol": "http",
          "host": [
            "localhost"
          ],
          "port": "8080",
          "path": [
            "api",
            "items"
          ]
        }
      },
      "response": []
    },
    {
      "name": "Cadastrar Item",
      "request": {
        "method": "POST",
        "header": [],
        "body": {
          "mode": "raw",
          "raw": "{\r\n    \"name\":\"Teclado Chinês\",\r\n    \"description\":\"Teclado Mecânico AULA F75\"\r\n}",
          "options": {
            "raw": {
              "language": "json"
            }
          }
        },
        "url": {
          "raw": "http://localhost:8080/api/items",
          "protocol": "http",
          "host": [
            "localhost"
          ],
          "port": "8080",
          "path": [
            "api",
            "items"
          ]
        }
      },
      "response": []
    },
    {
      "name": "Buscar Por ID",
      "request": {
        "method": "GET",
        "header": [],
        "url": {
          "raw": "http://localhost:8080/api/items/:id",
          "protocol": "http",
          "host": [
            "localhost"
          ],
          "port": "8080",
          "path": [
            "api",
            "items",
            ":id"
          ],
          "variable": [
            {
              "key": "id",
              "value": "1"
            }
          ]
        }
      },
      "response": []
    },
    {
      "name": "Atualizar Item",
      "request": {
        "method": "PUT",
        "header": [],
        "body": {
          "mode": "raw",
          "raw": "{\r\n    \"name\":\"Teclado Americano\",\r\n    \"description\":\"Teclado Mecânico Razer BlackWidow\"\r\n}",
          "options": {
            "raw": {
              "language": "json"
            }
          }
        },
        "url": {
          "raw": "http://localhost:8080/api/items/:id",
          "protocol": "http",
          "host": [
            "localhost"
          ],
          "port": "8080",
          "path": [
            "api",
            "items",
            ":id"
          ],
          "variable": [
            {
              "key": "id",
              "value": "1"
            }
          ]
        }
      },
      "response": []
    },
    {
      "name": "Deletar Item",
      "request": {
        "method": "DELETE",
        "header": [],
        "url": {
          "raw": "http://localhost:8080/api/items/:id",
          "protocol": "http",
          "host": [
            "localhost"
          ],
          "port": "8080",
          "path": [
            "api",
            "items",
            ":id"
          ],
          "variable": [
            {
              "key": "id",
              "value": "1"
            }
          ]
        }
      },
      "response": []
    }
  ]
}```
