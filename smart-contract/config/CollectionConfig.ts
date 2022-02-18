import CollectionConfigInterface from "../lib/CollectionConfigInterface";
import whitelistAddresses from "./whitelist.json";

const CollectionConfig: CollectionConfigInterface = {
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: "testapes",
  tokenName: "testapes",
  tokenSymbol: "HOOGA",
  hiddenMetadataUri:
    "ipfs://QmQmhnjjniDwmNXFDTRKMMUfmxZDJSyxNft4MdgnBGznWH/hidden.json",
  maxSupply: 20,
  whitelistSale: {
    price: 0.01,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.02,
    maxMintAmountPerTx: 1,
  },
  publicSale: {
    price: 0.03,
    maxMintAmountPerTx: 1,
  },
  contractAddress: "0x1aabd4c5501c8740c53c598c7a2baa5a1ed7fd09",
  openSeaSlug: "my-nft-token",
  whitelistAddresses: whitelistAddresses,
};

export default CollectionConfig;
