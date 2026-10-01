import type { tags } from "typia";

/**
A signed 8-bit integer, from `-128` to `127`.

Shortcut for `number & tags.Type<"int8">`. Non-integers are rejected too.

@example
```
import typia from "typia";
import type { Int8 } from "@little-nebulae/number-types";

typia.is<Int8>(127); //=> true
typia.is<Int8>(128); //=> false
typia.is<Int8>(1.5); //=> false
```
*/
export type Int8 = number & tags.Type<"int8">;
