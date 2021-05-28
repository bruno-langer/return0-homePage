import styled from "styled-components";
import CircuitoSegueLinhaImage from "../img/circuitoSegueLinha.png";

interface programaSeguidorLinhaProps {
  id: string
}

const Wrap = styled.div`
  display: flex;
  margin: 3rem 8rem;
`;

const Img = styled.img`
  width: 560px;
`


export default function CircuitoSeguidorLinha({ id }: programaSeguidorLinhaProps) {
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
