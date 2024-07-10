// import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8f9fa;
  color: #343a40;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const HomeLink = styled(Link)`
  font-size: 1.2rem;
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const NotFound = () => {
  return (
    <NotFoundWrapper>
      <Title>404</Title>
      <Description>Página Não Encontrada</Description>
      <HomeLink to="/">Voltar para a Página Inicial</HomeLink>
    </NotFoundWrapper>
  );
};

export default NotFound;
