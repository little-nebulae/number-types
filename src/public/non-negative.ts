import type { Tagged } from "type-fest";
import type { tags } from "typia";

import type {
  BigIntegerSubtype,
  IntegerSubtype,
  NumberSubtype,
  TypiaNumberSubtype,
} from "@/public/subtype";
import type {
  BigIntegerSubtypeName,
  DoubleSubtypeName,
  Int32SubtypeName,
  Int64SubtypeName,
  IntegerSubtypeName,
  NumberSubtypeName,
  TypiaNumberSubtypeName,
} from "@/public/subtype/names";

export type NonNegativeTagName = "NonNegative";

export type NonNegative = Tagged<tags.Minimum<0>, NonNegativeTagName>;

export type NonNegativeTypiaNumber<
  T extends TypiaNumberSubtypeName = DoubleSubtypeName,
> = TypiaNumberSubtype<T> & NonNegative;

export type NonNegativeNumber<T extends NumberSubtypeName = DoubleSubtypeName> =
  NumberSubtype<T> & NonNegative;

export type NonNegativeInteger<
  T extends IntegerSubtypeName = Int32SubtypeName,
> = IntegerSubtype<T> & NonNegative;

export type NonNegativeBigInteger<
  T extends BigIntegerSubtypeName = Int64SubtypeName,
> = BigIntegerSubtype<T> & NonNegative;
