import styled from 'styled-components';

export const CollectionItemStyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  margin: 10px 5px;
  @media (max-width: 800px) {
    height: 300px;
  }
  height: 350px;
  align-items: center;
  position: relative;

  .image {
    height: 95%;
    width: 100%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
    border-radius: 5px;
    box-shadow: 1px 1px 5px gray;
  }
  .collection-footer {
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    .name {
      width: 90%;
      margin-bottom: 15px;
    }
  }
  button {
    position: absolute;
    top: 40%;
    opacity: 0.7;
    width: 70%;
    display: none;
  }
  &:hover {
    .image {
      opacity: 0.8;
    }
    button {
      opacity: 0.85;
      display: flex;
      &:hover {
        box-shadow: 0 0 4px 3px rgb(47, 61, 250);
      }
    }
  }
`;
