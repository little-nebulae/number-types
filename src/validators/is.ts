import { is } from "typia";

import type {
  NegativeNumber,
  NonNegativeNumber,
  NonPositiveNumber,
  PositiveNumber,
} from "@/types";

export function isPositiveNumber(input: unknown) {
  return is<PositiveNumber>(input);
}
export function isNegativeNumber(input: unknown) {
  return is<NegativeNumber>(input);
}
export function isNonNegativeNumber(input: unknown) {
  return is<NonNegativeNumber>(input);
}
export function isNonPositiveNumber(input: unknown) {
  return is<NonPositiveNumber>(input);
}
