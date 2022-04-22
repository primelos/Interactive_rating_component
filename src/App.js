import { useState } from "react";
import styled from "styled-components";

import "./App.css";
import React from "react";
import MyRoutes from "./routes/routing";

function App() {
  const [rating, setRating] = useState(0);

  return (
    <Container className="App">
      <MyRoutes rating={rating} setRating={setRating} />
    </Container>
  );
}

export default App;

const Container = styled.div`
  background-color: #141519;
  height: 100vh;
  color: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
`;
