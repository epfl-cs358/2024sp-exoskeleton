// Code for the withWebSocket HOC (Higher Order Component) that will be used to wrap the components that need to communicate with the WebSocket server

import React from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket'; // import the useWebSocket hook from the react-use-websocket library

interface WebSocketProps {
  sendMessage: (message: string) => void;
  lastMessage: string | null;
  connectionStatus: ReadyState;
}

// This is your WebSocket server URL
const SOCKET_URL = 'ws://localhost:3001'; // this is the URL of the WebSocket server (server-side for the WebSocket communication), not for the Next.js server (client-side for the WebSocket communication)

// This is the HOC
export function withWebSocket<P extends object>(WrappedComponent: React.ComponentType<P & WebSocketProps>) {
  return function WrappedWithWebSocket(props: P) {
    const {
      sendMessage,
      lastMessage,
      readyState,
    } = useWebSocket(SOCKET_URL);

    return (
      <WrappedComponent
        {...props}
        sendMessage={sendMessage}
        lastMessage={lastMessage ? lastMessage.data : null}
        connectionStatus={readyState}
      />
    );
  };
}