import type { Tagged } from "type-fest";
import type { tags } from "typia";

import type { IntegerSubtype, NumberSubtype } from "@/public/subtype";
import type {
  DoubleSubtypeName,
  Int32SubtypeName,
  IntegerSubtypeName,
  NumberSubtypeName,
} from "@/public/subtype/names";

export type PositiveTagName = "Positive";

export type Positive = Tagged<tags.ExclusiveMinimum<0>, PositiveTagName>;

export type PositiveNumber<T extends NumberSubtypeName = DoubleSubtypeName> =
  NumberSubtype<T> & Positive;

export type PositiveInteger<T extends IntegerSubtypeName = Int32SubtypeName> =
  IntegerSubtype<T> & Positive;
