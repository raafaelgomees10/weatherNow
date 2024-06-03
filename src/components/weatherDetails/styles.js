import styled from 'styled-components';

export const Container = styled.div`
  padding: 16px;

  display: flex;
  justify-content: space-between;

  border-radius: 30px;
  background: ${(props) => props.theme.bg};
  box-shadow: 10px 10px 4px 0 rgba(0, 0, 0, 0.5);

  @media (max-width: 767px) {
    width: 100%;
    padding: 16px 0;
    flex-direction: column;
  }

  @media (min-width: 768px) and (max-width: 1199px) {
    grid-area: 1 / 2 / 3 / 3;
    flex-direction: column;
  }
`;

export const TempContent = styled.div`
  @media (max-width: 767px) {
    padding: 0 16px;
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

  @media (max-width: 767px) {
    font-size: 4rem;
  }
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

  @media (max-width: 767px) {
    font-size: 1.6rem;
    margin: 0px;

    > strong {
      font-size: 2.4rem;
    }
  }
`;

export const SunDetails = styled.div`
  @media (min-width: 768px) and (max-width: 1199px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const SunData = styled.div`
  font-size: 2rem;
  font-weight: 500;
  display: flex;

  &:not(:last-child) {
    margin-bottom: 16px;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

export const Sun = styled.div`
  margin-left: 8px;
  > span {
    display: block;
    font-size: 1.6rem;
  }
`;

export const Climate = styled.div`
  text-transform: capitalize;
  text-align: center;
  font-size: 3.2rem;
  font-weight: 600;
  margin-top: 16px;

  @media (max-width: 767px) {
    font-size: 2.4rem;
    margin-bottom: 16px;
  }

  @media (min-width: 768px) and (max-width: 1199px) {
    margin-bottom: 16px;
  }
`;
