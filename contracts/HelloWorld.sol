// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
import "hardhat/console.sol";

contract HelloWorld {
    string private greetingMessage;

    constructor() {
        greetingMessage = "Hello, World!";
        console.log("Greeting initialized to '%s'.", greetingMessage);
    }

    function greet() public view returns(string memory) {
        return greetingMessage;
    }

    function setGreeting(string memory _greeting) public {
        greetingMessage = _greeting;
        console.log("Greeting set to '%s'.", greetingMessage);
    }
}

