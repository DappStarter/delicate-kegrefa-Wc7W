require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good clock bottom short blanket crater remember hole guess nasty flower section'; 
let testAccounts = [
"0x5a79a24a3be46d60ede288fbb60a6cb56692b12612382bbdea92ed2e22fbe5dc",
"0xf91adb55f6cce43198e0f23f1ed6190f7385364899dbbf0b6030756b7cf5998d",
"0xa5f593824cdf567334b91c019ebcff2f977a8418b8d89d674d51352c02c45675",
"0x0b310ff48f8a4993791f4ba994b6a70d991da81440cb3534702e4b43539c3e6c",
"0x4404316c586ec30cb732ce3f17ab206533b9a1ebdb8fd310bec9bc834a4b1e6b",
"0xb84d635a6a23e731326ef99d8219f34a0b510ef9d60768ef518c3de724c45b5f",
"0xb8fe4aaa6f551a233892270fb38cd0ba6f4e4625ed77516d5e140f6e9bd0ee7e",
"0x6d8430239bd7b210e9469afb9a86b14115b05744ca63e95d8bd2cd83d3a0cb38",
"0xadf0c6ff8810c4b43d7b24b8444cd183c29238932e7ef4e265829c189ada9c64",
"0x9e605ab7cdabd870e578ce9268046c8049e0bc8ce4b93a9c23817800375cf5d2"
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

