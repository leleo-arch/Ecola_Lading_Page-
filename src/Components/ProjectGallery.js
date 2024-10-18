import styled, { keyframes } from 'styled-components';
import backgroundImg from '../assets/depoimentos.png';  // Importa a imagem de fundo

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
background-image: url(${backgroundImg});  // Define a imagem de fundo
  background-size: cover;  // Faz com que a imagem cubra todo o contêiner
  background-position: center;  // Centraliza a imagem
  background-repeat: no-repeat;  // Evita que a imagem se repita  justify-content: center;
  padding: 300px 20px;
  overflow-y: 10px;
  background-color: white;
  text-align: center;
  animation: ${fadeIn} 1s ease forwards;
`;

const TechItem = styled.div`
   
`;


const technologies = [
  { name: 'Atividades Extracurriculares Inclusas', txt: 'Cursos de Inglês, Libras, Robótica, Inteligência Emocional, Capoeira e dança, sem custo adicional.', icon: 'https://img.icons8.com/color/48/000000/html-5.png' },
  { name: 'Acolhimento e Desenvolvimento Infantil',txt: 'Sensibilização musical e massagem Shantala para bebês.', icon: 'https://img.icons8.com/color/48/000000/css3.png' },
  { name: 'Ambiente Seguro e Personalizado', txt: 'Para crianças de 0 a 5 anos, com foco em pais que trabalham fora ou home office, garantindo um espaço seguro, acolhedor e inovador.', icon: 'https://img.icons8.com/color/48/000000/javascript.png' },
];

const Technologies = () => (
  <TechnologiesWrapper id="technologies">
    {technologies.map((tech, index) => (
        <TechItem key={index} index={index}>

        </TechItem>
      ))}

  </TechnologiesWrapper>
);

export default Technologies;
