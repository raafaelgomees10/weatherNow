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
