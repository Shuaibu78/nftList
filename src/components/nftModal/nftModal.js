import React from "react";
import { ModalWrapper, Modal, Button } from "./style";

const NftModal = ({ selectedNFT, handleModalClose, handlePurchaseClick }) => {
  return (
    <ModalWrapper onClick={handleModalClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <h2>{selectedNFT.name}</h2>
        <img src={selectedNFT.image_url} alt={selectedNFT.name} />
        <p>Description: {selectedNFT.description}</p>
        <p>Owner's address: {selectedNFT?.asset_contract?.address}</p>
        <Button onClick={handlePurchaseClick}>Purchase on OpenSea</Button>
      </Modal>
    </ModalWrapper>
  );
};

export default NftModal;
