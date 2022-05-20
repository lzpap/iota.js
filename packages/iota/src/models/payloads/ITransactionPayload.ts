// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0
import type { ITransactionEssence } from "../ITransactionEssence";
import type { ITypeBase } from "../ITypeBase";
import type { UnlockTypes } from "../unlocks/unlockTypes";

/**
 * The global type for the payload.
 */
export const TRANSACTION_PAYLOAD_TYPE = 6;

/**
 * Transaction payload.
 */
export interface ITransactionPayload extends ITypeBase<6> {
    /**
     * The index name.
     */
    essence: ITransactionEssence;

    /**
     * The unlocks.
     */
    unlocks: UnlockTypes[];
}
