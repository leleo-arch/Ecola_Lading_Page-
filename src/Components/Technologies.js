import styled, { keyframes } from 'styled-components';

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
gap:-10px;
  padding: 30px 20px;
  background-color: white;
  text-align: center;
  animation: ${fadeIn} 1s ease forwards;
`;

const Title = styled.h4`
  font-size: 2.5em;
  color: black;
  margin-bottom: 10px;
`;

const Title2 = styled.h1`
  font-size: 2.5em;
  color: #945DD6;
  margin-bottom: 10px;
`;

const P = styled.p`
  font-size: 1.3em;
  color: #945DD6;
  margin-bottom: 20px;
  width: 40%;
  margin-left: 350px;
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
    background: linear-gradient(270deg, #945DD6  0%, #6978D1 80%, #945DD6 120%);
    border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 8px rgb(255, 255, 255);
  transition: transform 0.3s, box-shadow 0.3s;
  width: 190px;
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
  margin-bottom: 10px;
`;

const TechName = styled.p`
  font-size: 1.5em;
  color: white;
`;

const TechName2 = styled.p`
  font-size: 1em;
  color: white;
`;

const technologies = [
  { name: 'Atividades Extracurriculares Inclusas', txt: 'Cursos de Inglês, Libras, Robótica, Inteligência Emocional, Capoeira e dança, sem custo adicional.', icon: 'https://img.icons8.com/color/48/000000/html-5.png' },
  { name: 'Acolhimento e Desenvolvimento Infantil',txt: 'Sensibilização musical e massagem Shantala para bebês.', icon: 'https://img.icons8.com/color/48/000000/css3.png' },
  { name: 'Ambiente Seguro e Personalizado', txt: 'Para crianças de 0 a 5 anos, com foco em pais que trabalham fora ou home office, garantindo um espaço seguro, acolhedor e inovador.', icon: 'https://img.icons8.com/color/48/000000/javascript.png' },
];

const Technologies = () => (
  <TechnologiesWrapper id="technologies">
    <Title2>Acolhimento e Segurança em Cada Detalhe</Title2>
     <Title>Inclusão e Educação de Mãos Dadas</Title>
     <P>Tecnologias Assistivas para Apoiar Cada Criança.
     Desenvolvimento Completo para o Futuro!</P>
    
    <TechGrid>
      {technologies.map((tech, index) => (
        <TechItem key={index} index={index}>
          <TechIcon src={tech.icon} alt={tech.name} />
          <TechName>{tech.name}</TechName>
          <TechName2>{tech.txt}</TechName2>

        </TechItem>
      ))}
    </TechGrid>
  </TechnologiesWrapper>
);

export default Technologies;
