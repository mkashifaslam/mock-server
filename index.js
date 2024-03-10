const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const jsonParser = require('./json-parser');

server.use(jsonServer.bodyParser)
server.use(middlewares);

server.use(jsonServer.rewriter({'/api/v1/*': '/$1'}));
jsonParser(server);

server.listen(5001, () => {
  console.log('JSON Server is running!');
});
