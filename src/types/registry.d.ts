// To parse this data:
//
//   import { Convert, TheGraphNetworksRegistrySchema } from "./file";
//
//   const TheGraphNetworksRegistrySchema = Convert.toTheGraphNetworksRegistrySchema(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface TheGraphNetworksRegistrySchema {
  /**
   * Reference to this schema file
   */
  $schema: string;
  description: string;
  /**
   * List of networks
   */
  networks: Network[];
  title: string;
  /**
   * Date and time of the last update
   */
  updatedAt: Date;
  /**
   * Version of the registry
   */
  version: string;
}

export interface Network {
  /**
   * [optional] List of possible aliases for the network id, e.g. ethereum, eth, mainnet,
   * eth-mainnet
   */
  aliases?: string[];
  /**
   * List of API URLs for the network, i.e. Etherescan-like API to get ABI. Use
   * {CUSTOM_API_KEY} as a placeholder for a private API key
   */
  apiUrls?: APIURL[];
  /**
   * CAIP-2 Chain ID, e.g. eip155:1, bip122:000000000019d6689c085ae165831e93
   */
  caip2Id: string;
  /**
   * URL to the chain documentation
   */
  docsUrl?: string;
  /**
   * URLs for the block explorers
   */
  explorerUrls?: string[];
  /**
   * Firehose block information
   */
  firehose?: Firehose;
  /**
   * Display name of the network, e.g. Ethereum Mainnet, Bitcoin Testnet
   */
  fullName: string;
  /**
   * Genesis block information
   */
  genesis?: Genesis;
  /**
   * Graph Node specific configuration information
   */
  graphNode?: GraphNode;
  /**
   * Icons for the network
   */
  icon?: Icon;
  /**
   * Established name of the network in The Graph ecosystem, e.g. mainnet, btc,
   * arweave-mainnet, near-testnet
   */
  id: string;
  /**
   * Documentation to run indexer components for this network
   */
  indexerDocsUrls?: IndexerDocsURL[];
  /**
   * Issuance rewards on the Graph Network for this chain
   */
  issuanceRewards: boolean;
  /**
   * Symbol of the native token
   */
  nativeToken?: string;
  /**
   * Whether the network is a mainnet/testnet/devnet
   */
  networkType: NetworkType;
  /**
   * Relations to other networks in the registry
   */
  relations?: Relation[];
  /**
   * List of RPC URLs for the chain. Use {CUSTOM_API_KEY} as a placeholder for a private API
   * key
   */
  rpcUrls?: string[];
  /**
   * Second display name of the network, e.g. Sepolia, Nova
   */
  secondName?: string;
  /**
   * Services available for the network in the ecosystem
   */
  services: Services;
  /**
   * Short display name of the network, e.g. Ethereum, BNB
   */
  shortName: string;
}

export interface APIURL {
  /**
   * Kind of API
   */
  kind: APIURLKind;
  url: string;
}

/**
 * Kind of API
 */
export enum APIURLKind {
  Blockscout = "blockscout",
  Etherscan = "etherscan",
  Ethplorer = "ethplorer",
  Other = "other",
  Subscan = "subscan",
}

/**
 * Firehose block information
 */
export interface Firehose {
  /**
   * Block type, e.g. sf.ethereum.type.v2.Block
   */
  blockType: string;
  /**
   * Protobuf definitions on buf.build, e.g. https://buf.build/streamingfast/firehose-ethereum
   */
  bufUrl: string;
  /**
   * Bytes encoding, e.g. hex, 0xhex, base58
   */
  bytesEncoding: BytesEncoding;
  /**
   * [optional] Whether there is support for extended EVM block model
   */
  evmExtendedModel?: boolean;
}

/**
 * Bytes encoding, e.g. hex, 0xhex, base58
 */
export enum BytesEncoding {
  Base58 = "base58",
  Base64 = "base64",
  Hex = "hex",
  Other = "other",
  The0Xhex = "0xhex",
}

/**
 * Genesis block information
 */
export interface Genesis {
  /**
   * Hash of the genesis block either in 0x-prefixed hex or base58
   */
  hash: string;
  /**
   * Block height of the genesis or the first available block
   */
  height: number;
}

/**
 * Graph Node specific configuration information
 */
export interface GraphNode {
  /**
   * [optional] Protocol name in graph-node, e.g. ethereum, near, arweave
   */
  protocol?: Protocol;
}

/**
 * [optional] Protocol name in graph-node, e.g. ethereum, near, arweave
 */
export enum Protocol {
  Arweave = "arweave",
  Cosmos = "cosmos",
  Ethereum = "ethereum",
  Near = "near",
  Other = "other",
  Starknet = "starknet",
}

/**
 * Icons for the network
 */
export interface Icon {
  /**
   * Web3Icons icon - see https://github.com/0xa3k5/web3icons
   */
  web3Icons?: Web3Icons;
}

/**
 * Web3Icons icon - see https://github.com/0xa3k5/web3icons
 */
export interface Web3Icons {
  /**
   * Web3Icons icon ID
   */
  name: string;
  /**
   * Variants of the icon, if none specified - all are available
   */
  variants?: string[];
}

export interface IndexerDocsURL {
  /**
   * Docs description, e.g. Arbitrum 101
   */
  description?: string;
  /**
   * URL to the documentation, e.g. https://docs.infradao.com/archive-nodes-101/arbitrum
   */
  url: string;
}

/**
 * Whether the network is a mainnet/testnet/devnet
 */
export enum NetworkType {
  Devnet = "devnet",
  Mainnet = "mainnet",
  Testnet = "testnet",
}

export interface Relation {
  /**
   * Kind of relation
   */
  kind: RelationKind;
  /**
   * ID of the related network, e.g. mainnet, near-mainnet
   */
  network: string;
}

/**
 * Kind of relation
 */
export enum RelationKind {
  BeaconOf = "beaconOf",
  EvmOf = "evmOf",
  ForkedFrom = "forkedFrom",
  L2Of = "l2Of",
  Other = "other",
  ShardOf = "shardOf",
  TestnetOf = "testnetOf",
}

/**
 * Services available for the network in the ecosystem
 */
export interface Services {
  /**
   * Firehose gRPC URLs, e.g. eth.firehose.pinax.network:443
   */
  firehose?: string[];
  /**
   * Substreams-based subgraphs studio deployment URLs, e.g. https://api.thegraph.com/deploy
   */
  sps?: string[];
  /**
   * Subgraph studio deployment URLs, e.g. https://api.thegraph.com/deploy
   */
  subgraphs?: string[];
  /**
   * Substreams gRPC URLs, e.g. eth.substreams.pinax.network:443
   */
  substreams?: string[];
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
  public static toTheGraphNetworksRegistrySchema(
    json: string
  ): TheGraphNetworksRegistrySchema {
    return cast(JSON.parse(json), r("TheGraphNetworksRegistrySchema"));
  }

  public static TheGraphNetworksRegistrySchemaToJson(
    value: TheGraphNetworksRegistrySchema
  ): string {
    return JSON.stringify(
      uncast(value, r("TheGraphNetworksRegistrySchema")),
      null,
      2
    );
  }
}
