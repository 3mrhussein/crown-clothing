import styled from 'styled-components';

export const SigninAndSignUpPageContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 50px;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const SigninPageLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  margin: 30px;
`;

export const SignInFormContainer = styled.div`
  display: flex;
  border-radius: 5px;
  box-shadow: 1px 1px 5px #888888;
  padding: 20px;
  margin: 10px;
  flex: 0 1 auto;
  /* @media (max-width: 500px) {
    width: 98%;
    h1 {
      font-size: medium;
    }
    span {
      font-size: small;
    }
    p {
      font-size: small; */
    }
  }
  background-color: red;
`;
