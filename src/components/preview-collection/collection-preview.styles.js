import styled from 'styled-components';

export const CollectionPreviewStyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const CollectionPreviewItemStyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  width: 25%;
  @media (min-width: 500px) and (max-width: 800px) {
    width: 50%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;
