'use strict';

const routes = require('./routes');
const Hapi = require('hapi');


const server = Hapi.server({
    port: 3000,
    host: 'localhost'
});

const init = async () => {

  await server.register({
          plugin: require('hapi-pino'),
          options: {
              prettyPrint: true,
              logEvents: ['response', 'onPostStart']
          }
      });
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();

server.route(routes);
