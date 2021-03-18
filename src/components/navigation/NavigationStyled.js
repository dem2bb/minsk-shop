import styled from 'styled-components';

export const NavigationListContainer = styled.nav`
  .navLink {
    text-decoration: none;
    margin-right: 30px;
    text-transform: uppercase;
    color: ${props => props.theme.colors.text};
  }
  .active_navLink {
    border-bottom: 2px solid ${props => props.theme.colors.active};
    color: ${props => props.theme.colors.main};
  }
  .navigation-list {
    margin-top: 20px;
    justify-content: center;
    list-style: none;
    display: flex;
  }
`;
