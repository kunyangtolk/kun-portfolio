/*
  Figma marks emphasis inside these paragraphs with Manrope ExtraBold and links
  with a plain underline, so a paragraph can't always be a string. Anywhere a
  component takes `paragraphs`, an entry may be either a string (unchanged, as
  the reporting case study uses) or an array of parts:

    "plain text"                      a literal run
    { b: "text" }                     ExtraBold emphasis
    { a: "text", href: "…" }          underlined external link
*/
export default function Rich({ value }) {
  if (typeof value === "string") return value;

  return (
    <>
      {value.map((part, i) => {
        if (typeof part === "string") return <span key={i}>{part}</span>;
        if (part.b) return <strong key={i} className="font-extrabold">{part.b}</strong>;
        if (part.a)
          return (
            <a
              key={i}
              href={part.href}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 transition-colors hover:text-deep"
            >
              {part.a}
            </a>
          );
        return null;
      })}
    </>
  );
}
