import { useState } from "react";
import styled from "styled-components";
import ArduinoIDE from "../img/arduinoIDE.png";

interface programaSeguidorLinhaProps {
  id: string;
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
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
`;

export default function CircuitoSeguidorLinha({
  id,
}: programaSeguidorLinhaProps) {
  const [open, setopen] = useState(false);

  return (
    <Wrap
      id={id}
      onClick={() => {
        setopen(!open);
      }}
    >
      <div style={{ display: "flex" }}>
        <div style={{ flex: "1" }}>
          <h1>Programa do Robô Seguidor de Linha</h1>
          <p>
            Para o desenvolvimento deste projeto será utilizada a IDE do arduino
            para o código.
            <br /> O algoritmo básico para a movimentação dos carros se baseia
            na leitura dos sensores e no acionamento, preferencialmente por um
            algoritmo PID, dos motores <br /> O Controle dos motores é feito por
            PWM ( 
            <a href="https://en.wikipedia.org/wiki/Pulse-width_modulation">
              Veja mais PWM )
            </a>{" "}
            através da modulção na ponte H, controlando os dois motores
            responsáveis por mover e girar o robô
          </p>
        </div>
        <Img src={ArduinoIDE} alt="editor de código arduino" />
      </div>
    </Wrap>
  );
}
