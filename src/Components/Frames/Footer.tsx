import styled from "styled-components";
import { ReactComponent as Logo } from "../../img/nav-logo.svg";
import Thuany from "../../img/thuany.png";
import Langer from "../../img/langer.jpg";
import Kleber from "../../img/kleber.png";
import Josue from "../../img/josue.png";
import Julio from "../../img/julio.png";
import Member from "./Member";

import { memberDescription } from "../../texts";

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

export default function Footer() {
  return (
    <WrapFooter>
      <GridMembers>
        <Member
          name="Bruno Langer"
          description={memberDescription.langer}
          img={Langer}
        />
        <Member
          name="Josué Laurindo"
          description={memberDescription.josue}
          img={Josue}
        />
        <Member
          name="Julio Marcon"
          description={memberDescription.julio}
          img={Julio}
        />
        <Member
          name="Kleber Keuze"
          description={memberDescription.kleber}
          img={Kleber}
        />
        <Member
          name="Thuany Souza"
          description={memberDescription.thuany}
          img={Thuany}
        />
      </GridMembers>
      <Logo fill="white" />
    </WrapFooter>
  );
}
