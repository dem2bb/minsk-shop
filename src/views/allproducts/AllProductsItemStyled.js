import transition from 'styled-transition-group';

export const AllProductsItemCont = transition.li.attrs({
  timeout: 3000,
  mountOnEnter: true,
  unmountOnExit: true,
})`
  padding-top: 20px;
  width: 180px;
  text-align: center;
  border-radius: 15px;
  margin-right: 15px;
  box-shadow: 0 7px 15px rgba(0, 0, 0, 0.445);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 20px;
  padding-bottom: 20px;
  background-color: white;
  transition: 0.7s;
  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
  
  &:exit {
    opacity: 1;
  }
  &:exit-active {
    opacity: 0.01;
    transition: opacity 3000ms ease-in;
  }
  

 

`;
