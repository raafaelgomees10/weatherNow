import styled, { css, keyframes } from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(440px, 1fr) 2fr;
  gap: 3.2rem;

  @media (min-width: 768px) and (max-width: 1199px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto;
    gap: 2rem;
  }

  @media (max-width: 767px) {
    grid-template-columns: 100%;
  }
`;

export const Content = styled.div`
  border-radius: 30px;
  padding: 32px 0 32px 24px;
  background: ${(props) => props.theme.bg};

  box-shadow: 10px 10px 4px 0 rgba(0, 0, 0, 0.5);

  @media (min-width: 768px) and (max-width: 1199px) {
    &:nth-of-type(2) {
      grid-area: 1 / 2 / 3 / 3;
    }
    &:nth-of-type(4) {
      grid-area: 3 / 1 / 4 / 3;
    }
  }
`;

const skeleton = keyframes`
 100% {
      transform: translateX(100%);
    }
`;

const loader = css`
  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.2) 20%,
      rgba(255, 255, 255, 0.5) 60%,
      rgba(255, 255, 255, 0) 100%
    );
    animation: ${skeleton} 3s infinite;
    content: '';
  }
`;

export const Text = styled.div`
  border-radius: 20px;
  height: 2rem;
  position: relative;
  overflow: hidden;
  background-color: ${(props) => props.theme.bg3};
  width: ${(props) => props.$width};
  margin-bottom: 24px;
  ${loader}

  &.title {
    margin: 0 auto 24px;
  }
`;
