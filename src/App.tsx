import React from "react";
import Header from "./Components/Frames/Header";
import Footer from "./Components/Frames/Footer";
import Robotica from "./Pages/Robotica";
import SeguidorLinha from "./Pages/SeguidorLinha";
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
        <Robotica id="robotica" />
        <SeguidorLinha id="projeto" />
        <Robotica />
        <Robotica />
        <Robotica />
        <Robotica />
        <Robotica />
        <Robotica id="arduino" />
        <Robotica />
        <Robotica />
        <Robotica />
        <Robotica />
        <Robotica />
        <Footer />
      </MainContent>
    </>
  );
}

export default App;



// N2 - Descrição das atividades e avaliação: 
//  OK  1. Logo do grupo e nome do grupo. (1,0)
// NOK  2. Integrantes dos grupo. (1,0)
// NOK  3. Uma introdução sobre o grupo. (2,0)
// NOK  4. Vídeo institucional por que robótica na TI?
//         (Tem que ter com uma breve explicação do trabalho) (2,0)
// NOK  5. Projeto desenvolvido do Tinkercad sobre o seguidor de linha.
//         (Tem que ter uma breve explicação do projeto) (2,0)
// NOK  6. Avaliação do desenvolvimento do Website (2,0)

