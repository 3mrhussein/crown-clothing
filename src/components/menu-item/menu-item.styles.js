import styled from 'styled-components';

export const MenuItemContainer = styled.div`
  @media (min-width: 700px) {
    width: 30%;
  }
  width: 100%;
  height: 240px;
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & .content {
      opacity: 0.9;
    }
  }
  &.large {
    @media (min-width: 700px) {
      height: 380px;
    }
  }
`;

export const BackgroundImage = styled.div`
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  &:hover {
    transform: scale(1.1);
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }
`;

export const MenuItemContentContainer = styled.div`
  width: 150px;
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;
  .title {
    font-weight: bold;
    margin-bottom: 6px;
    font-size: 22px;
    color: #4a4a4a;
  }

  .subtitle {
    font-weight: lighter;
    font-size: 16px;
  }
`;
