import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { postMessage } from "../api/api";
import { TextField, Button, Box } from "@mui/material";

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
    <Box component="form" onSubmit={handleSubmit} display="flex" mt={2}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Enter your message"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary" sx={{ ml: 2 }}>
        Send
      </Button>
    </Box>
  );
};

export default MessageInput;
