const address = "0x3d9819210A31b4961b30EF54bE2aeD79B9c9Cd3B"
const abi = [
  {
      "constant": true,
      "inputs": [],
      "name": "pendingAdmin",
      "outputs": [
          {
              "name": "",
              "type": "address"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x26782247"
  },
  {
      "constant": false,
      "inputs": [
          {
              "name": "newPendingAdmin",
              "type": "address"
          }
      ],
      "name": "_setPendingAdmin",
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xb71d1a0c"
  },
  {
      "constant": false,
      "inputs": [],
      "name": "_acceptImplementation",
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xc1e80334"
  },
  {
      "constant": true,
      "inputs": [],
      "name": "pendingComptrollerImplementation",
      "outputs": [
          {
              "name": "",
              "type": "address"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xdcfbc0c7"
  },
  {
      "constant": false,
      "inputs": [
          {
              "name": "newPendingImplementation",
              "type": "address"
          }
      ],
      "name": "_setPendingImplementation",
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xe992a041"
  },
  {
      "constant": false,
      "inputs": [],
      "name": "_acceptAdmin",
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xe9c714f2"
  },
  {
      "constant": true,
      "inputs": [],
      "name": "admin",
      "outputs": [
          {
              "name": "",
              "type": "address"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xf851a440"
  },
  {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor",
      "signature": "constructor"
  },
  {
      "payable": true,
      "stateMutability": "payable",
      "type": "fallback"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": false,
              "name": "oldPendingImplementation",
              "type": "address"
          },
          {
              "indexed": false,
              "name": "newPendingImplementation",
              "type": "address"
          }
      ],
      "name": "NewPendingImplementation",
      "type": "event",
      "signature": "0xe945ccee5d701fc83f9b8aa8ca94ea4219ec1fcbd4f4cab4f0ea57c5c3e1d815"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": false,
              "name": "oldImplementation",
              "type": "address"
          },
          {
              "indexed": false,
              "name": "newImplementation",
              "type": "address"
          }
      ],
      "name": "NewImplementation",
      "type": "event",
      "signature": "0xd604de94d45953f9138079ec1b82d533cb2160c906d1076d1f7ed54befbca97a"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": false,
              "name": "oldAdmin",
              "type": "address"
          },
          {
              "indexed": false,
              "name": "newAdmin",
              "type": "address"
          }
      ],
      "name": "NewAdmin",
      "type": "event",
      "signature": "0xf9ffabca9c8276e99321725bcb43fb076a6c66a54b7f21c4e8146d8519b417dc"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": false,
              "name": "error",
              "type": "uint256"
          },
          {
              "indexed": false,
              "name": "info",
              "type": "uint256"
          },
          {
              "indexed": false,
              "name": "detail",
              "type": "uint256"
          }
      ],
      "name": "Failure",
      "type": "event",
      "signature": "0x45b96fe442630264581b197e84bbada861235052c5a1aadfff9ea4e40a969aa0"
  },
  {
      "constant": true,
      "inputs": [],
      "name": "isComptroller",
      "outputs": [
          {
              "name": "",
              "type": "bool"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x007e3dd2"
  },
  {
      "constant": false,
      "inputs": [
          {
              "name": "cToken",
              "type": "address"
          },
          {
              "name": "payer",
              "type": "address"
          },
          {
              "name": "borrower",
              "type": "address"
          },
          {
              "name": "repayAmount",
              "type": "uint256"
          },
          {
              "name": "borrowerIndex",
              "type": "uint256"
          }
      ],
      "name": "repayBorrowVerify",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x1ededc91"
  },
  {
      "constant": false,
      "inputs": [
          {
              "name": "cToken",
              "type": "address"
          },
          {
              "name": "payer",
              "type": "address"
          },
          {
              "name": "borrower",
              "type": "address"
          },
          {
              "name": "repayAmount",
              "type": "uint256"
          }
      ],
      "name": "repayBorrowAllowed",
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x24008a62"
  },
  {
      "constant": false,
      "inputs": [
          {
              "name": "newCloseFactorMantissa",
              "type": "uint256"
          }
      ],
      "name": "_setCloseFactor",
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x317b0b77"
  },
  {
      "constant": false,
      "inputs": [
          {
              "name": "unitroller",
              "type": "address"
          },
          {
              "name": "_oracle",
              "type": "address"
          },
          {
              "name": "_closeFactorMantissa",
              "type": "uint256"
          },
          {
              "name": "_maxAssets",
              "type": "uint256"
          },
          {
              "name": "reinitializing",
              "type": "bool"
          }
      ],
      "name": "_become",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x32000e00"
  },
  {
      "constant": false,
      "inputs": [
          {
              "name": "cToken",
              "type": "address"
          },
          {
              "name": "minter",
              "type": "address"
          },
          {
              "name": "mintAmount",
              "type": "uint256"
          },
          {
              "name": "mintTokens",
              "type": "uint256"
          }
      ],
      "name": "mintVerify",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x41c728b9"
  },
  {
      "constant": false,
      "inputs": [
          {
              "name": "cTokenBorrowed",
              "type": "address"
          },
          {
              "name": "cTokenCollateral",
              "type": "address"
          },
          {
              "name": "liquidator",
              "type": "address"
          },
          {
              "name": "borrower",
              "type": "address"
          },
          {
              "name": "repayAmount",
              "type": "uint256"
          },
          {
              "name": "seizeTokens",
              "type": "uint256"
          }
      ],
      "name": "liquidateBorrowVerify",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x47ef3b3b"
  },
  {
      "constant": true,
      "inputs": [],
      "name": "liquidationIncentiveMantissa",
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x4ada90af"
  },
  {
      "constant": false,
      "inputs": [
          {
              "name": "cToken",
              "type": "address"
          },
          {
              "name": "minter",
              "type": "address"
          },
          {
              "name": "mintAmount",
              "type": "uint256"
          }
      ],
      "name": "mintAllowed",
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x4ef4c3e1"
  },
  {
      "constant": false,
      "inputs": [
          {
              "name": "newLiquidationIncentiveMantissa",
              "type": "uint256"
          }
      ],
      "name": "_setLiquidationIncentive",
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x4fd42e17"
  },
  {
      "constant": false,
      "inputs": [
          {
              "name": "cToken",
              "type": "address"
          },
          {
              "name": "redeemer",
              "type": "address"
          },
          {
              "name": "redeemAmount",
              "type": "uint256"
          },
          {
              "name": "redeemTokens",
              "type": "uint256"
          }
      ],
      "name": "redeemVerify",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x51dff989"
  },
  {
      "constant": false,
      "inputs": [
          {
              "name": "newOracle",
              "type": "address"
          }
      ],
      "name": "_setPriceOracle",
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x55ee1fe1"
  },
  {
      "constant": false,
      "inputs": [
          {
              "name": "cToken",
              "type": "address"
          },
          {
              "name": "borrower",
              "type": "address"
          },
          {
              "name": "borrowAmount",
              "type": "uint256"
          }
      ],
      "name": "borrowVerify",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x5c778605"
  },
  {
      "constant": true,
      "inputs": [
          {
              "name": "account",
              "type": "address"
          }
      ],
      "name": "getAccountLiquidity",
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          },
          {
              "name": "",
              "type": "uint256"
          },
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x5ec88c79"
  },
  {
      "constant": false,
      "inputs": [
          {
              "name": "cTokenBorrowed",
              "type": "address"
          },
          {
              "name": "cTokenCollateral",
              "type": "address"
          },
          {
              "name": "liquidator",
              "type": "address"
          },
          {
              "name": "borrower",
              "type": "address"
          },
          {
              "name": "repayAmount",
              "type": "uint256"
          }
      ],
      "name": "liquidateBorrowAllowed",
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x5fc7e71e"
  },
  {
      "constant": false,
      "inputs": [
          {
              "name": "cToken",
              "type": "address"
          },
          {
              "name": "src",
              "type": "address"
          },
          {
              "name": "dst",
              "type": "address"
          },
          {
              "name": "transferTokens",
              "type": "uint256"
          }
      ],
      "name": "transferVerify",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x6a56947e"
  },
  {
      "constant": false,
      "inputs": [
          {
              "name": "cTokenCollateral",
              "type": "address"
          },
          {
              "name": "cTokenBorrowed",
              "type": "address"
          },
          {
              "name": "liquidator",
              "type": "address"
          },
          {
              "name": "borrower",
              "type": "address"
          },
          {
              "name": "seizeTokens",
              "type": "uint256"
          }
      ],
      "name": "seizeVerify",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x6d35bf91"
  },
  {
      "constant": true,
      "inputs": [],
      "name": "oracle",
      "outputs": [
          {
              "name": "",
              "type": "address"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x7dc0d1d0"
  },
  {
      "constant": true,
      "inputs": [
          {
              "name": "",
              "type": "address"
          }
      ],
      "name": "markets",
      "outputs": [
          {
              "name": "isListed",
              "type": "bool"
          },
          {
              "name": "collateralFactorMantissa",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x8e8f294b"
  },
  {
      "constant": true,
      "inputs": [
          {
              "name": "account",
              "type": "address"
          },
          {
              "name": "cToken",
              "type": "address"
          }
      ],
      "name": "checkMembership",
      "outputs": [
          {
              "name": "",
              "type": "bool"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x929fe9a1"
  },
  {
      "constant": true,
      "inputs": [],
      "name": "maxAssets",
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x94b2294b"
  },
  {
      "constant": false,
      "inputs": [
          {
              "name": "cToken",
              "type": "address"
          }
      ],
      "name": "_supportMarket",
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xa76b3fda"
  },
  {
      "constant": true,
      "inputs": [
          {
              "name": "account",
              "type": "address"
          }
      ],
      "name": "getAssetsIn",
      "outputs": [
          {
              "name": "",
              "type": "address[]"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xabfceffc"
  },
  {
      "constant": true,
      "inputs": [],
      "name": "comptrollerImplementation",
      "outputs": [
          {
              "name": "",
              "type": "address"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xbb82aa5e"
  },
  {
      "constant": false,
      "inputs": [
          {
              "name": "cToken",
              "type": "address"
          },
          {
              "name": "src",
              "type": "address"
          },
          {
              "name": "dst",
              "type": "address"
          },
          {
              "name": "transferTokens",
              "type": "uint256"
          }
      ],
      "name": "transferAllowed",
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xbdcdc258"
  },
  {
      "constant": false,
      "inputs": [
          {
              "name": "cTokens",
              "type": "address[]"
          }
      ],
      "name": "enterMarkets",
      "outputs": [
          {
              "name": "",
              "type": "uint256[]"
          }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xc2998238"
  },
  {
      "constant": true,
      "inputs": [
          {
              "name": "cTokenBorrowed",
              "type": "address"
          },
          {
              "name": "cTokenCollateral",
              "type": "address"
          },
          {
              "name": "repayAmount",
              "type": "uint256"
          }
      ],
      "name": "liquidateCalculateSeizeTokens",
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          },
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xc488847b"
  },
  {
      "constant": false,
      "inputs": [
          {
              "name": "cTokenCollateral",
              "type": "address"
          },
          {
              "name": "cTokenBorrowed",
              "type": "address"
          },
          {
              "name": "liquidator",
              "type": "address"
          },
          {
              "name": "borrower",
              "type": "address"
          },
          {
              "name": "seizeTokens",
              "type": "uint256"
          }
      ],
      "name": "seizeAllowed",
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xd02f7351"
  },
  {
      "constant": false,
      "inputs": [
          {
              "name": "newMaxAssets",
              "type": "uint256"
          }
      ],
      "name": "_setMaxAssets",
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xd9226ced"
  },
  {
      "constant": false,
      "inputs": [
          {
              "name": "cToken",
              "type": "address"
          },
          {
              "name": "borrower",
              "type": "address"
          },
          {
              "name": "borrowAmount",
              "type": "uint256"
          }
      ],
      "name": "borrowAllowed",
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xda3d454c"
  },
  {
      "constant": true,
      "inputs": [
          {
              "name": "",
              "type": "address"
          },
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "name": "accountAssets",
      "outputs": [
          {
              "name": "",
              "type": "address"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xdce15449"
  },
  {
      "constant": false,
      "inputs": [
          {
              "name": "cToken",
              "type": "address"
          },
          {
              "name": "newCollateralFactorMantissa",
              "type": "uint256"
          }
      ],
      "name": "_setCollateralFactor",
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xe4028eee"
  },
  {
      "constant": true,
      "inputs": [],
      "name": "closeFactorMantissa",
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xe8755446"
  },
  {
      "constant": false,
      "inputs": [
          {
              "name": "cToken",
              "type": "address"
          },
          {
              "name": "redeemer",
              "type": "address"
          },
          {
              "name": "redeemTokens",
              "type": "uint256"
          }
      ],
      "name": "redeemAllowed",
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xeabe7d91"
  },
  {
      "constant": false,
      "inputs": [
          {
              "name": "cTokenAddress",
              "type": "address"
          }
      ],
      "name": "exitMarket",
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xede4edd0"
  },
  {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor",
      "signature": "constructor"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": false,
              "name": "cToken",
              "type": "address"
          }
      ],
      "name": "MarketListed",
      "type": "event",
      "signature": "0xcf583bb0c569eb967f806b11601c4cb93c10310485c67add5f8362c2f212321f"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": false,
              "name": "cToken",
              "type": "address"
          },
          {
              "indexed": false,
              "name": "account",
              "type": "address"
          }
      ],
      "name": "MarketEntered",
      "type": "event",
      "signature": "0x3ab23ab0d51cccc0c3085aec51f99228625aa1a922b3a8ca89a26b0f2027a1a5"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": false,
              "name": "cToken",
              "type": "address"
          },
          {
              "indexed": false,
              "name": "account",
              "type": "address"
          }
      ],
      "name": "MarketExited",
      "type": "event",
      "signature": "0xe699a64c18b07ac5b7301aa273f36a2287239eb9501d81950672794afba29a0d"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": false,
              "name": "oldCloseFactorMantissa",
              "type": "uint256"
          },
          {
              "indexed": false,
              "name": "newCloseFactorMantissa",
              "type": "uint256"
          }
      ],
      "name": "NewCloseFactor",
      "type": "event",
      "signature": "0x3b9670cf975d26958e754b57098eaa2ac914d8d2a31b83257997b9f346110fd9"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": false,
              "name": "cToken",
              "type": "address"
          },
          {
              "indexed": false,
              "name": "oldCollateralFactorMantissa",
              "type": "uint256"
          },
          {
              "indexed": false,
              "name": "newCollateralFactorMantissa",
              "type": "uint256"
          }
      ],
      "name": "NewCollateralFactor",
      "type": "event",
      "signature": "0x70483e6592cd5182d45ac970e05bc62cdcc90e9d8ef2c2dbe686cf383bcd7fc5"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": false,
              "name": "oldLiquidationIncentiveMantissa",
              "type": "uint256"
          },
          {
              "indexed": false,
              "name": "newLiquidationIncentiveMantissa",
              "type": "uint256"
          }
      ],
      "name": "NewLiquidationIncentive",
      "type": "event",
      "signature": "0xaeba5a6c40a8ac138134bff1aaa65debf25971188a58804bad717f82f0ec1316"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": false,
              "name": "oldMaxAssets",
              "type": "uint256"
          },
          {
              "indexed": false,
              "name": "newMaxAssets",
              "type": "uint256"
          }
      ],
      "name": "NewMaxAssets",
      "type": "event",
      "signature": "0x7093cf1eb653f749c3ff531d6df7f92764536a7fa0d13530cd26e070780c32ea"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": false,
              "name": "oldPriceOracle",
              "type": "address"
          },
          {
              "indexed": false,
              "name": "newPriceOracle",
              "type": "address"
          }
      ],
      "name": "NewPriceOracle",
      "type": "event",
      "signature": "0xd52b2b9b7e9ee655fcb95d2e5b9e0c9f69e7ef2b8e9d2d0ea78402d576d22e22"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": false,
              "name": "error",
              "type": "uint256"
          },
          {
              "indexed": false,
              "name": "info",
              "type": "uint256"
          },
          {
              "indexed": false,
              "name": "detail",
              "type": "uint256"
          }
      ],
      "name": "Failure",
      "type": "event",
      "signature": "0x45b96fe442630264581b197e84bbada861235052c5a1aadfff9ea4e40a969aa0"
  }
]

module.exports = {
  address,
  abi,
}