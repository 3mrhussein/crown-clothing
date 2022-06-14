import styled from 'styled-components';

export const SignInFormContainer = styled.div`
  display: flex;
  flex-direction: column;
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
  justify-content: space-between;
  align-items: center;
`;
