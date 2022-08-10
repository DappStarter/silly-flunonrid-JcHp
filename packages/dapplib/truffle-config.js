require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter brand venture stool curtain stick social hover nation flip gesture'; 
let testAccounts = [
"0xe7d2af76e9d11a805c0af02506b74c790081fa02415e7bd137ed8f31a4b61289",
"0x68ca7e77b363ea3eb8e8d5de65d8bc2f0a9e3961a10ea40af06f77bc307704cd",
"0x0299ca12949f249d24aeb00c318e6aa35a461edbbf3162acb74a200bc47224c0",
"0x8edfd3a5ad632ad35ae1b0dc00e7f84281ab6e870086afa6aa3a9b0de6abe609",
"0x4a66e2503ef167cdf6dd2191cf4deb070f54cda42a16fbe3f663786996989f00",
"0xbb8a0a39ec66aa2095c5ac2749bc79faed3b1ce029d80a051cefe6e588a4e1c2",
"0x987134e6fdcd2f0576d9206b11b962af2c07429d837d1833c4026aebf4d09d51",
"0x1c44177d7edf0a86b6bfc82d380068afe128a4902f70af26679a779b10089f84",
"0x6e054c0f86734a0c359a5aca397267317bd336d5430dae57eecc9c70e07bccb4",
"0x38980880c08aba214887cccc6d111e701157df8ae4770caac94208dddbab0ad2"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

