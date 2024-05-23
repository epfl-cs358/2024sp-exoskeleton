import React, { useEffect } from 'react';

const WebSocketClient: React.FC = () => {
  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080');

    socket.addEventListener('open', (event) => {
      console.log('WebSocket is connected.');
      socket.send('(from Client end:) Hello Server!');
    });

    socket.addEventListener('message', (event) => {
      console.log('Message from server', event.data);
    });

    return () => {
      socket.close();
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default WebSocketClient;
