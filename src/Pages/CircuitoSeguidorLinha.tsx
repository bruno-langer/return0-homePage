import styled from "styled-components";
import CircuitoSegueLinhaImage from "../img/circuitoSegueLinha.png";

interface circuitoSeguidorLinhaProps {
  id: string
}

const Wrap = styled.div`
  display: flex;
  margin: 2rem 7rem;
  padding: 2rem;
  border-radius: 1rem;
  transition: box-shadow 0.3s;
  cursor: pointer;

  &:hover {
    box-shadow: 20px 20px 60px #cbcbcb, -20px -20px 60px #fdfdfd;
  }
`;

const Img = styled.img`
  width: 560px;
  border-radius: 2rem;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.1);

`


export default function CircuitoSeguidorLinha({ id }: circuitoSeguidorLinhaProps) {
  return <Wrap id={id}>
    <div style={{ flex: "1" }}>
      <h1>Circuito do Robô Seguidor de Linha</h1>
      <p>Circuito Simulado com o Thinkercard</p>
      <p>Para Leitura da linha, foram utilizados fotorresistores</p>
      <p>Para sinalização do comando atualmente sendo executado pelo robo, foi utilizado um led RGB</p>
      <p>O circuito utiliza um arduino como controlador do robô</p>
    </div>
    <Img src={CircuitoSegueLinhaImage} alt="circuitoSegueLinha" />
  </Wrap>
}
