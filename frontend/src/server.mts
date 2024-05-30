import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 3001 });

// logs are printed in the terminal where I run the server

wss.on('connection', (ws) => {
  console.log('Client connected');

  ws.on('message', (message) => {
    console.log('received: %s', message);
  });

  ws.send('Hello! Message from server!!');

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

wss.on('listening', () => {
  console.log('WebSocket server is listening on ws://localhost:3001');
});

/*
two instances:
[0] npm run dev:next exited with code 1    (for next dev server)
[1] npm run dev:ws exited with code 1    (for node --loader ts-node/esm src/server.mts server)
*/

// // import * as WebSocket from 'ws';
// // import Server from 'ws';
// import { WebSocket } from 'ws';

// const wss = new WebSocket.Server({ port: 8080 });
// // const wss = new Server({ port: 8080 });

// wss.on('connection', (ws: WebSocket) => {
//   ws.on('message', (message: String) => {
//     console.log('received: %s', message);
//   });

//   ws.send('Hello! Message from server!!');
// });



// import * as http from 'http';

// // const http = require('http');

// const httpserver = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
//     console.log("Request received");
// });



// httpserver.listen(8080, () => {
//     console.log('Server is listening on port 8080');
// });