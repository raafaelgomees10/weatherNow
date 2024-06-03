import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 16px 0;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 30px;
  background: ${(props) => props.theme.bg};
  box-shadow: 10px 10px 4px 0 rgba(0, 0, 0, 0.5);

  @media (max-width: 767px) {
    width: 100%;
    padding: 20px 0;
  }
`;

export const City = styled.h1`
  font-size: 3.6rem;
  font-weight: 700;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    margin-left: 16px;
  }

  @media (max-width: 767px) {
    margin: 0;
    font-size: 3.2rem;
  }
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
  @media (max-width: 767px) {
    font-size: 5.6rem;
  }
`;

export const Day = styled.span`
  font-size: 2rem;
  font-weight: 400;
  text-align: center;
  margin-top: -8px;
`;
