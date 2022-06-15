import styled from 'styled-components';

export const CheckoutPageContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 90%;
  margin: 10px auto;
  padding: 0 20px;

  @media (min-width: 600px) and (max-width: 800px) {
    font-size: medium;
  }
  @media (max-width: 600px) {
    font-size: small;
  }
`;

export const CheckoutPageTable = styled.div`
  width: 100%;
  color: gray;
  text-align: center;
  padding-bottom: 20px;
  border-radius: 20px;
  box-shadow: 1px 1px 2px gray;

  @media (max-width: 800px) {
    font-size: small;
  }
  @media (max-width: 500px) {
    font-size: x-small;
  }
`;
export const CheckoutPageTableRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CheckoutPageTableHeadCell = styled.div`
  border-bottom: 1px solid darkgrey;
  padding: 20px 0;
  width: 20%;
  font-weight: bold;
  z-index: 2;
  background-color: white;
`;

export const CheckoutPageTableBody = styled.div`
  width: 100%;
  height: 350px;
  @media (min-width: 800px) {
    height: 300px;
  }
  overflow-y: scroll;
  /* Hide scrollbar for Chrome, Safari and Opera */
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  border-bottom: 1px solid lightgray;
`;

export const CheckoutPageTableHead = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
