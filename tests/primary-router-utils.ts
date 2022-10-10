import { Address, BigInt, ethereum } from "@graphprotocol/graph-ts"
import { newMockEvent } from "matchstick-as"
import {
  SuccessfulExpiration,
  SuccessfulPurchase
} from "../generated/PrimaryRouter/PrimaryRouter"

export function createSuccessfulExpirationEvent(
  _seller: Address,
  _friggTokenAddress: Address,
  _amount: BigInt
): SuccessfulExpiration {
  let successfulExpirationEvent = changetype<SuccessfulExpiration>(
    newMockEvent()
  )

  successfulExpirationEvent.parameters = new Array()

  successfulExpirationEvent.parameters.push(
    new ethereum.EventParam("_seller", ethereum.Value.fromAddress(_seller))
  )
  successfulExpirationEvent.parameters.push(
    new ethereum.EventParam(
      "_friggTokenAddress",
      ethereum.Value.fromAddress(_friggTokenAddress)
    )
  )
  successfulExpirationEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )

  return successfulExpirationEvent
}

export function createSuccessfulPurchaseEvent(
  _buyer: Address,
  _friggTokenAddress: Address,
  _amount: BigInt
): SuccessfulPurchase {
  let successfulPurchaseEvent = changetype<SuccessfulPurchase>(newMockEvent())

  successfulPurchaseEvent.parameters = new Array()

  successfulPurchaseEvent.parameters.push(
    new ethereum.EventParam("_buyer", ethereum.Value.fromAddress(_buyer))
  )
  successfulPurchaseEvent.parameters.push(
    new ethereum.EventParam(
      "_friggTokenAddress",
      ethereum.Value.fromAddress(_friggTokenAddress)
    )
  )
  successfulPurchaseEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )

  return successfulPurchaseEvent
}
