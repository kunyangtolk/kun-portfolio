import Link from "next/link";
import { projects } from "@/data/projects";
import { GlobeIcon } from "./icons";

const [compliance, supplier, aiPolicy, seven, dataViz] = projects;

/* ── shared bits ─────────────────────────────────────────── */

/* Figma node 920:3934 gives every tag the same lime wash and every numeral
   the same cyan, so neither takes a tone prop any more. */
function Tag({ children }) {
  return (
    <span className="bg-lime-tag text-body inline-flex w-fit items-center rounded-full px-3 py-2 leading-[1.5] text-white">
      {children}
    </span>
  );
}

function Numeral({ children }) {
  return (
    <span className="text-numeral leading-[1.4] text-cyan">{children}</span>
  );
}

function CardText({ title, tag, description }) {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-card leading-[1.4] text-white">{title}</h3>
      <Tag>{tag}</Tag>
      <p className="text-body leading-[1.5] text-white/70">{description}</p>
    </div>
  );
}

/* Every card is a link; the hover wash is the only addition to the static
   Figma frame — it gives the grid an affordance the flat design lacks. */
function CardShell({ project, className = "", style, children }) {
  const external = project.external;
  return (
    <Link
      href={project.href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      style={style}
      className={`group flex flex-col justify-between px-6 pb-8 pt-6 transition-colors duration-200 hover:bg-white/[0.04] md:px-8 md:pb-10 md:pt-8 ${className}`}
    >
      {children}
    </Link>
  );
}

/* ── section ─────────────────────────────────────────────── */

export default function Projects() {
  return (
    <section className="bg-deep w-full overflow-hidden">
      <div className="mx-auto w-full max-w-[1440px] px-6 pb-28 pt-16 md:px-16 md:pb-40 md:pt-24 lg:pb-[147px] lg:pt-[120px] min-[1360px]:px-28">
        {/* header */}
        <header className="flex flex-col items-center gap-6">
          <div className="w-full max-w-[600px] border-b-[5px] border-lime pb-3">
            <h2 className="text-section text-balance text-center leading-[1.2] text-white">
              Built around how work really happens.
            </h2>
          </div>
          <p className="text-lead w-full max-w-[600px] text-pretty text-center leading-[1.5] text-white">
            I dig beneath the surface to understand people, systems, and
            constraints—then turn those insights into clear, purposeful
            experiences.
          </p>
        </header>

        {/* ── grid: mobile / tablet stack ── */}
        <div className="mt-14 flex flex-col lg:hidden">
          <CardShell
            project={compliance}
            className="gap-10 border-b-[5px] border-white"
          >
            <GlobeIcon className="h-[84px] w-[100px] text-cyan" />
            <CardText {...compliance} />
          </CardShell>

          {[supplier, aiPolicy, seven, dataViz].map((p) => (
            <CardShell
              key={p.id}
              project={p}
              className="gap-10 border-b-[5px] border-white last:border-b-0"
            >
              <Numeral>{p.number}</Numeral>
              <CardText {...p} />
            </CardShell>
          ))}
        </div>

        {/* ── grid: 1024–1359 ── (max-[1360px] is exclusive, so it stops at 1359)
           The Figma composition puts a fixed 437px column beside a two-up; at
           these widths that leaves the pair about 180px each and every title
           wraps to three lines. So up to 1360 the same five cards run
           as an even two-column grid, with the long book review spanning. */}
        <div className="mt-20 hidden grid-cols-2 lg:max-[1360px]:grid">
          <CardShell
            project={compliance}
            className="min-h-[420px] border-b-[5px] border-r-[5px] border-white"
          >
            <GlobeIcon className="h-[84px] w-[100px] text-cyan" />
            <CardText {...compliance} />
          </CardShell>
          <CardShell
            project={supplier}
            className="min-h-[420px] border-b-[5px] border-white"
          >
            <Numeral>{supplier.number}</Numeral>
            <CardText {...supplier} />
          </CardShell>
          <CardShell
            project={aiPolicy}
            className="min-h-[420px] border-b-[5px] border-r-[5px] border-white"
          >
            <Numeral>{aiPolicy.number}</Numeral>
            <CardText {...aiPolicy} />
          </CardShell>
          <CardShell
            project={seven}
            className="min-h-[420px] border-b-[5px] border-white"
          >
            <Numeral>{seven.number}</Numeral>
            <CardText {...seven} />
          </CardShell>
          <CardShell project={dataViz} className="col-span-2 min-h-[300px] gap-10">
            <Numeral>{dataViz.number}</Numeral>
            <CardText {...dataViz} />
          </CardShell>
        </div>

        {/* ── grid: desktop, the Figma composition ──
           Left column is one tall card; the right column stacks the 02/03 row
           above two full-width cards. The rule between the columns runs the
           whole grid height, so it lives on the left column, not the card. */}
        <div className="mt-[120px] hidden w-full min-[1360px]:flex">
          <div className="w-[437px] shrink-0 border-r-[5px] border-white">
            <CardShell
              project={compliance}
              className="h-[727px] border-b-[5px] border-white"
            >
              <GlobeIcon className="h-[84px] w-[100px] text-cyan" />
              <CardText {...compliance} />
            </CardShell>
          </div>

          {/* right columns */}
          <div className="flex min-w-0 flex-1 flex-col">
            {/* shrink-0: without it the cards below squeeze this row to 554px */}
            <div className="flex h-[559px] shrink-0">
              <CardShell
                project={supplier}
                className="min-w-0 flex-1 border-b-[5px] border-r-[5px] border-white"
              >
                <Numeral>{supplier.number}</Numeral>
                <CardText {...supplier} />
              </CardShell>
              <CardShell
                project={aiPolicy}
                className="min-w-0 flex-1 border-b-[5px] border-white"
              >
                <Numeral>{aiPolicy.number}</Numeral>
                <CardText {...aiPolicy} />
              </CardShell>
            </div>

            <CardShell
              project={seven}
              className="h-[422px] shrink-0 border-b-[5px] border-white"
            >
              <Numeral>{seven.number}</Numeral>
              <CardText {...seven} />
            </CardShell>

            <CardShell project={dataViz} className="h-[422px] shrink-0">
              <Numeral>{dataViz.number}</Numeral>
              <CardText {...dataViz} />
            </CardShell>
          </div>
        </div>
      </div>
    </section>
  );
}
