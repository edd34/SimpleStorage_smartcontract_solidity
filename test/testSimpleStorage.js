const { assert } = require("chai");

const SimpleStorage = artifacts.require("SimpleStorage");
contract("SimpleStorage", () => {
    it("should change message to 'Hello Blockchain'", async () => {
        let instance = await SimpleStorage.deployed();
        await instance.set("Salut");
        let instance_get = await instance.get();
        assert.equal(instance_get, "Salut");
    }
    )
})