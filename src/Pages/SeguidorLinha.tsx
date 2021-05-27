import styled from "styled-components";
import CircuitoSegueLinhaImage from "../img/circuitoSegueLinha.png";

interface seguidorLinhaProps {
  id: string
}

const Wrap = styled.div`
  display: flex;
  margin: 3rem 8rem;
`;

const Img = styled.img`
  width: 560px;
`


export default function SeguidorLinha({ id }: seguidorLinhaProps) {
  return <Wrap id={id}>
    <div style={{ flex: "1" }}>
      <h1>Circuito do Robô Seguidor de Linha</h1>
      <p>Circuito Simulado com o Thinkercard</p>
      <p>O circuito utiliza um arduino como controlador do robô</p>
      <p>Para Leitura dos sinais, fotorresistores são utilizados</p>
    </div>
    <Img src={CircuitoSegueLinhaImage} alt="circuitoSegueLinha" />
  </Wrap>
}
