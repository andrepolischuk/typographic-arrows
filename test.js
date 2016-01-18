import test from 'ava';
import arrows from './index.es5';

test('should fix left', t => {
  t.is(arrows('a <- b'), 'a ← b');
});

test('should fix right', function (t) {
  t.is(arrows('a -> b'), 'a → b');
});

test('should fix left-right', function (t) {
  t.is(arrows('a <-> b'), 'a ↔ b');
});

test('should fix double left', function (t) {
  t.is(arrows('a <= b'), 'a ⇐ b');
});

test('should fix double right', function (t) {
  t.is(arrows('a => b'), 'a ⇒ b');
});

test('should fix double left-right', function (t) {
  t.is(arrows('a <=> b'), 'a ⇔ b');
});
