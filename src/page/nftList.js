import React, { useState, useEffect } from "react";
import { Center, ModalWrapper, Modal, Button } from "./style";
import NftCard from "../components/nftCard/nftCard";
import ClipLoader from "react-spinners/ClipLoader";
import NftModal from "../components/nftModal/nftModal";

const NFTList = ({ address }) => {
  const [nfts, setNfts] = useState([]);
  const [selectedNFT, setSelectedNFT] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.opensea.io/api/v1/assets?owner=${address}`)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setNfts(data.assets);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  }, [address]);

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
    <div>
      <Center loading={loading}>
        <ClipLoader
          color="blue"
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </Center>
      {nfts.length > 0 ? (
        <NftCard nfts={nfts} handleCardClick={handleCardClick} />
      ) : (
        <Center loading={true}>
          No result found. please check your network
        </Center>
      )}
      {selectedNFT && (
        <NftModal
          selectedNFT={selectedNFT}
          handleModalClose={handleModalClose}
          handlePurchaseClick={handlePurchaseClick}
        />
      )}
    </div>
  );
};

export default NFTList;
