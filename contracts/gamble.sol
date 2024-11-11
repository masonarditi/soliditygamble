// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

contract Gamble {

    mapping (address => uint) public balance;

    event BalanceInitialized(address indexed user, uint balance);
    event BetPlaced(address indexed user, uint amount, bool won);

    function setBalance() public {
        require(balance[msg.sender] == 0, "Balance already set");
        balance[msg.sender] = 100;
        emit BalanceInitialized(msg.sender, 100);
    }

    function random() private view returns (uint) {
        return uint(keccak256(abi.encodePacked(block.timestamp, block.prevrandao, msg.sender)));
    }

    function bet(uint amount) public {
        require(amount > 0 && amount <= balance[msg.sender], "Invalid bet amount");
        bool won = random() % 2 == 0;
        if (won) {
            balance[msg.sender] += amount; // User gains their bet amount as profit
        } else {
            balance[msg.sender] -= amount;
        }
        emit BetPlaced(msg.sender, amount, won);
    }
}
