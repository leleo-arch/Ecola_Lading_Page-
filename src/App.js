import React from 'react';
import ProjectGallery from './Components/ProjectGallery';
import ContactForm from './Components/ContactForm';
import Technologies from './Components/Technologies';
import About from './Components/About';
import Certificado from './Components/Certificados';



import { GlobalStyle, Container } from './styles';
import AboutMe from './Components/AboutMe';

function App() {
  return (
    <Container className='App'>

      <GlobalStyle />
      <AboutMe/>
      <Technologies/>
      <ProjectGallery />
      <About/>
      <Certificado/>
      <ContactForm />
    </Container>
  );
}

export default App;
