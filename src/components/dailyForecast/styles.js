import styled from 'styled-components';

export const Container = styled.div`
  width: 380px;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 30px;
  background: ${(props) => props.theme.bg};
  box-shadow: 10px 10px 4px 0 rgba(0, 0, 0, 0.5);

  @media (max-width: 767px) {
    width: 100%;
    padding: 16px 0;
  }
`;

export const Title = styled.h1`
  font-size: 3.2rem;
  font-weight: 600;
  text-align: center;

  @media (max-width: 767px) {
    font-size: 2.8rem;
  }
`;

export const Content = styled.div`
  @media (max-width: 767px) {
    padding: 0 16px;
  }
`;

export const List = styled.div``;

export const Item = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  justify-content: center;
  align-items: center;
`;

export const Condition = styled.div``;

export const Temp = styled.div`
  font-size: 2.2rem;
  justify-self: center;
  font-weight: 400;
  margin-right: 24px;

  @media (max-width: 767px) {
    font-size: 2rem;
  }
`;

export const Day = styled.div`
  font-size: 1.8rem;
  font-weight: 400;
  justify-self: flex-end;
  @media (max-width: 767px) {
    font-size: 1.6rem;
  }
`;
