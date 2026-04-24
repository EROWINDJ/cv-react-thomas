// Utilitaire pour combiner des classes Tailwind sans conflits
// Usage : cn("base-class", condition && "conditional-class", "other-class")
export function cn(...classes) {
  return classes
    .flat()
    .filter(Boolean)
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}
