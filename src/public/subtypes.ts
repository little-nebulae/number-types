export type Int8Subtype = "int8";
export type Int16Subtype = "int16";
export type Int32Subtype = "int32";

export type Uint8Subtype = "uint8";
export type Uint16Subtype = "uint16";
export type Uint32Subtype = "uint32";

export type FloatSubtype = "float";
export type DoubleSubtype = "double";

export type Int64Subtype = "int64";
export type Uint64Subtype = "uint64";

export type NumberSubtype =
  | Int8Subtype
  | Int16Subtype
  | Int32Subtype
  | Uint8Subtype
  | Uint16Subtype
  | Uint32Subtype
  | FloatSubtype
  | DoubleSubtype
  | Int64Subtype
  | Uint64Subtype;

export type IntegerSubtype =
  | Int8Subtype
  | Int16Subtype
  | Int32Subtype
  | Uint8Subtype
  | Uint16Subtype
  | Uint32Subtype;

export type BigintSubtype = Int64Subtype | Uint64Subtype;
