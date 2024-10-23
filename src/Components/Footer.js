import styled from 'styled-components';
import backgroundImg from '../assets/COMPLETO.png';  // Importa a imagem de fundo
import footerImg1 from '../assets/7.png';  // Primeira imagem do footer
import footerImg2 from '../assets/8.png';  // Segunda imagem do footer



const TechnologiesWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url(${backgroundImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 620px 100px;
  overflow-y: 10px;
  margin-top: 120px;
  text-align: center;
`;

const TechItem = styled.div`
  // Seu código existente
`;

const Footer = styled.footer`
  display: flex;
  justify-content: end;
  padding: 20px 50px;
  background-color: #8f00ff;
  margin-top: 50px;
  color: white;
  margin-bottom: -100px;
  margin-right: 1px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

const FooterImageLink = styled.a`
  margin-left: 20px;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const FooterImage = styled.img`
  max-width: 220px;
  height: 50px;

  @media (max-width: 768px) {
    max-width: 200px;
  }
`;

const P = styled.p`
  margin-right: 500px;

  @media (max-width: 768px) {
    margin-right: 0;
    text-align: center;
  }
`;

const technologies = [
  { name: 'Atividades Extracurriculares Inclusas', txt: 'Cursos de Inglês, Libras, Robótica, Inteligência Emocional, Capoeira e dança, sem custo adicional.', icon: 'https://img.icons8.com/color/48/000000/daycare.png' },
  { name: 'Acolhimento e Desenvolvimento Infantil', txt: 'Sensibilização musical e massagem Shantala para bebês.', icon: 'https://img.icons8.com/color/48/000000/children.png' },
  { name: 'Ambiente Seguro e Personalizado', txt: 'Para crianças de 0 a 5 anos, com foco em pais que trabalham fora ou home office, garantindo um espaço seguro, acolhedor e inovador.', icon: 'https://img.icons8.com/color/48/000000/daycare.png' },
];

const Technologies = () => (
  <>
    <TechnologiesWrapper id="depoimento">
      {technologies.map((tech, index) => (
        <TechItem key={index} index={index}>
          {/* Conteúdo de TechItem */}
        </TechItem>
      ))}
    </TechnologiesWrapper>

    <Footer>
      <P>2024 © Todos os direitos reservados por Agência ClickMint.</P>
      <FooterImageLink href="https://www.instagram.com/escolaestacaodopensar?igsh=MWRvdDQ5ZWZxNGJrNA==" target="_blank" rel="noopener noreferrer">
        <FooterImage src={footerImg1} alt="Footer Image 1" />
      </FooterImageLink>
      <FooterImageLink href="https://api.whatsapp.com/send?phone=5511984858586&text=" target="_blank" rel="noopener noreferrer">
        <FooterImage src={footerImg2} alt="Footer Image 2" />
      </FooterImageLink>
    </Footer>
  </>
);

export default Technologies;
