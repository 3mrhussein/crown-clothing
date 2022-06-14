import styled from 'styled-components';

export const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  z-index: 10;
  opacity: 0.4;
  background-color: gray;
  position: fixed;
  top: 0;
  left: 0;
`;

export const ModalContainer = styled.div`
  background-color: white;
  width: 50%;
  /* height: 70%; */
  opacity: 1;
  flex: 0 0 0;
  border-radius: 10px;
  position: fixed;
  z-index: 20;
  top: 15%;
  left: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-shadow: 1px 1px 2px gray;
  @media (max-width: 700px) {
    width: 80%;
    left: 10%;
  }
`;
