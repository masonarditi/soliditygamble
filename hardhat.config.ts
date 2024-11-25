import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.27",
  networks: {
    base_sepolia: {
      url: "https://sepolia.base.org",
      chainId: 84532,
      accounts: [process.env.PRIVATE_KEY!],
    },
  },
  etherscan: {
    apiKey: {
      // Replace 'baseSepolia' with the correct network name if necessary
      baseSepolia: process.env.ETHERSCAN_API_KEY || 'XKNBMJ2IB1EF98KWD5DT71E3AY42V42JHA',
    },
  },
};

export default config;
