import type { NextApiRequest, NextApiResponse } from 'next';
import { polygonApi } from 'services/axios';
import { IReceivedNft } from 'types/nfts';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const apiKey = process.env.ALCHEMY_API_KEY;
  const ownerAddr = '0xBF7BF3d445aEc7B0c357163d5594DB8ca7C12D31';
  const { data } = await polygonApi.get(
    `/${apiKey}/getNFTs?owner=${ownerAddr}`
  );

  const { ownedNfts }: IReceivedNft = data;

  const collections = ownedNfts.map((nft) => nft.title.split(' #')[0]);

  let filteredCollections: any = [];

  collections.forEach((collection) => {
    if (!filteredCollections.includes(collection)) {
      filteredCollections.push(collection);
    }
  });

  const nfts = filteredCollections.map((collection: any) => ({
    collectionName: collection.includes('#') ? '-' : collection,
    openseaUrl: `https://opensea.io/collection/${collection
      .replace(' ', '-')
      .toLowerCase()}`,
    nfts: ownedNfts
      .filter((nft) => nft.title.split(' #')[0] === collection)
      .map((nft) => ({
        title: nft.title,
        number: nft.title.split(' #')[1],
        description: nft.description,
        contract: nft.contract.address,
        image: nft.media[0].gateway,
        id: nft.metadata.dna,
        openseaUrl: `https://opensea.io/assets/matic/${nft.contract.address}/${
          nft.title.split(' #')[1]
        }`,
      })),
  }));

  res.status(200).json(nfts);
};
