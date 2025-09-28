// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.20;

contract TrustCatHash {
    address public owner;

    struct HashRecord {
        address uploader;
        uint256 blockNumber;
    }

    mapping(bytes32 => HashRecord) private records;

    event HashStored(bytes32 indexed digest, address indexed uploader);

    constructor() {
        owner = msg.sender;
    }

    function storeHash(bytes32 digest) external {
        require(digest != bytes32(0), "Invalid hash");
        require(records[digest].uploader == address(0), "Hash already recorded");
        records[digest] = HashRecord({
            uploader: msg.sender,
            blockNumber: block.number
        });
        emit HashStored(digest, msg.sender);
    }

    function hashExists(bytes32 digest) external view returns (bool) {
        return records[digest].uploader != address(0);
    }

    function getRecord(bytes32 digest) external view returns (address uploader, uint256 blockNumber) {
        HashRecord memory rec = records[digest];
        require(rec.uploader != address(0), "Hash not found");
        return (rec.uploader, rec.blockNumber);
    }
}
