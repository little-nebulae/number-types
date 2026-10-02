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

export type NegativeTagName = "Negative";

export type Negative = Tagged<tags.ExclusiveMaximum<0>, NegativeTagName>;

export type NegativeTypiaNumber<
  T extends TypiaNumberSubtypeName = DoubleSubtypeName,
> = TypiaNumberSubtype<T> & Negative;

export type NegativeNumber<T extends NumberSubtypeName = DoubleSubtypeName> =
  NumberSubtype<T> & Negative;

export type NegativeInteger<T extends IntegerSubtypeName = Int32SubtypeName> =
  IntegerSubtype<T> & Negative;

export type NegativeBigInteger<
  T extends BigIntegerSubtypeName = Int64SubtypeName,
> = BigIntegerSubtype<T> & Negative;
