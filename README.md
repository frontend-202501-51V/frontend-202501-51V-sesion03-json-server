# Sesion 03

## Instalacion de `json-server`

- lo pueden realizar de forma global: `npm install --global json-server` para reutilizarlo en muchos proyectos
- o sino puedes usarlo en forma local usando scripts npm

1. crear el package.json + copiar el contenido
2. crear el db.json
3. crear start.js (el servidor nodejs)

## db.json

- generar la estructura del servidor falso (mock server)
- se va a declarar las entidades (representaciones de objetos de la vida real o ficticios o virtuales, etc)
  - entidades: users / products /  orders / order_items

- RECORDANDO: JSON usa key (llave) / value (valor) separado por dos puntos y por comas

## comandos indispensables de json-server

- cambiar el puerto

```shell
json-server --watch db.json --port 4000
```

- anadir un retraso en las respuestas (ms) - emular alguna red lenta

```shell
json-server --watch db.json --delay 2000
```

- usar otro archivo como base de datos

```shell
json-server --watch db-update.json
```

## Desafío 1: Ampliación de datos (5 min)

Mejora el archivo `db-update.json` para incluir:

1. Al menos 3 productos más con diferentes categorías
2. Un nuevo usuario con rol "manager"
3. Una nueva orden con múltiples productos
4. Un recurso nuevo llamado `categories` con al menos 3 categorías
5. screenshots
