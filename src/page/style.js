import styled from "styled-components";

export const Center = styled.div`
  display: ${({ loading }) => (loading ? "flex" : "none")};
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  font-size: larger;
`;
