async function routes(fastify, options) {
    fastify.get("/", async (req, reply) => {
        return reply.view("index", {});
    });
    fastify.get("htmx", async (req, reply) => {
        return reply.view("htmx", {});
    });
    fastify.post("clicked", async (req, reply) => {
        return reply.view("htmx", {});
    });
}

module.exports = routes;
