import { link } from "fs";
import { useEffect, useState } from "react";
import styled from "styled-components";
import LogoImage from "../../img/nav-logo.svg";

interface headerProps {}

const WrapHeader = styled.header`
  /* top: 0;
  position: sticky; */
  display: flex;
  flex-direction: column;
  height: 11vh;
  background-color: #e4e4e4;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.3);
`;
const LogoWrap = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  & img {
    width: 7rem;
  }
`;
const LinksWrap = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const LinksHeader = styled.a`
  cursor: pointer;
  font-size: 1.5rem;
  width: 30%;
  text-align: center;
  transition: font-size 0.2s;

  &:hover {
    font-size: 1.8rem;
    font-weight: bold;
  }
`;

const LinearBar = styled.div<{ percent: number }>`
  position: absolute;
  height: 0.4rem;
  width: ${({ percent }) => percent}%;
  background-color: #232323;
  border-radius: ${({ percent }) => (percent > 99 ? "0" : "0px 10px 10px 0px")};
`;

export default function Header({}: headerProps) {
  const [scroll, setScroll] = useState(0);

  function ScrollScreen(path: string) {
    document
      .getElementById(path)
      ?.scrollIntoView({ block: "center", behavior: "smooth" });
  }

  useEffect(() => {
    const mainContent = document.getElementById("main-content");
    console.log(mainContent);

    if (mainContent) {
      mainContent.onscroll = () => {
        const winScroll =
          mainContent.scrollTop || document.documentElement.scrollTop;
        const height = mainContent.scrollHeight - mainContent.clientHeight;
        setScroll((winScroll / height) * 100);
      };
    }
  }, []);

  const links = [
    {
      title: "O Grupo",
      path: "group",
    },
    {
      title: "Robótica e TI",
      path: "robotica",
    },
    {
      title: "Circuito Robô",
      path: "circuit",
    },
    {
      title: "Programa Robô",
      path: "program",
    },
  ];

  return (
    <WrapHeader>
      <LinearBar percent={scroll} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flex: "1",
        }}
      >
        <LogoWrap>
          <img src={LogoImage} alt="logo - return zero" />
        </LogoWrap>
        <LinksWrap>
          {links.map((a, key) => {
            return (
              <LinksHeader onClick={() => ScrollScreen(a.path)} key={key}>
                {a.title}
              </LinksHeader>
            );
          })}
        </LinksWrap>
      </div>
    </WrapHeader>
  );
}
