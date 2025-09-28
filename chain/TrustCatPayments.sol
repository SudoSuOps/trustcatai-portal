// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.20;

interface IERC20 {
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
    function decimals() external view returns (uint8);
}

contract TrustCatPayments {
    address public owner;
    IERC20 public usdc;

    event PaymentRecorded(address indexed payer, bytes32 indexed documentHash, uint256 amount);

    constructor(address usdcAddress) {
        owner = msg.sender;
        usdc = IERC20(usdcAddress);
    }

    function payForDocument(bytes32 documentHash, uint256 amount) external {
        require(amount > 0, "Amount must be > 0");
        bool success = usdc.transferFrom(msg.sender, owner, amount);
        require(success, "USDC transfer failed");
        emit PaymentRecorded(msg.sender, documentHash, amount);
    }
}
