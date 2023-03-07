import styled from "styled-components";

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 20px;
  width: 100%;
`;

export const Card = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  width: 400px;

  img {
    width: 100%;
    height: 400px;
  }
`;
