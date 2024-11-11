// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const GambleModule = buildModule("GambleModule", (m) => {
  const gamble = m.contract("Gamble");
  return { gamble };
});

export default GambleModule;
