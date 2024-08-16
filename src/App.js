import React from "react";
import MessageList from "./components/MessageList";
import MessageInput from "./components/MessageInput";
import { QueryClient, QueryClientProvider } from "react-query";
import { Container, Paper, Typography } from "@mui/material";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ padding: 2 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Messages
          </Typography>
          <MessageList />
          <MessageInput />
        </Paper>
      </Container>
    </QueryClientProvider>
  );
}

export default App;
