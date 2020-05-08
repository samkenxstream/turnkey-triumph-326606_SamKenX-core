import { Meta } from "@packages/core-snapshots/src/contracts";
import { Models } from "@arkecosystem/core-database";
import { BigNumber } from "@arkecosystem/utils";

export const metaData: Meta.MetaData = {
    blocks: {
        count: 261,
        start: 1,
        end: 261,
    },
    transactions: {
        count: 153,
        start: 1,
        end: 153,
    },
    rounds: {
        count: 306,
        start: 1,
        end: 306,
    },
    network: "testnet",
    packageVersion: "3.0.0-next.0",
    folder: "1-261",
    skipCompression: false,
    codec: "default"
};

export const blocksBigNumber: Models.Block[]  = [
    {
        id: "17184958558311101492",
        version: 0,
        timestamp: 0,
        previousBlock: "0",
        height: 1,
        numberOfTransactions: 153,
        totalAmount: BigNumber.make(12500000000000000),
        totalFee: BigNumber.make(0),
        reward: BigNumber.make(0),
        payloadLength: 35960,
        payloadHash: "d9acd04bde4234a81addb8482333b4ac906bed7be5a9970ce8ada428bd083192",
        generatorPublicKey: "03b47f6b6719c76bad46a302d9cff7be9b1c2b2a20602a0d880f139b5b8901f068",
        blockSignature: "304402202fe5de5697fa25d3d3c0cb24617ac02ddfb1c915ee9194a89f8392f948c6076402200d07c5244642fe36afa53fb2d048735f1adfa623e8fa4760487e5f72e17d253b"
    },
    {
        id: "12294213091819080736",
        version:0,
        timestamp:96928320,
        previousBlock: "17184958558311101492",
        height:2,
        numberOfTransactions:0,
        totalAmount: BigNumber.make(0),
        totalFee: BigNumber.make(0),
        reward: BigNumber.make(0),
        payloadLength: 0,
        payloadHash: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
        generatorPublicKey: "022f2978d57f95c021b9d4bf082b482738ce392bcf6bc213710e7a21504cfeb5a0",
        blockSignature: "3045022100a08a6322e6dca4b1be83ce0bbd14c4335be1f72fcbb806af24e88c9db5b9f05e0220289eb4db6a2fb46f4c9b577828dd4e63e4b76f7707d947135b879a94e9c988fa"
    }
];

export const blocks: Models.Block[]  = [
    {
        id: "17184958558311101492",
        version: 0,
        timestamp: 0,
        previousBlock: "0",
        height: 1,
        numberOfTransactions: 153,
        // totalAmount: BigNumber.make(12500000000000000),
        // totalFee: BigNumber.make(0),
        // reward: BigNumber.make(0),
        // @ts-ignore
        totalAmount: BigInt(12500000000000000),
        // @ts-ignore
        totalFee: BigInt(0),
        // @ts-ignore
        reward: BigInt(0),
        payloadLength: 35960,
        payloadHash: "d9acd04bde4234a81addb8482333b4ac906bed7be5a9970ce8ada428bd083192",
        generatorPublicKey: "03b47f6b6719c76bad46a302d9cff7be9b1c2b2a20602a0d880f139b5b8901f068",
        blockSignature: "304402202fe5de5697fa25d3d3c0cb24617ac02ddfb1c915ee9194a89f8392f948c6076402200d07c5244642fe36afa53fb2d048735f1adfa623e8fa4760487e5f72e17d253b"
    },
    {
        id: "12294213091819080736",
        version:0,
        timestamp:96928320,
        previousBlock: "17184958558311101492",
        height:2,
        numberOfTransactions:0,
        totalAmount: BigNumber.make(0),
        totalFee: BigNumber.make(0),
        reward: BigNumber.make(0),
        // @ts-ignore
        // totalAmount: BigNumber(0),
        // // @ts-ignore
        // totalFee: BigInt(0),
        // // @ts-ignore
        // reward: BigInt(0),
        payloadLength: 0,
        payloadHash: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
        generatorPublicKey: "022f2978d57f95c021b9d4bf082b482738ce392bcf6bc213710e7a21504cfeb5a0",
        blockSignature: "3045022100a08a6322e6dca4b1be83ce0bbd14c4335be1f72fcbb806af24e88c9db5b9f05e0220289eb4db6a2fb46f4c9b577828dd4e63e4b76f7707d947135b879a94e9c988fa"
    }
];

export const transactions: Models.Transaction[]  = [
    {
        id: "db1aa687737858cc9199bfa336f9b1c035915c30aaee60b1e0f8afadfdb946bd",
        version:1,
        blockId: "17184958558311101492",
        sequence:0,
        timestamp:0,
        nonce: BigNumber.make(1),
        senderPublicKey:"035b63b4668ee261c16ca91443f3371e2fe349e131cb7bf5f8a3e93a3ddfdfc788",
        recipientId:"AHXtmB84sTZ9Zd35h9Y1vfFvPE2Xzqj8ri",
        type:0,
        typeGroup:1,
        vendorField: undefined,
        amount: BigNumber.make(245098000000000),
        fee: BigNumber.make(0),
        serialized: Buffer.from([255,1,23,0,0,0,0,0,3,91,99,180,102,142,226,97,193,108,169,20,67,243,55,30,47,227,73,225,49,203,123,245,248,163,233,58,61,223,223,199,136,0,0,0,0,0,0,0,0,0,0,164,57,83,234,222,0,0,0,0,0,0,23,19,75,91,228,179,39,221,249,194,187,71,254,200,161,164,65,137,233,15,116,48,68,2,32,95,203,6,119,224,107,222,122,172,61,199,118,102,86,21,244,185,62,248,195,237,15,221,236,239,153,0,231,79,203,0,243,2,32,105,88,160,201,134,142,161,177,243,209,81,189,250,146,218,28,226,77,224,177,252,217,25,51,230,79,183,151,30,146,244,141]),
        asset: {}
    }
];

export const rounds: Models.Round[]  = [
    {
        publicKey: "021770413ad01c60b94e1d3ed44c00e0145fe7897e40f5f6265e220f4e65cf427f",
        // @ts-ignore
        round: 1,
        // @ts-ignore
        balance: 245098000000000,
    },
];