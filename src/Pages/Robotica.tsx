import styled from "styled-components";

interface roboticaProps {

    id?:string
}

const Iframe = styled.iframe`
  border-radius: 10px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.3);
`;

const Wrap = styled.div`
  display: flex;
  margin: 3rem 8rem;
`;

export default function Robotica({id}: roboticaProps) {
  return (
    <Wrap id={id}>
      <div style={{flex:"1"}}>
        <h1>Robótica na TI</h1>
        <p>Apresentação feita como primeira nota de PAC</p>
        <p>Aprofundamento do tema de Robótica aplicada na TI</p>
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
