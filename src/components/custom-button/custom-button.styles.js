import styled, { css } from 'styled-components';
const CustomButtonStyles = css`
  background-color: black;
  color: white;
  border: none;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;
  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;
  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;
const buttonStyles = (props) => {
  if (props.isGoogleSignIn) return googleSignInStyles;
  if (props.inverted) return invertedButtonStyles;
  return CustomButtonStyles;
};

export const CustomButtonContainer = styled.button`
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px;
  @media (max-width: 500px) {
    padding: 0 10px;
  }
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  border: none;
  border-radius: 10px;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }

  ${buttonStyles}
`;
