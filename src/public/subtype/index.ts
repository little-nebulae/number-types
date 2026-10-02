import type { Tagged } from "type-fest";
import type { tags } from "typia";

import type {
  BigIntegerSubtypeName,
  DoubleSubtypeName,
  Int32SubtypeName,
  Int64SubtypeName,
  IntegerSubtypeName,
  NumberSubtypeName,
  TypiaNumberSubtypeName,
} from "@/public/subtype/names";

export type TypiaNumberSubtype<
  T extends TypiaNumberSubtypeName = DoubleSubtypeName,
> = Tagged<number & tags.Type<T>, T>;

export type NumberSubtype<T extends NumberSubtypeName = DoubleSubtypeName> =
  TypiaNumberSubtype<T>;

export type IntegerSubtype<T extends IntegerSubtypeName = Int32SubtypeName> =
  TypiaNumberSubtype<T>;

export type BigIntegerSubtype<
  T extends BigIntegerSubtypeName = Int64SubtypeName,
> = TypiaNumberSubtype<T>;
