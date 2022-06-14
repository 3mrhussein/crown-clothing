import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 70px;
  margin-bottom: 15px;
  flex: 1;
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 70px;
  margin-right: 20px;
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex: 1;
  margin: 0 10px;
  @media (min-width: 800px) {
    max-width: 300px;
    font-size: large;
  }
  font-size: large;
  align-items: center;
  height: 100%;
  justify-content: space-between;
`;

const OptionClassStyle = css`
  padding: 3px 10px 5px 10px;
  cursor: pointer;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const OptionContainer = styled(Link)`
  ${OptionClassStyle}
`;
