import styled from "styled-components";
import {ReactComponent as Logo} from "../../img/nav-logo.svg";
import Thuany from '../../img/thuany.jpeg'

const WrapFooter = styled.footer`
  background-color: #232323;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;



export default function () {
  return (
    <WrapFooter>
      <Logo fill="white" stroke="white"/>
    </WrapFooter>
  );
}
