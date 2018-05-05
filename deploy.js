const HDWalletProvider = require('truffle-hdwallet-provider')
const Web3 = require('web3')
const {interface, bytecode} = require('./compile')

const provider = new HDWalletProvider(
    'legend ramp essence scene napkin banana matter recipe panel reduce rice gasp',
    'https://rinkeby.infura.io/qzE3rh6MehMkfQ82sPby'
)

const web3 = new Web3(provider)

const deploy = async () => {
    const accounts = await web3.eth.getAccounts()
    console.log(accounts[0])
    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: '0x' + bytecode})
        .send({from: accounts[0], gas: '1000000'})
    result.setProvider(provider)
    console.log('deployed to', result.options.address)
}

deploy()