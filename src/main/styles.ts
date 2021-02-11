import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const Footer = styled.div`
  height: 80px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-around;

  a {
    display: flex;
    align-items: center;
    color: black;
  }
`;
