//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MysteryBox is ERC721URIStorage, Ownable{
    constructor() ERC721("Mystery Box", "MBX") Ownable(msg.sender){}
    uint256 public tokenIdCounter;

    string[4] public tokenToHashMappings = ["https://crimson-immediate-cricket-188.mypinata.cloud/ipfs/bafkreibghwtv5lfiphv4dxsywdzem7lgdbifbeszhnvyxl3xuryedss6la", 
    "https://crimson-immediate-cricket-188.mypinata.cloud/ipfs/bafkreihomwfyxtp5fo37o4osnorl6iltxl4sobujbq5jta33zjuj4bdzgi",
    "https://crimson-immediate-cricket-188.mypinata.cloud/ipfs/bafkreia6tfi6xkujquwki2jg5anmb67qncgyrgg7rddq6ofzpjh4tmgqsu",
    "https://crimson-immediate-cricket-188.mypinata.cloud/ipfs/bafkreicz3rz2impao2qlorfetc727y5jj653zmzzoamzqiih5wiz3pgq6e"];

    function createNFT(uint256 _index) public{
        tokenIdCounter++;
        _mint(msg.sender, tokenIdCounter);
        _setTokenURI(tokenIdCounter, tokenToHashMappings[_index]);
    }
}