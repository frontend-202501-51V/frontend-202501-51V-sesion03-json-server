// Configuración básica personalizada para json-server
const jsonServer = require('json-server'); // obtener el paquete json-server
const server = jsonServer.create(); // creo una instancia del paquete json-server
const router = jsonServer.router('db.json'); // le indico donde estan declaradas las rutas(representaciones)
const middlewares = jsonServer.defaults(); // exponer el servidor en red local, recibir informacion

// Puerto en el que se ejecutará el servidor
const PORT = 3000;

// Usar los middlewares predeterminados (logger, static, cors y no-cache)
server.use(middlewares);

// Añadir un mensaje personalizado antes de las solicitudes
server.use((req, res, next) => { // esta usando un arrow function ... ES6
  // req -> request (peticion)
  // res -> response (respuesta)
  // next -> function para indicar que se acabo la ejecución y continua con la siguiente

  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`); // 12:05:2021 10:23:00Z  GET /products
  next();
});

// Simular un retraso en las respuestas para un escenario más realista
server.use((req, res, next) => {
  setTimeout(next, 300); // Retraso de 300ms
});

// Middleware para verificar stock en caso de POST a orders
server.use((req, res, next) => {
  if (req.method === 'POST' && req.path === '/orders') { // quiere crear una nueva orden
    console.log('Verificando stock antes de crear orden...');
    // Aquí iría lógica real de verificación
  }
  next();
});

// Usar el enrutador automático
server.use(router); // aqui esta usando el

// templates multilinea
const template1 = `una sola linea`;
const template2 = `varias lineas
    aqui segunda linea
tercera linea

quintalinea
`;
// old way
const template3 = ' esta es la primera linea ' + '\n' + '  esta es la segunda linea ' + '\n' + 'tercera linea';


// Iniciar el servidor
server.listen(PORT, () => { // arrow function
  console.log(`
🚀 JSON Server está funcionando en http://localhost:${PORT}

Recursos disponibles:
  📋 http://localhost:${PORT}/users
  🛍️ http://localhost:${PORT}/products
  🧾 http://localhost:${PORT}/orders
  📦 http://localhost:${PORT}/order_items

📆📆📆📆📆📆📆📆📆📆📆📆📆📆📆

Prueba algunas rutas en tu navegador:
  http://localhost:${PORT}/products?category=electronics
  http://localhost:${PORT}/products?price_gte=500
  http://localhost:${PORT}/users?role=admin

¡Feliz desarrollo!
  `);
});
