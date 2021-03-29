import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  height: 60px;
  justify-content: space-between;
  padding: 10px 40px;
  border-bottom: 1px solid grey;
  box-shadow: 0 1px 15px grey;

  .toggle input[type='checkbox'] {
    display: none;
  }

  .toggle label {
    background-color: #777;
    border: 2px solid #555;
    border-radius: 50px;
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: all ease-in-out 0.3s;
    width: 80px;
    height: 28px;
  }

  .toggle label::after {
    background-color: #555;
    border-radius: 50%;
    content: ' ';
    cursor: pointer;
    display: inline-block;
    position: absolute;
    left: 2px;
    top: 2px;
    transition: all ease-in-out 0.3s;
    width: 20px;
    height: 20px;
  }

  .toggle input[type='checkbox']:checked ~ label {
    background-color: #cfdee7;
    border-color: #cfdee7;
  }

  .toggle input[type='checkbox']:checked ~ label::after {
    background-color: #777;
    transform: translateX(50px);
  }
`;
