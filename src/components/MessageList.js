import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { fetchMessages } from "../api/api";
import { List, ListItem, ListItemText, CircularProgress } from "@mui/material";

const MessageList = () => {
  const { data, isLoading } = useQuery("messages", fetchMessages);
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    if (data) {
      setDisplayData(data);
    }
  }, [data]);

  useEffect(() => {
    const socket = new WebSocket("ws://" + process.env.REACT_APP_WS);

    socket.onopen = () => {
      console.log("Connected to WebSocket server");
    };

    socket.onmessage = (event) => {
      const newMessage = JSON.parse(event.data);

      setDisplayData((prev) => {
        const updatedData = [...prev];
        if (updatedData.length >= 9) {
          updatedData.shift();
        }
        updatedData.push(newMessage);
        return updatedData;
      });
    };

    socket.onclose = () => {
      console.log("Disconnected from WebSocket server");
    };

    return () => {
      socket.close();
    };
  }, []);

  if (isLoading) return <CircularProgress />;

  return (
    <List>
      {displayData?.map((message) => (
        <ListItem key={message?.id} divider>
          <ListItemText primary={message?.content} />
        </ListItem>
      ))}
    </List>
  );
};

export default MessageList;
