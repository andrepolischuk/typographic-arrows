
'use strict';

var arrows = require('..');
var assert = require('assert');

describe('arrows(input)', function() {
  it('should fix left', function() {
    assert(arrows('a <- b') === 'a ← b');
  });

  it('should fix right', function() {
    assert(arrows('a -> b') === 'a → b');
  });

  it('should fix left-right', function() {
    assert(arrows('a <-> b') === 'a ↔ b');
  });

  it('should fix double left', function() {
    assert(arrows('a <= b') === 'a ⇐ b');
  });

  it('should fix double right', function() {
    assert(arrows('a => b') === 'a ⇒ b');
  });

  it('should fix double left-right', function() {
    assert(arrows('a <=> b') === 'a ⇔ b');
  });
});
