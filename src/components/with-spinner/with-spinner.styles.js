import styled, { css } from 'styled-components';

export const SpinnerOverlay = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  position:relative;
  justify-content: center;
  align-items: center;
`;

const animationStyles = css`
animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  animation-direction: reverse;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;

const anotherAnimationStyles = css`
animation: spin 1s linear infinite;
  -webkit-animation: spin 1s linear infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;

export const SpinnerContainer = styled.div`
  //display: inline-block;
  position:absolute;
  width: 50px;
  height: 50px;
  border: 3px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: #d36767;

  ${animationStyles}
`;

export const AnotherSpinnerContainer = styled.div`
  //display: inline-block;
  position:absolute;
  width: 60px;
  height: 60px;
  border: 3px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: #d36767;
  ${anotherAnimationStyles}
`;

