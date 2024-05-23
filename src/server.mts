import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    console.log('received: %s', message);
  });

  ws.send('Hello! Message from server!!');
});


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