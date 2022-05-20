// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0
import type { IBlock, IBlockMetadata, IMilestonePayload, IOutputResponse, IReceiptsResponse } from "@iota/iota.js";
import type { IMqttMilestoneResponse } from "./api/IMqttMilestoneResponse";
import type { IMqttStatus } from "./IMqttStatus";

/**
 * Client interface definition for API communication.
 */
export interface IMqttClient {
    /**
     * Subscribe to the latest milestone updates.
     * @param callback The callback which is called when new data arrives.
     * @returns A subscription Id which can be used to unsubscribe.
     */
    milestonesLatest(callback: (topic: string, data: IMqttMilestoneResponse) => void): string;

    /**
     * Subscribe to the latest confirmed milestone updates.
     * @param callback The callback which is called when new data arrives.
     * @returns A subscription Id which can be used to unsubscribe.
     */
    milestonesConfirmed(callback: (topic: string, data: IMqttMilestoneResponse) => void): string;

    /**
     * Subscribe to get all blocks in binary form.
     * @param callback The callback which is called when new data arrives.
     * @returns A subscription Id which can be used to unsubscribe.
     */
    blocksRaw(callback: (topic: string, data: Uint8Array) => void): string;

    /**
     * Subscribe to get all blocks in object form.
     * @param callback The callback which is called when new data arrives.
     * @returns A subscription Id which can be used to unsubscribe.
     */
    blocks(callback: (topic: string, data: IBlock) => void): string;

    /**
     * Subscribe to get the metadata for all the blocks.
     * @param callback The callback which is called when new data arrives.
     * @returns A subscription Id which can be used to unsubscribe.
     */
    blocksReferenced(callback: (topic: string, data: IBlockMetadata) => void): string;

    /**
     * Subscribe to all transaction blocks in their raw form.
     * @param callback The callback which is called when new data arrives.
     * @returns A subscription Id which can be used to unsubscribe.
     */
    blocksTransactionRaw(callback: (topic: string, data: Uint8Array) => void): string;

    /**
     * Subscribe to all transaction blocks.
     * @param callback The callback which is called when new data arrives.
     * @returns A subscription Id which can be used to unsubscribe.
     */
    blocksTransaction(callback: (topic: string, data: IBlock) => void): string;

    /**
     * Subscribe to transaction blocks with tagged data in their raw form.
     * @param tag The tag to look for, or all tagged transactions if undefined.
     * @param callback The callback which is called when new data arrives.
     * @returns A subscription Id which can be used to unsubscribe.
     */
    blocksTransactionTaggedDataRaw(
        tag: Uint8Array | string | undefined,
        callback: (topic: string, data: Uint8Array) => void): string;

    /**
     * Subscribe to all transaction blocks with tagged data.
     * @param tag The tag to look for, or all tagged transactions if undefined.
     * @param callback The callback which is called when new data arrives.
     * @returns A subscription Id which can be used to unsubscribe.
     */
    blocksTransactionTaggedData(
        tag: Uint8Array | string | undefined,
        callback: (topic: string, data: IBlock) => void): string;

    /**
     * Subscribe to all milestone payloads in their raw form.
     * @param callback The callback which is called when new data arrives.
     * @returns A subscription Id which can be used to unsubscribe.
     */
    milestoneRaw(callback: (topic: string, data: Uint8Array) => void): string;

    /**
     * Subscribe to all milestone payloads.
     * @param callback The callback which is called when new data arrives.
     * @returns A subscription Id which can be used to unsubscribe.
     */
    milestone(callback: (topic: string, data: IMilestonePayload) => void): string;

    /**
     * Subscribe to get all blocks for the specified tag in binary form.
     * @param tag The tag to monitor as bytes or in hex, undefined for all blocks.
     * @param callback The callback which is called when new data arrives.
     * @returns A subscription Id which can be used to unsubscribe.
     */
    blocksTaggedRaw(
        tag: Uint8Array | string | undefined,
        callback: (topic: string, data: Uint8Array) => void): string;

    /**
     * Subscribe to get all blocks for the specified tag in object form.
     * @param tag The tag to monitor as bytes or in hex, undefined for all blocks.
     * @param callback The callback which is called when new data arrives.
     * @returns A subscription Id which can be used to unsubscribe.
     */
    blocksTagged(
        tag: Uint8Array | string | undefined,
        callback: (topic: string, data: IBlock) => void): string;

    /**
     * Subscribe to metadata updates for a specific block.
     * @param blockId The block to monitor.
     * @param callback The callback which is called when new data arrives.
     * @returns A subscription Id which can be used to unsubscribe.
     */
    blocksMetadata(blockId: string, callback: (topic: string, data: IBlockMetadata) => void): string;

    /**
     * Subscribe to block updates for a specific transactionId.
     * @param transactionId The block to monitor.
     * @param callback The callback which is called when new data arrives.
     * @returns A subscription Id which can be used to unsubscribe.
     */
    transactionIncludedBlockRaw(transactionId: string, callback: (topic: string, data: Uint8Array) => void): string;

    /**
     * Subscribe to block updates for a specific transactionId.
     * @param transactionId The block to monitor.
     * @param callback The callback which is called when new data arrives.
     * @returns A subscription Id which can be used to unsubscribe.
     */
    transactionIncludedBlock(
        transactionId: string,
        callback: (topic: string, data: IBlock) => void
    ): string;

    /**
     * Subscribe to updates for a specific output.
     * @param outputId The output to monitor.
     * @param callback The callback which is called when new data arrives.
     * @returns A subscription Id which can be used to unsubscribe.
     */
    output(outputId: string, callback: (topic: string, data: IOutputResponse) => void): string;

    /**
     * Subscribe to updates for an nft output.
     * @param nftId The Nft output to monitor.
     * @param callback The callback which is called when new data arrives.
     * @returns A subscription Id which can be used to unsubscribe.
     */
    nft(nftId: string, callback: (topic: string, data: IOutputResponse) => void): string;

    /**
     * Subscribe to updates for an alias output.
     * @param aliasId The alias output to monitor.
     * @param callback The callback which is called when new data arrives.
     * @returns A subscription Id which can be used to unsubscribe.
     */
    alias(aliasId: string, callback: (topic: string, data: IOutputResponse) => void): string;

    /**
     * Subscribe to updates for a foundry output.
     * @param foundryId The foundry output to monitor.
     * @param callback The callback which is called when new data arrives.
     * @returns A subscription Id which can be used to unsubscribe.
     */
    foundry(foundryId: string, callback: (topic: string, data: IOutputResponse) => void): string;

    /**
     * Subscribe to the output with specific unlock condition and address.
     * @param condition The condition to monitor.
     * @param addressBech32 The address to monitor.
     * @param callback The callback which is called when new data arrives.
     * @returns A subscription Id which can be used to unsubscribe.
     */
    outputByConditionAndAddress(
        condition: string,
        addressBech32: string,
        callback: (topic: string, data: IOutputResponse) => void
    ): string;

    /**
     * Subscribe to the spent outputs with specific unlock condition and address.
     * @param condition The condition to monitor.
     * @param addressBech32 The address to monitor.
     * @param callback The callback which is called when new data arrives.
     * @returns A subscription Id which can be used to unsubscribe.
     */
    outputSpentByConditionAndAddress(
        condition: string,
        addressBech32: string,
        callback: (topic: string, data: IOutputResponse) => void
    ): string;

    /**
     * Subscribe to the receive all receipts.
     * @param callback The callback which is called when new data arrives.
     * @returns A subscription Id which can be used to unsubscribe.
     */
    receipts(callback: (topic: string, data: IReceiptsResponse) => void): string;

    /**
     * Subscribe to another type of block as raw data.
     * @param customTopic The topic to subscribe to.
     * @param callback The callback which is called when new data arrives.
     * @returns A subscription Id which can be used to unsubscribe.
     */
    subscribeRaw(customTopic: string, callback: (topic: string, data: Uint8Array) => void): string;

    /**
     * Subscribe to another type of block as json.
     * @param customTopic The topic to subscribe to.
     * @param callback The callback which is called when new data arrives.
     * @returns A subscription Id which can be used to unsubscribe.
     */
    subscribeJson<T>(customTopic: string, callback: (topic: string, data: T) => void): string;

    /**
     * Remove a subscription.
     * @param subscriptionId The subscription to remove.
     */
    unsubscribe(subscriptionId: string): void;

    /**
     * Subscribe to changes in the client state.
     * @param callback Callback called when the state has changed.
     * @returns A subscription Id which can be used to unsubscribe.
     */
    statusChanged(callback: (status: IMqttStatus) => void): string;
}
