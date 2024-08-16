import React from "react";
import MessagesPage from "../pages/MessagesPage";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MessagesPage />
    </QueryClientProvider>
  );
}

export default App;
