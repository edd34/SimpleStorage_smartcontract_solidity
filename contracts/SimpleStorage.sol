// SPDX-License-Identifier: MIT
pragma solidity =0.7.6;

contract SimpleStorage {
    string private message = "";

    constructor() {
        message = "Hello World";
    }

    function get() public view returns (string memory) {
        return message;
    }

    function set(string memory _message) public {
        message = _message;
    }
}