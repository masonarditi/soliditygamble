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
      accounts: [process.env.PRIVATE_KEY!]
    }
  },
};

export default config;
