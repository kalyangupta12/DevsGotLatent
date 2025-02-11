import { MorphingText } from "@/components/magicui/morphing-text"

const texts = [
  "LATENT",
  "TALENT"
];

export function TextMorph() {
  return <MorphingText texts={texts} />;
}
