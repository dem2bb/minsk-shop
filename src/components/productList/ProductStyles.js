import styled from 'styled-components';

export const ProductListCont = styled.ul`
  margin-left: 60px;
  list-style: none;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-bottom: -20px;
  .notfound_img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-bottom: 20px;
    object-fit: cover;
  }

  .product_item {
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
    background-color: ${props => props.theme.colors.secondary};
    transition: 0.7s;
    &:hover {
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    }
  }
  .product_list_text {
    margin-bottom: 10px;
    color: ${props => props.theme.colors.text};
  }
  h3 {
    margin-bottom: 10px;
    margin-top: -5px;
  }
`;
