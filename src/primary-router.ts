import {
  SuccessfulExpiration,
  SuccessfulPurchase
} from "../generated/PrimaryRouter/PrimaryRouter";
import {
  Token, Transaction
} from '../generated/schema';

import { FriggToken } from '../generated/templates/FriggToken/FriggToken';

export function handleSuccessfulPurchase(event: SuccessfulPurchase): void {
  let transaction = new Transaction(event.transaction.hash.toHexString())

  transaction.token = event.params._friggTokenAddress.toHexString();
  transaction.amount = event.params._amount;
  transaction.from = event.transaction.from;
  transaction.to = event.transaction.to!;
  transaction.transactionHash = event.transaction.hash;
  transaction.timestamp = event.block.timestamp
  transaction.tokenPhase = "BUY";
  transaction.market = "PRIMARY";
  transaction.save();

  let token = new Token(event.params._friggTokenAddress.toHexString())
  let tokenContract = FriggToken.bind(event.params._friggTokenAddress);

  token.address = event.params._friggTokenAddress;
  token.decimals = tokenContract.decimals();
  token.name = tokenContract.name();
  token.symbol = tokenContract.symbol();
  token.save()
}

export function handleSuccessfulExpiration(event: SuccessfulExpiration): void {
  let transaction = new Transaction(event.transaction.hash.toHexString())

  transaction.token = event.params._friggTokenAddress.toHexString();
  transaction.amount = event.params._amount;
  transaction.from = event.transaction.from;
  transaction.to = event.transaction.to!;
  transaction.transactionHash = event.transaction.hash;
  transaction.timestamp = event.block.timestamp
  transaction.tokenPhase = "SELL";
  transaction.market = "PRIMARY";
  transaction.save();

  let token = new Token(event.params._friggTokenAddress.toHexString())
  let tokenContract = FriggToken.bind(event.params._friggTokenAddress);

  token.address = event.params._friggTokenAddress;
  token.decimals = tokenContract.decimals();
  token.name = tokenContract.name();
  token.symbol = tokenContract.symbol();
  token.save()
}