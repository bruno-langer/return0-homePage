import styled from "styled-components";
import LogoGroup from "../img/return0-logo.png";

interface groupProps {
  id: string;
}

const Wrap = styled.div`
  display: flex;
  margin: 3rem 8rem;
`;

const Img = styled.img`
  width:200px;
`;
export default function Group({ id }: groupProps) {
  return (
    <Wrap id={id}>
      <div style={{ flex: "1" }}>
        <h1>Sobre o Grupo</h1>
        <p>Grupo composto por 5 integrantes, Bruno Langer, Josué Laurindo, Julio Cesar, Kleber Keuer e Thuany de Souza. Inicialmente a junção do grupo se deu por sorteio e continuou na segunda etapa do projeto.</p>
        <p> Os participantes tem uma média de idade de 21 anos e todos já trabalham na área de TI ou afins, mas com conhecimentos básicos sobre programação e desenvolvimento web. O projeto se chama Return 0 com o objetivo de não retornar erros ao longo do processo, fazendo uma referência a linguagem C.</p>
      </div>
      <div style={{width:"30vw",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"1vw"}}>
      <Img src={LogoGroup} alt="" />
      </div>
    </Wrap>
  );
}
