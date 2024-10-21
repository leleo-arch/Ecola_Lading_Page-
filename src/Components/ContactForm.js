import styled from 'styled-components';

const ContactSection = styled.section`
  padding: 2rem 0;
  text-align: center;
  background: linear-gradient(270deg, #6978D1 80%, #945DD6 120%);

  margin-bottom: -80px;
`;

const ContactTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: white;
`;

const ContactDescription = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto 2rem;
  color: white;
`;

const ContactButton = styled.a`
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #333;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  font-size: 1rem;
  margin-left: 20px;

  &:hover {
    background-color: #555;
  }
`;

const MapWrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 100%;
  height: 400px;
  border: 2px solid white;
  border-radius: 8px;
  overflow: hidden;

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }

  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 480px) {
    height: 200px;
  }
`;

const Contact = () => {
  return (
    <ContactSection id="contact">
      <ContactTitle></ContactTitle>
      <ContactDescription>
        Sinta-se à vontade para me enviar uma mensagem!
      </ContactDescription>
      <ContactButton href="estacaodopensar@contato.com">Enviar E-mail</ContactButton>
      <ContactButton href="https://api.whatsapp.com/send?phone=5511984858586&text=Sinta-se%20%C3%A0%20vontade%20para%20me%20enviar%20uma%20mensagem!%0A%0A">Entrar em Contato</ContactButton>

      {/* Google Maps iframe */}
      <MapWrapper>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.825355671756!2d-46.6617342850203!3d-23.52534408470383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5837b07b84b7%3A0x5b78e2d5c6b2e37!2sEscola%20do%20Pensar!5e0!3m2!1sen!2sbr!4v1697369801164!5m2!1sen!2sbr"
          loading="lazy"
          allowFullScreen
          title="Escola do Pensar Map"
        />
      </MapWrapper>
    </ContactSection>
  );
};

export default Contact;
