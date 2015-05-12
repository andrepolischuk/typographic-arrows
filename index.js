
'use strict';

/**
 * Expose transformer
 *
 * @param {String} input
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
