import styled from 'styled-components';

export const Container = styled.div`
  width: 700px;
  padding: 16px;

  display: flex;

  border-radius: 30px;
  background: ${(props) => props.theme.bg};
  box-shadow: 10px 10px 4px 0 rgba(0, 0, 0, 0.5);
`;

export const Column = styled.div`
  &:nth-of-type(1) {
    margin-left: 24px;
  }

  &:nth-of-type(2) {
    text-align: center;
    font-size: 3.2rem;
    font-weight: 600;
    margin-top: 16px;
    margin-left: 40px;
  }

  &:last-of-type {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    justify-items: center;
    text-align: center;
  }
`;

export const Temperature = styled.div`
  font-size: 8rem;
  font-weight: 700;
  background: ${(props) => props.theme.fontGradient};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1;
`;

export const Feels = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.9rem;
  font-weight: 400;
  margin-top: -5px;
  margin-bottom: 24px;
  letter-spacing: 0.7px;
  color: ${(props) => props.theme.fontGradient2};

  > strong {
    font-size: 3rem;
    font-weight: 600;
    margin-left: 8px;
  }
`;

export const Sun = styled.div`
  margin-left: 8px;
  > span {
    display: block;
    font-size: 1.6rem;
  }
`;

export const Details = styled.div`
  font-size: 2rem;
  font-weight: 500;
  display: flex;
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const Block = styled.div`
  font-size: 2rem;
  font-weight: 600;
  margin-top: 8px;
  > span {
    margin-top: 8px;
    font-size: 1.6rem;
    display: block;
    font-weight: 500;
  }
`;
