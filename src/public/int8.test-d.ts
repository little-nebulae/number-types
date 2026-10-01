import type { tags } from "typia";

import { expectTypeOf, test } from "vitest";

import type { Int8 } from "@/public/int8";

test("Int8 is a number tagged as int8", () => {
  expectTypeOf<Int8>().toEqualTypeOf<number & tags.Type<"int8">>();
  expectTypeOf<Int8>().toExtend<number>();
});
