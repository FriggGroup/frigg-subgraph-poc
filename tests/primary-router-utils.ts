import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  SuccessfulExpiration,
  SuccessfulPurchase
} from "../generated/PrimaryRouter/PrimaryRouter"

export function createRoleAdminChangedEvent(
  role: Bytes,
  previousAdminRole: Bytes,
  newAdminRole: Bytes
): RoleAdminChanged {
  let roleAdminChangedEvent = changetype<RoleAdminChanged>(newMockEvent())

  roleAdminChangedEvent.parameters = new Array()

  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdminRole",
      ethereum.Value.fromFixedBytes(previousAdminRole)
    )
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newAdminRole",
      ethereum.Value.fromFixedBytes(newAdminRole)
    )
  )

  return roleAdminChangedEvent
}

export function createRoleGrantedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleGranted {
  let roleGrantedEvent = changetype<RoleGranted>(newMockEvent())

  roleGrantedEvent.parameters = new Array()

  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleGrantedEvent
}

export function createRoleRevokedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleRevoked {
  let roleRevokedEvent = changetype<RoleRevoked>(newMockEvent())

  roleRevokedEvent.parameters = new Array()

  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleRevokedEvent
}

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
