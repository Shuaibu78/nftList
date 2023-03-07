import React from "react";
import { CardGrid, Card } from "./style";

const NftCard = ({ nfts, handleCardClick }) => {
  return (
    <CardGrid>
      {/* filtered out nfts without image */}
      {nfts
        .filter((nft) => nft.image_thumbnail_url !== null)
        .map((nft) => (
          <Card key={nft.token_id} onClick={() => handleCardClick(nft)}>
            <img src={nft.image_thumbnail_url} alt={nft.name} />
            <h3>{nft.collection.name}</h3>
          </Card>
        ))}
    </CardGrid>
  );
};

export default NftCard;
