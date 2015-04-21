'use strict';

/**
 * Expose transformer
 * @api public
 */

module.exports = function(input) {
  return input
    .replace(/<->/gim, '↔')
    .replace(/<=>/gim, '⇔')
    .replace(/<-/gim, '←')
    .replace(/->/gim, '→')
    .replace(/<=/gim, '⇐')
    .replace(/=>/gim, '⇒');
};
