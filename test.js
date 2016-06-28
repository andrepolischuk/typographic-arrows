import test from 'ava';
import arrows from './index';

test('should fix left', t => {
  t.is(arrows('a <- b'), 'a ← b');
});

test('should fix right', t => {
  t.is(arrows('a -> b'), 'a → b');
});

test('should fix left-right', t => {
  t.is(arrows('a <-> b'), 'a ↔ b');
});

test('should fix double left', t => {
  t.is(arrows('a <= b'), 'a ⇐ b');
});

test('should fix double right', t => {
  t.is(arrows('a => b'), 'a ⇒ b');
});

test('should fix double left-right', t => {
  t.is(arrows('a <=> b'), 'a ⇔ b');
});
