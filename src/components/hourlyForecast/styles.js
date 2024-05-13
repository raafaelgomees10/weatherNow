import styled from 'styled-components';

export const Container = styled.div`
  width: 720px;
  padding: 16px;
  border-radius: 30px;
  background: ${(props) => props.theme.bg};
  box-shadow: 10px 10px 4px 0 rgba(0, 0, 0, 0.5);
`;

export const Title = styled.h1`
  font-size: 3.2rem;
  font-weight: 600;
  text-align: center;
`;

export const Content = styled.div``;

export const List = styled.ul`
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
`;

export const Item = styled.li`
  border-radius: 40px;
  background: ${(props) => props.theme.bg2};
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
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
