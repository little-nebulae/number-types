import type { Tagged } from "type-fest";
import type { tags } from "typia";

import type { IntegerSubtype, JsNumberSubtype } from "@/public/subtype";
import type {
  DoubleSubtypeName,
  Int32SubtypeName,
  IntegerSubtypeName,
  JsNumberSubtypeName,
} from "@/public/subtype/names";

export type PositiveTagName = "Positive";

export type Positive = Tagged<tags.ExclusiveMinimum<0>, PositiveTagName>;

export type PositiveJsNumber<
  T extends JsNumberSubtypeName = DoubleSubtypeName,
> = JsNumberSubtype<T> & Positive;

export type PositiveInteger<T extends IntegerSubtypeName = Int32SubtypeName> =
  IntegerSubtype<T> & Positive;
