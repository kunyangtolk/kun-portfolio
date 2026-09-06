/*
  The "..." separator owns the white space around it.

  Left alone, the gap above a divider comes from the previous section's
  padBottom and the gap below from the divider plus the next section's padTop —
  which measured anywhere from 80px to 201px against a constant 40px above.
  This normalises it: any white band touching a divider contributes nothing,
  so the Divider's own symmetric padding is the whole gap on both sides.

  Washed bands (prose, outcome, chapter) are left alone. Their padding sits
  inside a coloured ground, so it reads as the band's own inset rather than as
  space around the separator, and zeroing it would crush them.
*/
const WHITE = new Set(["figure", "text", "video", "twoUp", "scrollRow", "wideScroll"]);

export function normalizeDividerSpacing(sections) {
  return sections.map((section, i) => {
    if (section.type === "divider") return section;
    const patch = {};
    if (sections[i + 1]?.type === "divider" && WHITE.has(section.type)) patch.padBottom = 0;
    if (sections[i - 1]?.type === "divider" && WHITE.has(section.type)) patch.padTop = 0;
    return Object.keys(patch).length ? { ...section, ...patch } : section;
  });
}
