import React, { useEffect } from 'react';

// This is a React functional component that will connect to the WebSocket server when it is mounted and send a message to the server.

const WebSocketClient: React.FC = () => {
  useEffect(() => {
    console.log('WebSocketClient mounted');

    const socket = new WebSocket('ws://localhost:7000');

    socket.addEventListener('open', () => {
      console.log('WebSocket is connected.');
      socket.send('(from Client end:) Hello Server!');
    });

    socket.addEventListener('message', (event) => {
      console.log('Message from server: ', event.data);
    });

    socket.addEventListener('close', (event) => {
      console.log('WebSocket connection closed', event);
    });

    socket.addEventListener('error', (event) => {
      console.error('WebSocket error', event);
    });
    
    // Clean up the WebSocket connection when the component is unmounted:
    return () => {
      if (socket.readyState === WebSocket.OPEN || socket.readyState === WebSocket.CLOSING) { // Check if the WebSocket connection is open or closing
        socket.close(); // Close the WebSocket connection
      }
    };
    
  }, []);

  return null; // This component doesn't render anything visible
};

export default WebSocketClient;


/*
Four states of socket.readyState:
WebSocket.CONNECTING (0): The connection is not yet open.
WebSocket.OPEN (1): The connection is open and ready to communicate.
WebSocket.CLOSING (2): The connection is in the process of closing.
WebSocket.CLOSED (3): The connection is closed or couldn't be opened.
*/