import styled from "styled-components";
import { ReactComponent as Logo } from "../../img/nav-logo.svg";
import Thuany from "../../img/thuany.png";
import Langer from "../../img/langer.jpg";
import Kleber from "../../img/kleber.png";
import Josue from "../../img/josue.png";
import Julio from "../../img/julio.png";
import Member from "./Member";

const WrapFooter = styled.footer`
  background-color: #232323;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const GridMembers = styled.div`
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`;

export default function () {
  return (
    <WrapFooter>
      <GridMembers>
        <Member
          name="Thuany Souza"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
          img={Thuany}
        />
        <Member
          name="Josué Laurindo"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
          img={Josue}
        />
        <Member
          name="Kleber Keuze"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
          img={Kleber}
        />
        <Member
          name="Bruno Langer"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
          img={Langer}
        />
        <Member
          name="Julio Marcon"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
          img={Julio}
        />
      </GridMembers>
      <Logo fill="white" />
    </WrapFooter>
  );
}
