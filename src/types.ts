import type { tags } from "typia";

export type PositiveNumber = number & tags.ExclusiveMinimum<0>;
export type NegativeNumber = number & tags.ExclusiveMaximum<0>;
export type NonNegativeNumber = number & tags.Minimum<0>;
export type NonPositiveNumber = number & tags.Maximum<0>;
