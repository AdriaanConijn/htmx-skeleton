const server = require("./app")({
    logger: {
        level: "info",
    },
});

server.listen({ host: "127.0.0.1", port: 3000 }, (err, address) => {
    if (err) {
        server.log.error(err);
    }
    console.log(`Fastify is running on ${address}`);
});
