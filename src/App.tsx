import React from "react";
//routing
//@ts-ignore
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//styles
import { GlobalStyle } from "./GlobalStyle";

//Components
import Header from "./components/Header";
import Home from "./components/home";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";

const App: React.FC = () => (
  <Router>
    <Header />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:movieId" element={<Movie />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
    <GlobalStyle />
  </Router>
);

export default App;
