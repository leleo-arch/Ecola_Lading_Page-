import React, { useState } from 'react';
import styled from 'styled-components';

const FormSection = styled.section`
  padding: 2rem;
  background-color: white;
  border-radius: 8px;
  max-width: 600px;
  margin: 2rem auto;
  text-align: left;
`;

const FormTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #945DD6;
`;
const FormTitle2 = styled.h2`
  font-size: 1rem;
  text-align: center;
  color: #6978D1;
`;
const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  font-size: 1rem;
  color: #333;
  display: block;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  color: #333;
  box-sizing: border-box;
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  color: #333;
  box-sizing: border-box;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  display: block;
  margin: 2rem auto 0;

  &:hover {
    background-color: #0056b3;
  }
`;

const AlunoForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    mesNascimento: '',
    idade: '',
    pais: '',
    responsaveis: '',
    serieDesejada: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulário Enviado:', formData);
    // Aqui você pode adicionar a lógica para enviar o formulário
  };

  return (
    <FormSection>
      <FormTitle>Prontos para conhecer melhor a nossa escola?</FormTitle>
      <FormTitle2>Preencha o formulário e teremos prazer em ajudar.</FormTitle2>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Nome do Aluno</Label>
          <Input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Digite o nome do aluno"
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Mês de Nascimento</Label>
          <Input
            type="text"
            name="mesNascimento"
            value={formData.mesNascimento}
            onChange={handleChange}
            placeholder="Digite o mês de nascimento"
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Idade</Label>
          <Input
            type="number"
            name="idade"
            value={formData.idade}
            onChange={handleChange}
            placeholder="Digite a idade"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Responsáveis</Label>
          <Input
            type="text"
            name="responsaveis"
            value={formData.responsaveis}
            onChange={handleChange}
            placeholder="Digite os responsáveis"
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Série Desejada</Label>
          <Select
            name="serieDesejada"
            value={formData.serieDesejada}
            onChange={handleChange}
            required
          >
            <option value="">Selecione a série</option>
            <option value="1a série">1ª série</option>
            <option value="2a série">2ª série</option>
            <option value="3a série">3ª série</option>
            <option value="4a série">4ª série</option>
            <option value="5a série">5ª série</option>
            <option value="6a série">6ª série</option>
            <option value="7a série">7ª série</option>
            <option value="8a série">8ª série</option>
          </Select>
        </FormGroup>

        <Button type="submit">Enviar Cadastro</Button>
      </form>
    </FormSection>
  );
};

export default AlunoForm;
