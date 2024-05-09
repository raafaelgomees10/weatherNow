import styled from 'styled-components';

export const Container = styled.div`
  width: 440px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 30px;
  background: ${(props) => props.theme.bg};
  box-shadow: 10px 10px 4px 0 rgba(0, 0, 0, 0.5);
`;

export const City = styled.h1`
  font-size: 3.6rem;
  font-weight: 700;
  margin: 0 0 24px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Time = styled.span`
  font-size: 7.6rem;
  font-weight: 700;
  display: block;
`;

export const Day = styled.span`
  font-size: 2rem;
  font-weight: 400;
  text-align: center;
  margin-top: -8px;
`;
