import React from "react";
import Header from "./Components/Frames/Header";
import Robotica from "./Pages/Robotica";
import Arduino from "./Pages/Arduino";
import styled from "styled-components";

const MainContent = styled.div`
  height: 89vh;
  overflow-y: scroll;

  &::-webkit-scrollbar-thumb {
    background: #232323;
    border-radius: 1rem;
  }

  &::-webkit-scrollbar {
    width: 5px;
  }
`;

function App() {
  return (
    <>
      <Header />
      <MainContent id="main-content">
        <Robotica id="robotica"/>
        <Arduino />
        <Robotica />
        <Robotica />
        <Robotica />
        <Robotica />
        <Robotica />
        <Robotica id="arduino"/>
        <Robotica />
        <Robotica />
        <Robotica />
        <Robotica />
        <Robotica />
        <Robotica id="projeto" />
        <Robotica id="projeto" />
      </MainContent>
    </>
  );
}

export default App;
