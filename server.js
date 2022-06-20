const http = require("http");

http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "application/json" });

    if (request.url === "/produto") {
      response.end("Rota do produto");
    }

    response.end(
      JSON.stringify({
        message: "Qualquer outra rota.",
      })
    );
  })
  .listen(4001, () => console.log("Server is running in the port 4001"));
