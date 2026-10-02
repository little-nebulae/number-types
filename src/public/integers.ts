import type { Tagged } from "type-fest";
import type { tags } from "typia";

import type { Int32Subtype, IntegerSubtype } from "@/public/subtypes";

export type Integer<Subtype extends IntegerSubtype = Int32Subtype> = Tagged<
  number & tags.Type<Subtype>,
  Subtype
>;

export type Int8 = Integer<"int8">;
export type Int16 = Integer<"int16">;
export type Int32 = Integer<"int32">;

export type Uint8 = Integer<"uint8">;
export type Uint16 = Integer<"uint16">;
export type Uint32 = Integer<"uint32">;
