import styled, { keyframes } from 'styled-components';

export const SidebarWrapper = styled.section`
  display: flex;
`;

export const MainWrapper = styled.section`
  display: flex;
  margin-left: 50px;
`;

export const HomeWrapper = styled.div`
  max-width: 100%;
`;

export const FadeAnimation = keyframes`
  0% { opacity: 0;}
  100% { opacity: 1; }
`;

export const Fade = styled.div`
  animation: ${FadeAnimation} ${props => props.delay} linear normal;
`;
