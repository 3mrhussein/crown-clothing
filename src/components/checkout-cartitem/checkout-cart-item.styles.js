import styled from 'styled-components';

export const CheckoutTableItemContainer = styled.td`
  width: 20%;
  overflow-x: scroll;

  /* Hide scrollbar for Chrome, Safari and Opera */
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  img {
    width: 130px;
    height: 170px;
    border-radius: 2px;
    @media (min-width: 600px) and (max-width: 800px) {
      width: 80px;
      height: 90px;
    }
    @media (max-width: 600px) {
      width: 50px;
      height: 55px;
    }
  }
`;
