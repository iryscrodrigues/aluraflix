import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  background-color: #1B2750;
  color: #FFF;
  font-size: 30px;
`;

const FormLabel = styled.label`
  margin: 10px 0 5px;
  font-weight: bold;
`;

const FormInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 15px;
  width: calc(100% - 22px);
  background-color: #1B2750;
  color: #FFF;
`;

const FormTextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 15px;
  width: calc(100% - 22px);
  resize: none;
  background-color: #1B2750;
  color: #FFF;
`;

const FormButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

const EditForm = ({ video, onSave, onCancel }) => {
  const [title, setTitle] = useState(video.titulo);
  const [description, setDescription] = useState(video.descricao);
  const [image, setImage] = useState(video.imagem);
  const [link, setLink] = useState(video.link);

  const handleSave = () => {
    const updatedVideo = {
      ...video,
      titulo: title,
      descricao: description,
      imagem: image,
      link: link,
    };
    onSave(updatedVideo);
  };

  return (
    <FormContainer>
      <FormLabel>Título</FormLabel>
      <FormInput 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
      />
      <FormLabel>Descrição</FormLabel>
      <FormTextArea 
        rows="4" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
      />
      <FormLabel>Imagem</FormLabel>
      <FormInput 
        type="text" 
        value={image} 
        onChange={(e) => setImage(e.target.value)} 
      />
      <FormLabel>Link</FormLabel>
      <FormInput 
        type="text" 
        value={link} 
        onChange={(e) => setLink(e.target.value)} 
      />
      <FormButton onClick={handleSave}>Salvar</FormButton>
      <FormButton onClick={onCancel}>Cancelar</FormButton>
    </FormContainer>
  );
};

EditForm.propTypes = {
  video: PropTypes.shape({
    titulo: PropTypes.string,
    descricao: PropTypes.string,
    imagem: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default EditForm;
