import styled from 'styled-components';

export const HomePageContainer = styled.div`
  .homepage_title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 40px;
    letter-spacing: 1px;
    max-width: 320px;
    width: 100%;
    display: inline-block;
    color: #333;
  }
  .homepage_title {
    display: table;
    width: auto;
    margin: 15px auto;
    letter-spacing: 2px;
  }
  .homepage_title:before {
    content: '';
    position: absolute;
    top: -50%;
    left: -25px;
    width: 30px;
    height: 20px;
    border-top: 2px solid #fed57b;
    border-left: 2px solid #fed57b;
  }
  .homepage_title:after {
    content: '';
    position: absolute;
    bottom: -50%;
    right: -25px;
    width: 30px;
    height: 20px;
    border-bottom: 2px solid #fed57b;
    border-right: 2px solid #fed57b;
  }
`;
