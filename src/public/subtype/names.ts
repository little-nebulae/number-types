import type { Simplify } from "type-fest";

export type Int8SubtypeName = "int8";
export type Int16SubtypeName = "int16";
export type Int32SubtypeName = "int32";

export type Uint8SubtypeName = "uint8";
export type Uint16SubtypeName = "uint16";
export type Uint32SubtypeName = "uint32";

export type FloatSubtypeName = "float";
export type DoubleSubtypeName = "double";

export type Int64SubtypeName = "int64";
export type Uint64SubtypeName = "uint64";

export type IntegerSubtypeName =
  | Int8SubtypeName
  | Int16SubtypeName
  | Int32SubtypeName
  | Uint8SubtypeName
  | Uint16SubtypeName
  | Uint32SubtypeName;

export type JsNumberSubtypeName = Simplify<
  IntegerSubtypeName | FloatSubtypeName | DoubleSubtypeName
>;

export type BigIntegerSubtypeName = Int64SubtypeName | Uint64SubtypeName;

export type TypiaNumberSubtypeName = Simplify<
  JsNumberSubtypeName | BigIntegerSubtypeName
>;
