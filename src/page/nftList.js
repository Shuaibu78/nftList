import React, { useState, useEffect } from "react";
import { CardGrid, Card, ModalWrapper, Modal, Button } from "./style";

const NFTList = ({ address }) => {
  const [nfts, setNfts] = useState([]);
  const [selectedNFT, setSelectedNFT] = useState(null);

  useEffect(() => {
    fetch(`https://api.opensea.io/api/v1/assets?owner=${address}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setNfts(data.assets);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleCardClick = (nft) => {
    setSelectedNFT(nft);
  };

  const handleModalClose = () => {
    setSelectedNFT(null);
  };

  const handlePurchaseClick = () => {
    window.location.href = selectedNFT.permalink;
  };

  return (
    <>
      <CardGrid>
        {/* filter out those without image */}
        {nfts
          .filter((nft) => nft.image_thumbnail_url !== null)
          .map((nft) => (
            <Card key={nft.token_id} onClick={() => handleCardClick(nft)}>
              <img src={nft.image_thumbnail_url} alt={nft.name} />
              <h3>{nft.collection.name}</h3>
            </Card>
          ))}
      </CardGrid>

      {selectedNFT && (
        <ModalWrapper onClick={handleModalClose}>
          <Modal onClick={(e) => e.stopPropagation()}>
            <h2>{selectedNFT.name}</h2>
            <img src={selectedNFT.image_url} alt={selectedNFT.name} />
            <p>Description: {selectedNFT.description}</p>
            <p>Owner's address: {selectedNFT?.asset_contract?.address}</p>
            <Button onClick={handlePurchaseClick}>Purchase on OpenSea</Button>
          </Modal>
        </ModalWrapper>
      )}
    </>
  );
};

export default NFTList;
