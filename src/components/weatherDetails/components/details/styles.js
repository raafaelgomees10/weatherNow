import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  text-align: center;
`;

export const Block = styled.div`
  padding-left: 16px;

  &:not(:nth-of-type(even)) {
    padding-right: 16px;
  }

  @media (max-width: 767px) {
    &:not(:nth-of-type(even)) {
      padding: 0px;
    }
    padding: 0px;
  }
`;

export const Text = styled.p`
  font-size: 2rem;
  font-weight: 600;
  margin-top: 8px;

  > span {
    margin-top: 8px;
    font-size: 1.6rem;
    display: block;
    font-weight: 500;
  }

  @media (max-width: 767px) {
    font-size: 1.8rem;
    > span {
      margin: 0 0 12px;
    }
  }
`;
