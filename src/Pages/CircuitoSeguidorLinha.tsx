import { useState } from "react";
import styled from "styled-components";
import CircuitoSegueLinhaImage from "../img/circuitoSegueLinha.png";

interface circuitoSeguidorLinhaProps {
  id: string;
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 7rem;
  padding: 2rem;
  border-radius: 1rem;
  transition: box-shadow 0.3s, height .5s;
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
}: circuitoSeguidorLinhaProps) {
  const [open, setopen] = useState(false);

  const materials: { name: string; description: string }[] = [
    {
      name: "Fotorresistor",
      description:
        "Um fotorresistor pode ser usado para a construção de sensores de luminosidade, controle de flashs de câmeras, alarmes, controle de lâmpadas, entre outros projetos que interagem com luz",
    },
    {
      name: "Motor CC",
      description:
        "O motor de corrente contínua é uma máquina elétrica que transforma energia elétrica em energia mecânica. O motor CC funciona a partir do princípio da atração e repulsão de campos eletromagnéticos, tem por função mover o robô",
    },
    {
      name: "Acionador de motor de ponte H",
      description:
        "O Acionador de motor de ponte H tem como principal função o controle de velocidade e sentido de motores DC, podendo também ser usado para controle da saída de um gerador DC ou como inversor monofásico",
    },
    {
      name: "Arduino",
      description:
        "Arduino é uma placa de desenvolvimento open source, cuja função é tornar pequenos projetos possíveis. Possui incorporado na placa um microcontrolador, que é programado com a linguagem C++, entradas digitais e analógicas, saídas digitais e saídas PWM que permitem o controle de atuadores e a leitura de sensores.",
    },
  ];

  const materialList = materials.map((material, key) => {
    return (
      <div>
        <strong>{material.name}</strong>
        <p>{material.description}</p>
      </div>
    );
  });

  return (
    <Wrap
      id={id}
      onClick={() => {
        setopen(!open);
      }}
    >
      <div style={{ display: "flex" }}>
        <div style={{ flex: "1" }}>
          <h1>Circuito do Robô Seguidor de Linha</h1>
          <p>
            {" "}
            Robôs seguidores de linha são robôs programados para, através da
            leitura de sensores, detectar e seguir um caminho. Estes robôs são
            colocados a prova em que visam o melhor desenvolvimento desses
            robôs, colocando-os para disputar corridas em pistas criadas pelos
            organizadores das competições.
          </p>{" "}
          <p>
            {" "}
            O circuito desenvolvido para o robô foi Simulado com o Thinkercard,
            ferramenta mantida gratuitamente pela Autodesk. O circuito utiliza
            varios componentes eletrônicos, que juntos são capazes de seguir o
            percurso.
          </p>
        </div>
        <Img src={CircuitoSegueLinhaImage} alt="circuitoSegueLinha" />
      </div>
      
      {!open ? <strong>Clique para ver detalhes</strong> : null}
      {open ? materialList : null}
    </Wrap>
  );
}
