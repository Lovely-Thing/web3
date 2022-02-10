import { WalletConfig, Connectors } from './types';

const config: WalletConfig = {
    defaultConnector: Connectors.INJECTED,
    chainId: 1,
    showBSCWallet: true,
    darkMode: false,
    walletConnectPoolingInterval: 12000,
    rpcUrl: 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
    supportedChainIds: [1, 4, 42],
    unsupportedChainSetup: {
        97: {
            chainId: `0x61`,
            chainName: 'Binance Smart Chain Testnet',
            nativeCurrency: {
                name: 'BNB',
                symbol: 'bnb',
                decimals: 18,
            },
            rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
            blockExplorerUrls: ['https://testnet.bscscan.com'],
        },
        56: {
            chainId: `0x38`,
            chainName: 'Binance Smart Chain Mainnet',
            nativeCurrency: {
                name: 'BNB',
                symbol: 'bnb',
                decimals: 18,
            },
            rpcUrls: ['https://bsc-dataseed.binance.org/'],
            blockExplorerUrls: ['https://bscscan.com/'],
        },
    }
}

export default config;