import {
  SuccessfulExpiration,
  SuccessfulPurchase
} from "../generated/PrimaryRouter/PrimaryRouter"
import {
  Token
} from '../generated/schema'

export function handleSuccessfulPurchase(event: SuccessfulPurchase): void {
  let token = new Token(event.params._friggTokenAddress.toHexString())
  token.id = "0";
  token.address = event.params._friggTokenAddress;
  token.decimals = 18;
  token.name = "ATT";
  token.symbol = "ATT";
  token.description = "ATT";
  token.save()
}

export function handleSuccessfulExpiration(event: SuccessfulExpiration): void {
  let token = new Token(event.params._friggTokenAddress.toHexString())
  token.id = "0";
  token.address = event.params._friggTokenAddress;
  token.decimals = 18;
  token.name = "ATT";
  token.symbol = "ATT";
  token.description = "ATT";
  token.save()
  /*
  {
    "blockNumber": 15582188,
    "blockHash": "0xf32200f31ddb03521dab3527b77b4c5e493701d3534ca88349f61d05286dc03f",
    "transactionIndex": 180,
    "removed": false,
    "address": "0x96418DF8B474e90E49183CC23fa41e4aD8B0ddbE",
    "data": "0x00000000000000000000000090d53b872ce6421122b41a290acdd22a5ed931bd0000000000000000000000000000000000000000000000000000000002faf080",
    "topics": [
        "0xc676e61b1e79d2fb537a623c39c425429b06c3309e0f79e72ac1dccc697031b5",
        "0x000000000000000000000000388f7bfc52bfa1d9d010309b3965d69177f5bbbe"
    ],
    "transactionHash": "0x63675661eaed4ec7330e3d5dcdf7a836040de06b417e6906d06c2df072f25acc",
    "logIndex": 464,
    "event": "SuccessfulPurchase",
    "eventSignature": "SuccessfulPurchase(address,address,uint256)",
    "args": [
        "0x388F7bFc52bFa1d9D010309B3965d69177f5BbBe",
        "0x90D53b872ce6421122B41a290aCdD22a5eD931bd",
        {
            "type": "BigNumber",
            "hex": "0x02faf080"
        }
    ]
}
  */
}