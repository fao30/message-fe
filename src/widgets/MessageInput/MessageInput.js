import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { postMessage } from "../../shared/api/api";
import { TextField, Button } from "@mui/material";

const MessageInput = () => {
  const [content, setContent] = useState("");
  const queryClient = useQueryClient();
  const mutation = useMutation(postMessage, {
    onSuccess: () => {
      queryClient.invalidateQueries("messages");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content) {
      mutation.mutate(content);
      setContent("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Enter your message"
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Send
      </Button>
    </form>
  );
};

export default MessageInput;
