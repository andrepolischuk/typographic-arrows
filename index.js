export default function typographicArrows(input) {
  return input
    .replace(/<->/gim, '↔')
    .replace(/<=>/gim, '⇔')
    .replace(/<-/gim, '←')
    .replace(/->/gim, '→')
    .replace(/<=/gim, '⇐')
    .replace(/=>/gim, '⇒');
}
