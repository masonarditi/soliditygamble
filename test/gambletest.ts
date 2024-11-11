const { expect } = require("chai");

describe("Gamble Contract", function () {
  it("Should initialize balance and place bets correctly", async function () {
    const { ethers } = require("hardhat");
    const [owner] = await ethers.getSigners();

    const Gamble = await ethers.getContractFactory("Gamble");
    const gamble = await Gamble.deploy();
    await gamble.deployed();

    // Initialize balance
    await gamble.setBalance();

    // Check initial balance
    let balance = await gamble.balance(owner.address);
    expect(balance).to.equal(100);

    // Place a bet
    await gamble.bet(10);

    // Check balance after bet
    balance = await gamble.balance(owner.address);
    expect(balance).to.be.within(90, 110);
  });
});
