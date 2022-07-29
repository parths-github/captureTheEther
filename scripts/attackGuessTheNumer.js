const { ethers } = require("hardhat");


async function main() {
    const GuessTheNumberChallenge = await ethers.getContractAt("GuessTheNumberChallenge", "0xE2d24B601904758019b68d4540195d630229a3b4");
    const tx = await GuessTheNumberChallenge.guess(42, {value: ethers.utils.parseEther('1')});
    await tx.wait(1);
    const confirmation = await GuessTheNumberChallenge.isComplete();
    console.log(confirmation);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error);
        process.exit(1);
    })