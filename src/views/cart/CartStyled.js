import styled from "styled-components";

export const CartListContainer = styled.ul`
  display: flex;

  .notfound_img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-bottom: 10px;
    object-fit: cover;
  }

  .product_item {
    padding-top: 10px;
    width: 140px;
    text-align: center;
    border-radius: 15px;
    margin-right: 15px;
    box-shadow: 0 7px 15px rgba(0, 0, 0, 0.445);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 20px;
    padding-bottom: 10px;
    background-color: white;
    transition: 0.7s;
    &:hover {
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    }
  }
  .product_list_text {
    margin-bottom: 5px;
  }
  h3 {
    margin-bottom: 10px;
    margin-top: -5px;
  }
  .buttons {
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .counterButton {
    position: relative;
    display: inline-block;
    border: none;
    margin-right: 5px;
    cursor: pointer;
    width: 1.5em;
    height: 1.5em;
    line-height: 1.5em;
    vertical-align: middle;
    text-align: center;
    text-decoration: none;
    color: #000;
    outline: none;
    border-radius: 5px;
    box-shadow: 0 0 0 1px #ddd inset, 0 1px 1px #fff;
  }
  .counterButton:hover {
    background: #dcdcdc linear-gradient(#fff, #dcdcdc);
    box-shadow: 0 0 0 1px #aaa inset, 0 1px 1px #aaa;
  }
  .counterButton:active {
    background: none;
    box-shadow: 0 0 0 1px #bbb inset, 0 1px 3px rgba(0, 0, 0, 0.5) inset,
      0 1px 2px #fff;
  }
`;
