import styled from 'styled-components';

export const Content = styled.div`
  display: grid;
  grid-template-columns: minmax(440px, 1fr) 2fr;
  gap: 3.2rem;

  @media (min-width: 768px) and (max-width: 1199px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto;
    gap: 2rem;
  }

  @media (max-width: 767px) {
    grid-template-columns: 100%;
  }
`;
