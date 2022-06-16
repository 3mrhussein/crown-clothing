import styled from 'styled-components';

export const SignInFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  font-size: medium;
  h1 {
    font-size: 28px;
    @media (max-width: 400px) {
      font-size: 24px;
    }
  }
  p {
    span {
      color: #1177dd;
      cursor: pointer;
      :hover {
        /* color: black; */
        border-bottom: 2px solid #1177dd;
      }
    }
  }
`;

export const SignInButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
