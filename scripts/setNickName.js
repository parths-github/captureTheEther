const { ethers } = require("hardhat");



async function main() {
    const nickNameContract = await ethers.getContractAt('CaptureTheEther', "0x71c46Ed333C35e4E6c62D32dc7C8F00D125b4fee");
    const name = ethers.utils.formatBytes32String("NemVeer");
    console.log(nickNameContract.address, name);
    const setNickName = await nickNameContract.setNickname(name);
    // await setNickName.wait(0);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error);
        process.exit(1);
    })