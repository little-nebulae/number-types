import type { tags } from "typia";

import { assert, is, validate } from "typia";

declare const __brand: unique symbol;
type Brand<B> = { [__brand]: B };
export type Branded<T, B> = Brand<B> & T;

export type Int8 = Branded<number & tags.Type<"int8">, "Int8">;

export function isInt8(input: unknown) {
  return is<Int8>(input);
}

export function assertInt8(input: unknown) {
  return assert<Int8>(input);
}

export function validateInt8(input: unknown) {
  return validate<Int8>(input);
}
