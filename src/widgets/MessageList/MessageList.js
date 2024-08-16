import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { fetchMessages } from "../../shared/api/api";
import { useWebSocket } from "../../processes/websocket/useWebSocket";

const MessageList = () => {
  const { data, isLoading } = useQuery("messages", fetchMessages);
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    if (data) {
      setDisplayData(data);
    }
  }, [data]);

  useWebSocket((newMessage) => {
    setDisplayData((prev) => {
      const updatedData = [...prev];
      if (updatedData.length >= 9) {
        updatedData.shift();
      }
      updatedData.push(newMessage);
      return updatedData;
    });
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <ul>
      {displayData?.map((message) => (
        <li key={message?.id}>{message?.content}</li>
      ))}
    </ul>
  );
};

export default MessageList;
