export const VARIANTS = [
  "top-left",
  "top-right",
  "bottom-left",
  "bottom-right",
] as const;

export function randomVariant() {
  const selectPhoto = Math.floor(Math.random() * 3);

  const variant = VARIANTS[Math.floor(Math.random() * VARIANTS.length)];
  return { selectPhoto, variant };
}
