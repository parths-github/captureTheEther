const { ethers } = require("hardhat");


async function main() {
    const GuessTheNumberChallenge = await ethers.getContractAt("GuessTheRandomNumberChallenge", "0x070c082a08874f5E3630F0235718Ad530A2dc120");
    const answer = await ethers.provider.getStorageAt(GuessTheNumberChallenge.address, 0);
    const tx = await GuessTheNumberChallenge.guess(answer, {value: ethers.utils.parseEther('1')});
    await tx.wait();
    const confirmation = await GuessTheNumberChallenge.isComplete();
    console.log(confirmation);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error);
        process.exit(1);
    })