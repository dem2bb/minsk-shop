import styled from 'styled-components';

export const ProductFormContainer = styled.div`
  width: 300px;
  margin: 120px auto 0 auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 25px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  transition: 0.7s;
  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
  h2 {
    position: relative;
    font-size: 25px;
    letter-spacing: 1px;
    max-width: 320px;
    width: 100%;
    display: inline-block;
    color: #333;
  }
  h2 {
    display: table;
    width: auto;
    margin: 15px auto;
    letter-spacing: 2px;
  }
  h2:before {
    content: '';
    position: absolute;
    top: -50%;
    left: -25px;
    width: 30px;
    height: 20px;
    border-top: 2px solid #fed57b;
    border-left: 2px solid #fed57b;
  }
  h2:after {
    content: '';
    position: absolute;
    bottom: -50%;
    right: -25px;
    width: 30px;
    height: 20px;
    border-bottom: 2px solid #fed57b;
    border-right: 2px solid #fed57b;
  }
  label {
    display: block;
    margin: 5px 0;
  }
  input {
    padding: 5px;
    border: 1px solid grey;
  }
  input,
  textarea,
  select {
    width: 100%;
    border-radius: 14px;
    outline: none;
  }
  label {
    color: #333;
  }
  textarea {
    min-height: 60px;
    padding: 5px;
  }

  .options {
    display: flex;
    justify-content: space-between;
  }
  .button-3 {
    display: inline-flex;
    align-items: center;
    font-size: 12px;
    letter-spacing: 0.05em;
    font-weight: 600;
    text-transform: uppercase;
    padding: 12px 20px;
    font-family: 'Montserrat', sans-serif;
    color: #904c6e;
    background: white;
    border: 1px solid;
    cursor: pointer;
    transition: 0.3s linear;
    margin-top: 25px;
    margin-left: 10px;
  }
  .button-3:hover {
    background: #f0c7a7;
  }
`;
