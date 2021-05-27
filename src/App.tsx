import React from "react";
import Header from "./Components/Frames/Header";
import Footer from "./Components/Frames/Footer";
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
        <Footer/>
      </MainContent>
    </>
  );
}

export default App;



// [19:18] DANIEL MANIGLIA AMANCIO DA SILVA
// N2 - Descrição das atividades e avaliação: 

// [19:20] DANIEL MANIGLIA AMANCIO DA SILVA
// 1. Logo do grupo e nome do grupo. (1,0)

// [19:20] DANIEL MANIGLIA AMANCIO DA SILVA
// 2. Integrantes dos grupo. (1,0)

// [19:20] DANIEL MANIGLIA AMANCIO DA SILVA
// 3. Uma introdução sobre o grupo. (2,0)

// [19:20] DANIEL MANIGLIA AMANCIO DA SILVA
// 4. Vídeo institucional por que robótica na TI?
// (Tem que ter com uma breve explicação do trabalho) (2,0)

// [19:21] DANIEL MANIGLIA AMANCIO DA SILVA
// 5. Projeto desenvolvido do Tinkercad sobre o seguidor de linha.
// (Tem que ter uma breve explicação do projeto) (2,0)

// [19:21] DANIEL MANIGLIA AMANCIO DA SILVA
// 6. Avaliação do desenvolvimento do Website (2,0)

