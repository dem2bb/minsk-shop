import styled from 'styled-components';
import transition from 'styled-transition-group';

export const AllProductsCont = transition.ul.attrs({
  timeout: 3000,
})`
`;

//  &:appear {
//     opacity: 0.01;
//   }
//   &:appear-active {
//     opacity: 1;
//     transition: opacity 3000ms ease-in;
//   }
