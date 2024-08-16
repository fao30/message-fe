import React from "react";
import MessageList from "../../widgets/MessageList";
import MessageInput from "../../widgets/MessageInput";
import { Container, Paper, Typography } from "@mui/material";

const MessagesPage = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ padding: 2 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Messages
        </Typography>
        <MessageList />
        <MessageInput />
      </Paper>
    </Container>
  );
};

export default MessagesPage;
