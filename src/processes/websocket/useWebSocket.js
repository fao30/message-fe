import { useEffect } from "react";

export const useWebSocket = (onMessage) => {
  useEffect(() => {
    const socket = new WebSocket("ws://" + process.env.REACT_APP_WS);

    socket.onopen = () => {
      console.log("Connected to WebSocket server");
    };

    socket.onmessage = (event) => {
      const newMessage = JSON.parse(event.data);
      onMessage(newMessage);
    };

    socket.onclose = () => {
      console.log("Disconnected from WebSocket server");
    };

    return () => {
      socket.close();
    };
  }, [onMessage]);
};
