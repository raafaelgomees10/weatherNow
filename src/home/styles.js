import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  justify-content: space-between;

  @media (min-width: 768px) {
    &.bottom {
      margin-top: 40px;
    }
  }

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const Content2 = styled.div`
  display: grid;
  grid-template-columns: minmax(440px, 1fr) 2fr;
  gap: 3.2rem;
`;
