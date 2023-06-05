const fastify = require('fastify');
const server = fastify({ logger: true });

server.register(require('@fastify/formbody'));

// Swagger
// server.register(require('fastify-swagger'), {
//     exposeRoute: true,
//     routePrefix: '/docs',
//     swagger: {
//         info: { title: 'fastify-api' },
//     },
// });

// Routes
const heroesRoutes = require('./routes/heroesRoutes');
server.register(heroesRoutes, { prefix: '/heroes' });

server.listen({
    port: process.env.PORT || 3000,
});