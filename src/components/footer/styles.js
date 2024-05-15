import styled from 'styled-components';

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
`;

export const Text = styled.p`
  font-size: 2rem;

  > a {
    text-decoration: none;
    color: unset;

    &:hover {
      color: #6e07f3;
      text-decoration: underline;
    }
  }
`;
