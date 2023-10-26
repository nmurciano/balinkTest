import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import PostDetails from "./pages/postDetails";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/post/:id" Component={PostDetails} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
