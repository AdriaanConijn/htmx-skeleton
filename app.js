const fastify = require("fastify");
const fastifyView = require("@fastify/view");
const path = require("path");

function build(opts = {}) {
    const app = fastify(opts);

    app.register(require("@fastify/static"), {
        root: path.join(__dirname, "public"),
        prefix: "/public/",
    });

    app.register(require("@fastify/formbody"));
    app.register(fastifyView, {
        engine: {
            pug: require("pug"),
        },
        root: path.join(__dirname, "views"),
    });

    app.register(require("./routes/index"), { prefix: "/" });

    return app;
}

module.exports = build;
