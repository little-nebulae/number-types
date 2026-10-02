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

export type NonPositiveTagName = "NonPositive";

export type NonPositive = Tagged<tags.Maximum<0>, NonPositiveTagName>;

export type NonPositiveTypiaNumber<
  T extends TypiaNumberSubtypeName = DoubleSubtypeName,
> = TypiaNumberSubtype<T> & NonPositive;

export type NonPositiveNumber<T extends NumberSubtypeName = DoubleSubtypeName> =
  NumberSubtype<T> & NonPositive;

export type NonPositiveInteger<
  T extends IntegerSubtypeName = Int32SubtypeName,
> = IntegerSubtype<T> & NonPositive;

export type NonPositiveBigInteger<
  T extends BigIntegerSubtypeName = Int64SubtypeName,
> = BigIntegerSubtype<T> & NonPositive;
