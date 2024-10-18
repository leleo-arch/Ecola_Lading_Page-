import styled from 'styled-components';
import Git from "../assets/hub.png";
import Linkedin from "../assets/Linkedin.png";

const HeaderWrapper = styled.header`
  text-align: center;
  padding: 50px 0;
  width: 100%;
  background-color: #0F1624;
  color: white;

  @media screen and (max-width: 900px) {
    padding: 11px 0;
  }
`;




const Nav = styled.nav`
  margin-top: 40px;
  display: flex;
  margin-right: 50px;
  justify-content: end;
  align-items: end;
  overflow-x: auto; 
  white-space: nowrap; 
  @media screen and (max-width: 900px) {
    margin-top: 20px;
    padding: 10px;
  }
`;

const NavLink = styled.a`
  margin: 0 10px;
  text-decoration: none;
  color: white;
  font-size: 1.1em;
  transition: color 0.3s;

  &:hover {
    color: #61dafb;
  }

  @media screen and (max-width: 375px) {
    margin: 0 10px;
    font-size: 0.8em;
  }
`;

const NavLink2 = styled.a`
  margin: 0 5px;
  text-decoration: none;
  color: white;
  font-size: 1em;
  transition: color 0.3s;

  &:hover {
    color: #61dafb;
  }

  @media screen and (max-width: 375px) {
    font-size: 0.9em;
  }
`;

const Image = styled.img`
  width: 20px;
  height: 20px;

  @media screen and (max-width: 375px) {
    width: 20px;
    height: 20px;
  }
`;

const Header = () => (
  <HeaderWrapper id="Nav">

    <Nav>
    <NavLink2 href="https://github.com/leleo-arch">
        <Image src={Git} alt="GitHub" />
      </NavLink2>
      <NavLink2 href="https://www.linkedin.com/in/leonardo-soares-1842b32b0/">
        <Image src={Linkedin} alt="LinkedIn" />
      </NavLink2>
      <NavLink href="#projects">Início</NavLink>
      <NavLink href="#about">Escola</NavLink>
      <NavLink href="#contact">Diferenciais</NavLink>
      <NavLink href="#technologies">Cursos e Atividades</NavLink>
      <NavLink href="#technologies">Depoimentos</NavLink>
      <NavLink href="#technologies">Matriculas</NavLink>
      <NavLink href="#technologies">Contato</NavLink>

     
    </Nav>
  </HeaderWrapper>
);

export default Header;
