const { ethers } = require("hardhat");


async function main() {
    const HASH = "0xdb81b4d58595fbbbb592d3661a34cdca14d7ab379441400cbfa1b78bc447c365";
    const GuessTheNumberChallenge = await ethers.getContractAt("GuessTheSecretNumberChallenge", "0x1590De60A1Bbaf231421Fc9588FA3f68Be3E3505");
    for (let i = 0; i < 2 ** 8; i++) {
        if(ethers.utils.keccak256(i) == HASH) {
           let tx = await GuessTheNumberChallenge.guess(i, {value: ethers.utils.parseEther('1')});
           await tx.wait();
        }
    }
    
    const confirmation = await GuessTheNumberChallenge.isComplete();
    console.log(confirmation);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error);
        process.exit(1);
    })