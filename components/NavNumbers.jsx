"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { projects } from "@/data/projects";

/*
  "1 2 3 4 5" on the right of the bar, one per card in the home grid and in the
  same order. Same 16px ink type and hover fade as the home link beside it.
  The case study you're on carries a navy underline, the bar's own hairline
  colour. The fifth is the off-site book review, so it opens in a new tab like
  its card does. Each number is a 40px-tall hit area, 24–28px wide on the
  narrowest phones so all five fit beside the name.
*/
export default function NavNumbers() {
  const pathname = usePathname();

  return (
    <nav aria-label="Case studies" className="ml-auto">
      <ol className="flex items-center md:gap-2">
        {projects.map((p, i) => {
          const current = !p.external && pathname === p.href;
          const label = `${i + 1}: ${p.title}${p.external ? " (opens in a new tab)" : ""}`;
          const cls = `flex h-10 w-6 items-center justify-center text-[16px] min-[360px]:w-7 sm:w-10 leading-[1.1] text-ink underline-offset-[6px] transition-opacity hover:opacity-70 ${
            current ? "underline decoration-navy decoration-2" : ""
          }`;
          return (
            <li key={p.id}>
              {p.external ? (
                <a href={p.href} target="_blank" rel="noopener noreferrer" aria-label={label} title={p.title} className={cls}>
                  {i + 1}
                </a>
              ) : (
                <Link href={p.href} aria-label={label} title={p.title} aria-current={current ? "page" : undefined} className={cls}>
                  {i + 1}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
