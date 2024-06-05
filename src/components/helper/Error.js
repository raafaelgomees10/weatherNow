import React from 'react';
import styled from 'styled-components';

const Error = () => {
  return (
    <Container data-testid="error">
      <Text>Sorry, we could not find the city...</Text>
    </Container>
  );
};

export default Error;

const Container = styled.div`
  height: 70vh;
  padding-bottom: 30px;
`;

const Text = styled.p`
  font-size: 2rem;
  font-weight: 400;
  color: red;
`;
