import React from 'react';
import styled, { keyframes } from 'styled-components';

// Importando os ícones locais
import whatsappIcon from '../assets/1.png'; // Caminho do ícone do WhatsApp
import emailIcon from '../assets/2.png'; // Caminho do ícone de Email
import locationIcon from '../assets/3.png'; // Caminho do ícone de localização

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const TechnologiesWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: -10px;
  padding: 30px 20px;
  background-color: #e8e8e8;
  text-align: center;
  animation: ${fadeIn} 1s ease forwards;
`;

const Title = styled.h4`
  font-size: 2.5em;
  color: black;
`;

const Title2 = styled.h1`
  font-size: 2.5em;
  color: #945DD6;
  margin-bottom: -30px;
`;

const TechGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TechItem = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 1px 1px black;
  transition: transform 0.3s, box-shadow 0.3s;
  width: 300px;
  text-align: center;
  animation: ${fadeIn} 0.5s ease forwards;
  animation-delay: ${(props) => props.index * 0.1}s;

  &:hover {
    transform: translateY(-10px) scale(1.05);
    box-shadow: 0 4px 16px rgba(69, 212, 255, 0.7);
  }
`;

const TechIcon = styled.img`
  max-width: 100%;
  height: auto;
`;

const TechName = styled.p`
  font-size: 1.5em;
  color: black;
`;

const TechName2 = styled.p`
  font-size: 1em;
  color: black;
`;

const Pi = styled.p`
  font-size: 1.1em;
  color: black;
`;

const technologies = [
  { 
    name: 'Contato e Whatsapp', 
    txt: 'Telefone: (11) 98485-8586', 
    icon: whatsappIcon // Ícone do WhatsApp local
  },
  { 
    name: 'Email de Contato', 
    txt: 'estacaodopensar@contato.com', 
    icon: emailIcon // Ícone de Email local
  },
  { 
    name: 'Localização', 
    txt: 'Rua Templários, 167 - Vila Formosa', 
    icon: locationIcon // Ícone de localização local
  }
];

const Technologies = () => (
  <TechnologiesWrapper id="technologies">
    <Title2>Nosso contato</Title2>
    <Title>Endereço de contato rápido</Title>
    <TechGrid>
      {technologies.map((tech, index) => (
        <TechItem key={index} index={index}>
          <TechIcon src={tech.icon} alt={tech.name} />
          <TechName>{tech.name}</TechName>
          <TechName2>{tech.txt}</TechName2>
        </TechItem>
      ))}
      <Pi>Horário de Funcionamento: Segunda a sexta, das 7h às 19h, ideal para pais que trabalham fora ou em home office.</Pi>
    </TechGrid>
  </TechnologiesWrapper>
);

export default Technologies;
