import React from 'react';
import styled, { keyframes } from 'styled-components';
import backgroundImg from '../assets/home.png';  // Importa a imagem de fundo
import Git from "../assets/hub.png";
import Linkedin from "../assets/hub.png";

const HeaderWrapper = styled.header`
  text-align: center;
  padding: 50px 0;
  width: 100%;
  color: white;

  @media screen and (max-width: 900px) {
    padding: 1px 0;
    margin-top: 100px;
  
    width: 130%;
    margin-left: 200px;


  }
`;


const Nav = styled.nav`
  margin-top: 40px;
  display: flex;
  margin-right: 40px;
  justify-content: end;
  align-items: end;
  overflow-x: auto; 
  white-space: nowrap; 
  @media screen and (max-width: 900px) {
    margin-top: 20px;
    padding: 10px;
    margin-right: -40px;
    overflow-y: auto;

  }
`;

const NavLink = styled.a`
  margin: 0 10px;
  text-decoration: none;
  color: white;
  font-size: 1em;
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


const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(21px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AboutWrapper = styled.section`
  padding: 120px 30px;
margin-top:-180px;
  background-image: url(${backgroundImg});  // Define a imagem de fundo
  background-size: cover;  // Faz com que a imagem cubra todo o contêiner
  background-position: center;  // Centraliza a imagem
  background-repeat: no-repeat;  // Evita que a imagem se repita  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  animation: ${fadeIn} 1s ease forwards;
  display: flex;
justify-content: start;
align-items: end;
`;

const Title = styled.h2`

  font-size: 2.5em;
  color: #fff;
  margin-bottom: 20px;
  width: 50%;
  @media (max-width: 768px) {
    width: 80%;
    margin-right: 30px;
  }
  
  @media (max-width: 480px) {
    width: 80%;
    margin-right: 30px;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2em;
  color: #fff;
  max-width: 800px;
  line-height: 1.6;
  width: 50%;
  @media (max-width: 768px) {
    width: 80%;
    margin-right: 30px;
  }
  
  @media (max-width: 480px) {
    width: 80%;
    margin-right: 30px;
  }
`;

const Button = styled.a`
  background: linear-gradient(270deg, #6978D1 0%, #6978D1 66.67%, #945DD6 100%);
  width: 50%;
  border-radius: 25px;
  height: 50px;
  margin-left: 10px;
  color: white;
  font-size: 15px;
  margin-top: 10px;
  text-align: center;
  line-height: 50px;
  text-decoration: none;
  color: white;
  
  &:hover {
    background: linear-gradient(270deg, #13ADC7 0%, #6978D1 80%, #945DD6 120%);
  }
  @media (max-width: 768px) {
    width: 80%;
    margin-right: 30px;
  }
  
  @media (max-width: 480px) {
    width: 80%;
    margin-right: 30px;
  }
`;


const AboutMe = () => (

  <AboutWrapper id="about">
    
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
    <Title>Educação Inclusiva e Personalizada para o Futuro do Seu Filho!</Title>
    <Subtitle>
    Matrículas abertas para crianças de 0 a 5 anos. Educação especial, atividades extracurriculares e acolhimento para todos.</Subtitle>
    <Button href="https://api.whatsapp.com/send?phone=5511984858586&text=Sinta-se%20%C3%A0%20vontade%20para%20me%20enviar%20uma%20mensagem!%0A%0A">Garanta a Vaga do seu Filho</Button>
    </AboutWrapper>
);

export default AboutMe;


