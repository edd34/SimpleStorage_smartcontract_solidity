# SimpleStorage

SimpleStorage is the Hello World project for solidity smartcontract programming.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

I recommend you to install the following software :
* node and npm : https://nodejs.org/en/download/
* truffle : https://www.trufflesuite.com/docs/truffle/getting-started/installation
* docker : https://docs.docker.com/engine/install/
* ganache-cli : https://github.com/trufflesuite/ganache-cli

### Installing

A step by step series of examples that tell you how to get a development env running

Clone this repo :

```
$ git clone <repo URL>
```

Install the npm dependencies :

```
$ npm install
```

Start a blockchain using ganache-cli

```
$ ganache-cli
```

## Interacting with the SimpleStorage smartcontract

Open another terminal (keep the ganache-cli running).

Deploy the smartcontract in your personal blockchain :

```
$ truffle console --network development
```

Deploy the smartcontract in your personal blockchain :

```
truffle(development)> migrate --reset

truffle(development)> let instance = await SimpleStorage.deployed()

truffle(development)> await instace.set("Hello world")

truffle(development)> let message = await instance.get()

truffle(development)> console.log(message)

truffle(development)> "Hello world"
```

## Running the tests

In order to run the test, we are going, run the command :

`$ truffle test --network development`

```
Using network 'development'.


Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.



  Contract: SimpleStorage
    ✓ should change message to 'Hello Blockchain' (156ms)


  1 passing (231ms)


```

### Break down into end to end tests

Below is how the tests are implemented :

```typescript
contract("SimpleStorage", () => {
    it("should change message to 'Hello Blockchain'", async () => {
        let instance = await SimpleStorage.deployed();
        await instance.set("Salut");
        let instance_get = await instance.get();
        assert.equal(instance_get, "Salut");
    }
    )
})
```

### Linte

First install solhint :

```
npm install -g solhint
```

In order to run linting :

```
solhint contracts/*.sol
```

## Deployment

TBD

## Contributing

Contributions are welcomed, please send a PR.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **edd34** - *Initial work* - [PurpleBooth](https://github.com/edd34)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
