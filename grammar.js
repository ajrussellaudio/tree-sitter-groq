/**
 * @file Query language made at Sanity.io for filtering and projecting JSON documents
 * @author Alan Russell <ajrussellaudio@gmail.com>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "groq",

  rules: {
    // TODO: add the actual grammar rules
    source_file: $ => "hello"
  }
});
