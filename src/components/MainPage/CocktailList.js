import styled from "styled-components";

const CocktailList = styled.div`
  @media (max-width: 768px) {
    grid-area: main;
    width: 100%;
    text-align: center;
    border-radius: 5px;

    img {
      width: 90%;
      margin-top: 10px;
      display: block;
      margin-left: auto;
      margin-right: auto;
      border-radius: 30% 15% / 10% 35%;
      box-shadow: 10px -8px rgba(0, 185, 205, 0.49);
    }

   
  }

  @media (min-width: 769px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 250px;
    text-align: center;
    margin-left: 80px;

    img {
      width: 250px;
      border-radius: 30% 15% / 10% 35%;
      box-shadow: 10px -8px rgba(0, 185, 205, 0.49);
    }
  }
`;

export default CocktailList;
