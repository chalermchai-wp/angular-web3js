
import { Injectable } from '@angular/core';
import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  private web3js: any;
  private provider: any;
  private accounts: any;
  web3Modal

  private accountStatusSource = new Subject<any>();
  accountStatus$ = this.accountStatusSource.asObservable();

  constructor() {
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider, // required
        options: {
          infuraId: "5d4637f1535047e8a6b3e0d6e4b8f740" // required
        }
      }
    };

    this.web3Modal = new Web3Modal({
      network: "Smart Chain - Testnet", // optional
      cacheProvider: true, // optional
      providerOptions, // required
      theme: {
        background: "rgb(39, 49, 56)",
        main: "rgb(199, 199, 199)",
        secondary: "rgb(136, 136, 136)",
        border: "rgba(195, 195, 195, 0.14)",
        hover: "rgb(16, 26, 32)"
      }
    });
  }

  async connectAccount() {
    this.web3Modal.clearCachedProvider();

    this.provider = await this.web3Modal.connect(); // set provider
    this.web3js = new Web3(this.provider); // create web3 instance
    this.accounts = await this.web3js.eth.getAccounts(); 
    this.accountStatusSource.next(this.accounts)
  }

}

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import Web3 from 'web3';
// import http from 'http';
// import https from 'https';

// declare let window:any;


// @Injectable({
//   providedIn: 'root',
// })
// export class ContractService {

//   web3: any;
//   accounts: Array<String>;

//   async loadWeb3() {
//     if (window.ethereum) {
//         window.web3 = new Web3(window.ethereum);
//         await window.ethereum.enable;
//     } else if (window.web3) {
//         window.web3 = new Web3(window.web3.currentProvider);
//     } else {
//         window.alert('Non-Ethereum browser detected. You Should consider using MetaMask!');
//     }
//   }
//   // private web3: Web3;

//   constructor(private http: HttpClient) {
//     this.accounts = []
//     // this.web3 = new Web3();
//     // HttpProvider
//     // this.web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545');
    
//     // this.web3 = new Web3('https://bsc-dataseed1.binance.org:443');
//   }

//   logThings() {

//     // this.web3.

//     // const provider = Web3.setPr
//     // const web3 = new Web3(Web3.givenProvider);
//     // console.log(web3);

//     // console.log(web3.setProvider('https://bsc-dataseed1.binance.org:443'));
//       // web3 = new Web3(web3.currentProvider)
//     // web

//     // const alreadyInjected = typeof web3 !== 'undefined' // i.e. Mist/Metamask
//     // const localProvider = `http://localhost:9545`

//     // if (alreadyInjected) {
//     //   console.log(`Injected web3 detected.`)
//     //   web3 = new Web3(web3.currentProvider)
//     // } else {
//     //   console.log(`No web3 instance injected, using Local web3.`)
//     //   const provider = new Web3.providers.HttpProvider(localProvider)
//     //   web3 = new Web3(provider)
//     // }

//     // const userAgent = window.navigator.userAgent;
//     // console.log(userAgent);

//     // new https.Agent({ keepAlive: true });

//     // (async () => {
      
      
//       // const web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545/')
//       // ^ Your original Client URL
//     //   const web3 = new Web3('https://bsc-dataseed1.binance.org:443');
//     //   const contract = new web3.eth.Contract(
//     //     [
//     //       { inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
//     //       {
//     //         anonymous: false,
//     //         inputs: [
//     //           {
//     //             indexed: true,
//     //             internalType: 'address',
//     //             name: 'owner',
//     //             type: 'address',
//     //           },
//     //           {
//     //             indexed: true,
//     //             internalType: 'address',
//     //             name: 'spender',
//     //             type: 'address',
//     //           },
//     //           {
//     //             indexed: false,
//     //             internalType: 'uint256',
//     //             name: 'value',
//     //             type: 'uint256',
//     //           },
//     //         ],
//     //         name: 'Approval',
//     //         type: 'event',
//     //       },
//     //       {
//     //         anonymous: false,
//     //         inputs: [
//     //           {
//     //             indexed: true,
//     //             internalType: 'address',
//     //             name: 'previousOwner',
//     //             type: 'address',
//     //           },
//     //           {
//     //             indexed: true,
//     //             internalType: 'address',
//     //             name: 'newOwner',
//     //             type: 'address',
//     //           },
//     //         ],
//     //         name: 'OwnershipTransferred',
//     //         type: 'event',
//     //       },
//     //       {
//     //         anonymous: false,
//     //         inputs: [
//     //           {
//     //             indexed: false,
//     //             internalType: 'address',
//     //             name: 'account',
//     //             type: 'address',
//     //           },
//     //         ],
//     //         name: 'Paused',
//     //         type: 'event',
//     //       },
//     //       {
//     //         anonymous: false,
//     //         inputs: [
//     //           {
//     //             indexed: true,
//     //             internalType: 'bytes32',
//     //             name: 'role',
//     //             type: 'bytes32',
//     //           },
//     //           {
//     //             indexed: true,
//     //             internalType: 'bytes32',
//     //             name: 'previousAdminRole',
//     //             type: 'bytes32',
//     //           },
//     //           {
//     //             indexed: true,
//     //             internalType: 'bytes32',
//     //             name: 'newAdminRole',
//     //             type: 'bytes32',
//     //           },
//     //         ],
//     //         name: 'RoleAdminChanged',
//     //         type: 'event',
//     //       },
//     //       {
//     //         anonymous: false,
//     //         inputs: [
//     //           {
//     //             indexed: true,
//     //             internalType: 'bytes32',
//     //             name: 'role',
//     //             type: 'bytes32',
//     //           },
//     //           {
//     //             indexed: true,
//     //             internalType: 'address',
//     //             name: 'account',
//     //             type: 'address',
//     //           },
//     //           {
//     //             indexed: true,
//     //             internalType: 'address',
//     //             name: 'sender',
//     //             type: 'address',
//     //           },
//     //         ],
//     //         name: 'RoleGranted',
//     //         type: 'event',
//     //       },
//     //       {
//     //         anonymous: false,
//     //         inputs: [
//     //           {
//     //             indexed: true,
//     //             internalType: 'bytes32',
//     //             name: 'role',
//     //             type: 'bytes32',
//     //           },
//     //           {
//     //             indexed: true,
//     //             internalType: 'address',
//     //             name: 'account',
//     //             type: 'address',
//     //           },
//     //           {
//     //             indexed: true,
//     //             internalType: 'address',
//     //             name: 'sender',
//     //             type: 'address',
//     //           },
//     //         ],
//     //         name: 'RoleRevoked',
//     //         type: 'event',
//     //       },
//     //       {
//     //         anonymous: false,
//     //         inputs: [
//     //           {
//     //             indexed: true,
//     //             internalType: 'address',
//     //             name: 'from',
//     //             type: 'address',
//     //           },
//     //           {
//     //             indexed: true,
//     //             internalType: 'address',
//     //             name: 'to',
//     //             type: 'address',
//     //           },
//     //           {
//     //             indexed: false,
//     //             internalType: 'uint256',
//     //             name: 'value',
//     //             type: 'uint256',
//     //           },
//     //         ],
//     //         name: 'Transfer',
//     //         type: 'event',
//     //       },
//     //       {
//     //         anonymous: false,
//     //         inputs: [
//     //           {
//     //             indexed: false,
//     //             internalType: 'address',
//     //             name: 'account',
//     //             type: 'address',
//     //           },
//     //         ],
//     //         name: 'Unpaused',
//     //         type: 'event',
//     //       },
//     //       {
//     //         inputs: [],
//     //         name: 'DEFAULT_ADMIN_ROLE',
//     //         outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
//     //         stateMutability: 'view',
//     //         type: 'function',
//     //       },
//     //       {
//     //         inputs: [],
//     //         name: 'MINTER_ROLE',
//     //         outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
//     //         stateMutability: 'view',
//     //         type: 'function',
//     //       },
//     //       {
//     //         inputs: [],
//     //         name: 'PAUSER_ROLE',
//     //         outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
//     //         stateMutability: 'view',
//     //         type: 'function',
//     //       },
//     //       {
//     //         inputs: [],
//     //         name: '_decimals',
//     //         outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
//     //         stateMutability: 'view',
//     //         type: 'function',
//     //       },
//     //       {
//     //         inputs: [],
//     //         name: '_name',
//     //         outputs: [{ internalType: 'string', name: '', type: 'string' }],
//     //         stateMutability: 'view',
//     //         type: 'function',
//     //       },
//     //       {
//     //         inputs: [],
//     //         name: '_symbol',
//     //         outputs: [{ internalType: 'string', name: '', type: 'string' }],
//     //         stateMutability: 'view',
//     //         type: 'function',
//     //       },
//     //       {
//     //         inputs: [
//     //           { internalType: 'address', name: 'owner', type: 'address' },
//     //           { internalType: 'address', name: 'spender', type: 'address' },
//     //         ],
//     //         name: 'allowance',
//     //         outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
//     //         stateMutability: 'view',
//     //         type: 'function',
//     //       },
//     //       {
//     //         inputs: [
//     //           { internalType: 'address', name: 'spender', type: 'address' },
//     //           { internalType: 'uint256', name: 'amount', type: 'uint256' },
//     //         ],
//     //         name: 'approve',
//     //         outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
//     //         stateMutability: 'nonpayable',
//     //         type: 'function',
//     //       },
//     //       {
//     //         inputs: [
//     //           { internalType: 'address', name: 'account', type: 'address' },
//     //         ],
//     //         name: 'balanceOf',
//     //         outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
//     //         stateMutability: 'view',
//     //         type: 'function',
//     //       },
//     //       {
//     //         inputs: [
//     //           { internalType: 'uint256', name: 'amount', type: 'uint256' },
//     //         ],
//     //         name: 'burn',
//     //         outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
//     //         stateMutability: 'nonpayable',
//     //         type: 'function',
//     //       },
//     //       {
//     //         inputs: [],
//     //         name: 'decimals',
//     //         outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
//     //         stateMutability: 'view',
//     //         type: 'function',
//     //       },
//     //       {
//     //         inputs: [
//     //           { internalType: 'address', name: 'spender', type: 'address' },
//     //           {
//     //             internalType: 'uint256',
//     //             name: 'subtractedValue',
//     //             type: 'uint256',
//     //           },
//     //         ],
//     //         name: 'decreaseAllowance',
//     //         outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
//     //         stateMutability: 'nonpayable',
//     //         type: 'function',
//     //       },
//     //       {
//     //         inputs: [],
//     //         name: 'getOwner',
//     //         outputs: [{ internalType: 'address', name: '', type: 'address' }],
//     //         stateMutability: 'view',
//     //         type: 'function',
//     //       },
//     //       {
//     //         inputs: [
//     //           { internalType: 'bytes32', name: 'role', type: 'bytes32' },
//     //         ],
//     //         name: 'getRoleAdmin',
//     //         outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
//     //         stateMutability: 'view',
//     //         type: 'function',
//     //       },
//     //       {
//     //         inputs: [
//     //           { internalType: 'bytes32', name: 'role', type: 'bytes32' },
//     //           { internalType: 'address', name: 'account', type: 'address' },
//     //         ],
//     //         name: 'grantRole',
//     //         outputs: [],
//     //         stateMutability: 'nonpayable',
//     //         type: 'function',
//     //       },
//     //       {
//     //         inputs: [
//     //           { internalType: 'bytes32', name: 'role', type: 'bytes32' },
//     //           { internalType: 'address', name: 'account', type: 'address' },
//     //         ],
//     //         name: 'hasRole',
//     //         outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
//     //         stateMutability: 'view',
//     //         type: 'function',
//     //       },
//     //       {
//     //         inputs: [
//     //           { internalType: 'address', name: 'spender', type: 'address' },
//     //           { internalType: 'uint256', name: 'addedValue', type: 'uint256' },
//     //         ],
//     //         name: 'increaseAllowance',
//     //         outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
//     //         stateMutability: 'nonpayable',
//     //         type: 'function',
//     //       },
//     //       {
//     //         inputs: [
//     //           { internalType: 'uint256', name: 'amount', type: 'uint256' },
//     //         ],
//     //         name: 'mint',
//     //         outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
//     //         stateMutability: 'nonpayable',
//     //         type: 'function',
//     //       },
//     //       {
//     //         inputs: [],
//     //         name: 'name',
//     //         outputs: [{ internalType: 'string', name: '', type: 'string' }],
//     //         stateMutability: 'view',
//     //         type: 'function',
//     //       },
//     //       {
//     //         inputs: [],
//     //         name: 'owner',
//     //         outputs: [{ internalType: 'address', name: '', type: 'address' }],
//     //         stateMutability: 'view',
//     //         type: 'function',
//     //       },
//     //       {
//     //         inputs: [],
//     //         name: 'pause',
//     //         outputs: [],
//     //         stateMutability: 'nonpayable',
//     //         type: 'function',
//     //       },
//     //       {
//     //         inputs: [],
//     //         name: 'paused',
//     //         outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
//     //         stateMutability: 'view',
//     //         type: 'function',
//     //       },
//     //       {
//     //         inputs: [],
//     //         name: 'renounceOwnership',
//     //         outputs: [],
//     //         stateMutability: 'nonpayable',
//     //         type: 'function',
//     //       },
//     //       {
//     //         inputs: [
//     //           { internalType: 'bytes32', name: 'role', type: 'bytes32' },
//     //           { internalType: 'address', name: 'account', type: 'address' },
//     //         ],
//     //         name: 'renounceRole',
//     //         outputs: [],
//     //         stateMutability: 'nonpayable',
//     //         type: 'function',
//     //       },
//     //       {
//     //         inputs: [
//     //           { internalType: 'bytes32', name: 'role', type: 'bytes32' },
//     //           { internalType: 'address', name: 'account', type: 'address' },
//     //         ],
//     //         name: 'revokeRole',
//     //         outputs: [],
//     //         stateMutability: 'nonpayable',
//     //         type: 'function',
//     //       },
//     //       {
//     //         inputs: [
//     //           { internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' },
//     //         ],
//     //         name: 'supportsInterface',
//     //         outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
//     //         stateMutability: 'view',
//     //         type: 'function',
//     //       },
//     //       {
//     //         inputs: [],
//     //         name: 'symbol',
//     //         outputs: [{ internalType: 'string', name: '', type: 'string' }],
//     //         stateMutability: 'view',
//     //         type: 'function',
//     //       },
//     //       {
//     //         inputs: [],
//     //         name: 'totalSupply',
//     //         outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
//     //         stateMutability: 'view',
//     //         type: 'function',
//     //       },
//     //       {
//     //         inputs: [
//     //           { internalType: 'address', name: 'recipient', type: 'address' },
//     //           { internalType: 'uint256', name: 'amount', type: 'uint256' },
//     //         ],
//     //         name: 'transfer',
//     //         outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
//     //         stateMutability: 'nonpayable',
//     //         type: 'function',
//     //       },
//     //       {
//     //         inputs: [
//     //           { internalType: 'address', name: 'sender', type: 'address' },
//     //           { internalType: 'address', name: 'recipient', type: 'address' },
//     //           { internalType: 'uint256', name: 'amount', type: 'uint256' },
//     //         ],
//     //         name: 'transferFrom',
//     //         outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
//     //         stateMutability: 'nonpayable',
//     //         type: 'function',
//     //       },
//     //       {
//     //         inputs: [
//     //           { internalType: 'address', name: 'newOwner', type: 'address' },
//     //         ],
//     //         name: 'transferOwnership',
//     //         outputs: [],
//     //         stateMutability: 'nonpayable',
//     //         type: 'function',
//     //       },
//     //       {
//     //         inputs: [],
//     //         name: 'unpause',
//     //         outputs: [],
//     //         stateMutability: 'nonpayable',
//     //         type: 'function',
//     //       },
//     //     ],
//     //     '0x99956D38059cf7bEDA96Ec91Aa7BB2477E0901DD'
//     //   );

//     //   console.log(await contract.methods.getOwner().call());
//     // })();

//     // const localProvider = `http://bsc-dataseed1.binance.org:443`;
//     // const provider = new Web3.providers.HttpProvider(localProvider);

//     // const web3_bsc = new Web3(provider);
//     // console.log(web3_bsc);
//     // return web3_bsc;
//     // console.log(this.web3);
//   }

//   getGoogle() {
//     return this.http.get<any>('/test/google');
//   }
// }
