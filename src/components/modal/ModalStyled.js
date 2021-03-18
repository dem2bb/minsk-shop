import styled from 'styled-components';
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
  .Modal {
    position: relative;
    background-color: #fff;
    width: calc(100vw - 20px);
    max-height: calc(100vh - 24px);
    border-radius: 14px;
    @media (min-width: 768px) {
      max-width: 600px;
    }
  }
  .modalIcon {
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .modalBtn {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    fill: red;
  }
  /* ================ animations =========== */
  .modal-appear {
    opacity: 0;
    transform: scale(0.8);
  }
  .modal-appear-active {
    opacity: 1;
    transform: scale(1);
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .modal-exit {
    opacity: 1;
    transform: scale(1);
  }
  .modal-exit-active {
    opacity: 0;
    transform: scale(0.8);
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
export default Overlay;
