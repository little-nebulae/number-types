import type { ExcludeFrom, ExtractFrom } from "@little-nebulae/utility-types";

export type NumberSubtype =
  | "int8"
  | "uint8"
  | "int16"
  | "uint16"
  | "int32"
  | "uint32"
  | "int64"
  | "uint64"
  | "float"
  | "double";

export type IntegerSubtype = ExcludeFrom<
  NumberSubtype,
  "double" | "float" | "int64" | "uint64"
>;

export type BigintSubtype = ExtractFrom<NumberSubtype, "int64" | "uint64">;
