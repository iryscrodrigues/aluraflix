import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FormContainer = styled.div`
  max-width: 900px;
  margin: 100px auto;
  padding: 30px;
  background-color: #2B4075;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  color: #fff;
  font-size: 28px;

`;

const FormField = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #2B4075;
  color: #fff;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #2B4075;
  color: #fff;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const ClearButton = styled(Button)`
  background-color: #ff6347;

  &:hover {
    background-color: #e5533d;
  }
`;

const NovoVideo = ({ onAddVideo }) => {
  const [titulo, setTitulo] = useState('');
  const [categoria, setCategoria] = useState('1'); // Default category
  const [imagem, setImagem] = useState('');
  const [link, setLink] = useState('');
  const [descricao, setDescricao] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newVideo = {
      id: Date.now(), // Utilizamos Date.now() diretamente para obter um número único
      titulo,
      categoria,
      imagem,
      link,
      descricao,
    };
    onAddVideo(newVideo); // Chama a função para adicionar o vídeo
    navigate('/'); // Navega de volta para a página Home
  };

  const handleClear = () => {
    setTitulo('');
    setCategoria('1');
    setImagem('');
    setLink('');
    setDescricao('');
  };

  return (
    <FormContainer>
      <h1>Novo Vídeo</h1>
      <h4>Complete o formulário para criar um novo card de vídeo.</h4>
      <h2>Criar Card</h2>
      <form onSubmit={handleSubmit}>
        <FormField>
          <Label htmlFor="titulo">Título</Label>
          <Input
            id="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </FormField>
        <FormField>
          <Label htmlFor="categoria">Categoria</Label>
          <Select
            id="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            required
          >
            <option value="1">Front End</option>
            <option value="2">Back End</option>
            <option value="3">Mobile</option>
          </Select>
        </FormField>
        <FormField>
          <Label htmlFor="imagem">Imagem (URL)</Label>
          <Input
            id="imagem"
            value={imagem}
            onChange={(e) => setImagem(e.target.value)}
            required
          />
        </FormField>
        <FormField>
          <Label htmlFor="link">Vídeo (URL)</Label>
          <Input
            id="link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            required
          />
        </FormField>
        <FormField>
          <Label htmlFor="descricao">Descrição</Label>
          <Input
            id="descricao"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            required
          />
        </FormField>
        <Button type="submit">Guardar</Button>
        <ClearButton type="button" onClick={handleClear}>Limpar</ClearButton>
      </form>
    </FormContainer>
  );
};

NovoVideo.propTypes = {
  onAddVideo: PropTypes.func.isRequired,
};

export default NovoVideo;
