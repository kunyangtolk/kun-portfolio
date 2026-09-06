/* The ellipsis break between figures. Figma node 924:4595 and siblings — a
   64px bold "..." on an ~87px line box.

   Figma hangs 80px beneath it and nothing above, leaning on the neighbouring
   sections for the rest; that left the gap above and below visibly unequal.
   The padding is symmetric here instead, and dividerSpacing.js zeroes the
   white bands either side so this is the entire gap. 60 + 87 + 60 keeps the
   207px block the page already used most often. */
export default function Divider() {
  return (
    <div className="flex w-full items-center justify-center bg-white px-2 py-6 md:py-10 lg:py-[60px]">
      <p aria-hidden="true" className="text-numeral font-bold leading-[1.36] text-ink">
        ...
      </p>
    </div>
  );
}
