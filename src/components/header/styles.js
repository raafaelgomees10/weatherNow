import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    align-items: flex-start;
  }
`;

export const Button = styled.button`
  background: #0d8be6;
  font-size: 2rem;
  font-weight: 800;
  color: #fff;
  border-radius: 40px;
  box-shadow: 0px 4px 40px 0px rgba(0, 0, 0, 0.25);
  border: none;
  padding: 4px 24px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  > svg {
    margin-right: 12px;
  }

  @media (max-width: 1199px) {
    padding: 4px 16px;
    font-size: 1.4rem;
  }
`;
