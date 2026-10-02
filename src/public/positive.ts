import type { tags } from "typia";

import type { IntegerSubtype, NumberSubtype } from "@/public/subtypes";

export type PositiveNumber<T extends NumberSubtype = "double"> = number &
  tags.Type<T> &
  tags.ExclusiveMinimum<0>;

export type PositiveInteger<T extends IntegerSubtype = "int32"> =
  PositiveNumber<T>;
