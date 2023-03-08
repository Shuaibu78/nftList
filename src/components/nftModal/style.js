import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  background-color: white;
  word-wrap: break-word;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);

  img {
    width: 520px;
    height: 400px;
  }

  p {
    max-width: 520px;
  }
`;

export const Button = styled.a`
  background-color: #2ecc71;
  color: white;
  padding: 10px;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;
`;
