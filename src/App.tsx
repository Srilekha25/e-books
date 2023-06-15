import { useState } from "react";
import {QueryClient, QueryClientProvider, useQuery} from "@tanstack/react-query"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookCard from "./Components/BookCard/BookCard";
import Table from "./Components/Table/Table";

const queryClient = new QueryClient();
function App() {

  return (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Table/>} />
      <Route path="/BookCard/:id" element={<BookCard/>}/>
    </Routes>
    </BrowserRouter>
  </QueryClientProvider>
  )
}

export default App;
