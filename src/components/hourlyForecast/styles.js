import styled from 'styled-components';

export const Container = styled.div`
  padding: 16px;
  border-radius: 30px;
  background: ${(props) => props.theme.bg};
  box-shadow: 10px 10px 4px 0 rgba(0, 0, 0, 0.5);

  @media (min-width: 768px) and (max-width: 1199px) {
    grid-area: 3 / 1 / 4 / 3;
  }

  @media (max-width: 767px) {
    padding: 16px 0;
    width: 100%;
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

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  max-width: 705px;
  margin: 16px auto 0;

  @media (max-width: 767px) {
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 8px 16px;
  }
`;

export const Item = styled.li`
  border-radius: 40px;
  background: ${(props) => props.theme.bg2};
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  @media (max-width: 767px) {
    margin-bottom: 8px;
  }
`;

export const Time = styled.div`
  font-size: 2.4rem;
  font-weight: 600;
`;
export const Condition = styled.div`
  margin: 8px 0 4px;
`;

export const Temp = styled.div`
  font-size: 2rem;
  font-weight: 600;
`;
export const Wind = styled.div`
  transform: rotate(${(props) => props.$deg}deg);
  margin: 8px 0;
`;
export const Speed = styled.div`
  font-size: 2rem;
  font-weight: 600;
`;
