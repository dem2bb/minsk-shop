import styled from 'styled-components';

export const MainContainer = styled.main`
  background-color: ${props => props.theme.colors.background};
  min-height: calc(100vh - 80px);
  text-align: center;
  padding: 10px 40px 0;
`;
