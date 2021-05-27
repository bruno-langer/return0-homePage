import { ReactNode } from "react";
import styled from "styled-components";

interface memberProps {
  name: string;
  description: string;
  img: string;
}



const WrapMember = styled.div`
  background-color: #292929;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  max-width: 30vw;
  height: 12vh;
  padding: 0.3rem;
  color: white;
  border-radius: 0.5rem;
  box-shadow: 20px 20px 60px #101010, -20px -20px 60px #6a6a6a33;
  font-size: 0.8rem;
  margin: 1rem;
  /* border:solid 1px white; */
`;

const PersonIcon = styled.img`
  height: 90%;
  border-radius: 50%;
  /* object-fit: contain; */
`;

const WrapText = styled.aside`
  max-width: 70%;
  max-height: 90%;

  strong{
      font-size:1.1rem
  }
`;
export default function Member({ name, description, img }: memberProps) {
  return (
    <WrapMember>
      <PersonIcon src={img} alt="" />
      <WrapText>
        <strong>{name}</strong>
        <p>{description}</p>
      </WrapText>
    </WrapMember>
  );
}
