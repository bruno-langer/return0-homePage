import styled from "styled-components";

interface roboticaProps {

  id?: string
}

const Iframe = styled.iframe`
  border-radius: 10px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.3);
`;

const Wrap = styled.div`
  display: flex;
  margin: 3rem 8rem;
`;

export default function Robotica({ id }: roboticaProps) {
  return (
    <Wrap id={id}>
      <div style={{ flex: "1" }}>
        <h1>Robótica na TI</h1>
        <p>O grupo desenvolveu um projeto chamado Return 0, onde consiste em entrevistar players do mercado de TI. </p>

        <p>O bate papo foi realizado com 3 profissionais da área.
Alexandre Vasques - CTO da HoloLab, Jean Grahl - Product Owner na Agapys Tecnologia e Marcelo Gramigna - Diretor da Associação Brasileira de Internet Industrial </p>
        <p>Temas como Industria 4.0, Robótica na TI e Inteligencia Artificial foram os destaques da conversa que você pode conferir no vídeo ao lado. </p>
      </div>
      <Iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/zx9zENYnuIU"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></Iframe>
    </Wrap>
  );
}
