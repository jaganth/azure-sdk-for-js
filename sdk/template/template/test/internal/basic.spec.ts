// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { assert, describe, it } from "vitest";

// Import the internal function to be tested using the normal relative import
// syntax.
import { quoteETag } from "../../src/util.js";

// Unit tests SHOULD appear inside of a `describe` block.  The hierarchical
// organization of tests within `describe` blocks will be reflected in our
// pipeline analytics and metrics.
describe("basic internal unit tests", async function () {
  // `it` declares a unit test. The test passes if it does not throw an `Error`
  it("basic assertion", () => {
    assert.equal(1, 1);
  });

  // Add the following test to the existing "describe" block
  it("quoteETag", () => {
    // undefined and "*" are handled specially
    assert.equal(quoteETag(undefined), undefined);
    assert.equal(quoteETag("*"), "*");

    // already-quoted strings should not be re-quoted
    assert.equal(quoteETag(`"xyz"`), `"xyz"`);
    assert.equal(quoteETag(`'xyz'`), `'xyz'`);

    // unquoted strings should be quoted
    assert.equal(quoteETag("abc"), `"abc"`);

    // strings with unmatched quotes should be quoted
    assert.equal(quoteETag(`'abc"`), `"'abc""`);
    assert.equal(quoteETag(`"abc'`), `""abc'"`);
    assert.equal(quoteETag(`'abc`), `"'abc"`);
    assert.equal(quoteETag(`"abc`), `""abc"`);
    assert.equal(quoteETag(`abc"`), `"abc""`);
    assert.equal(quoteETag(`abc'`), `"abc'"`);
  });
});
