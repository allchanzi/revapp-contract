const RevApp = artifacts.require("./RevApp.sol");

const sleep = ms => new Promise(res => setTimeout(res, ms));
contract("RevApp", accounts => {
  it("getTimestampValue", async function () {
    const instance = await RevApp.new()
    for (let i = 0; i < 100; i++) {
      instance.getTimestampValue().then(result => {
        console.log(result.toNumber());
      })
      await sleep(1000);
    }
  })
})