export enum Networks {
  mainnet = "mainnet",
  rinkeby = "rinkeby",
  ropsten = "ropsten",
  polygon = "polygon",
  optimism = "optimism",
  optimismTestnet = "optimismTestnet",
}

export type EtherscanApiKeys = {
  [Network in Networks]?: string;
};

export interface EtherscanConfig {
  apiKey?: string | EtherscanApiKeys;
}
