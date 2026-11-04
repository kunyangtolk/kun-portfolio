/*
  Copy for the SMP reporting case study, transcribed verbatim from Figma
  (frame "SMP reporting case study", node 924:4551). Nothing here is edited.

  Sections render through a switch in app/work/smp-reporting/page.js, so
  extending the page is a data edit — no layout work.

  Types:
    prose    { label, paragraphs[], tone, borderTop, borderBottom }
    outcome  { label, stats[] }
    chapter  { title, tone, borderTop }
    figure   { src, alt, frameWidth, frameHeight, paragraphs[], padTop, padBottom }
    annotatedFigure { src, alt, designWidth, designHeight, annotations[], paragraphs[], padTop, padBottom }
    annotatedFigurePair { screens[] (annotatedFigure fields), arrow { x, y0, y1 }, arrowLabel, label, paragraphs[], padTop, padBottom }
    twoUp    { rows[][], paragraphs[], padTop, padBottom }
    scrollRow{ figures[], paragraphs[], label, padTop, padBottom }
    divider  {}

  padTop/padBottom mirror Figma, where a band that follows a chapter header
  gets 80px above and one that follows a divider gets none.
*/

const IMG = "/assets/case-studies/smp";

export const smpReporting = {
  slug: "smp-reporting",
  eyebrow: "DAI supplier management portal reporting platform",
  title: "A scalable approach to local content compliance",
  meta: [
    { label: "Platform", value: "Web app" },
    { label: "Industry", value: "Local content compliance reporting" },
  ],

  sections: [
    {
      type: "prose",
      tone: "lime",
      label: "Overview",
      paragraphs: [
        "DAI is a global development company that partners with governments, corporations, and philanthropies to address critical social and economic challenges. Since 1970, it has worked in over 150 countries to promote governance, create inclusive markets, and ensure stability. Its Sustainable Business Group (SBG) supports clients in aligning commercial and social impact goals through supply chain localization and targeted social investment. SBG’s key product, the Supplier Management Portal (SMP), enables buyers to source local suppliers and strengthen their social license to operate.",
        "We were brought in to redesign the legacy local content reporting features, used to track how much labor, goods, and services are sourced locally, and integrate them directly into the SMP for a more cohesive experience. Our goal was to create a more intuitive, transparent, and scalable reporting tool that enables companies to meet regulatory requirements and build stronger relationships with host governments and communities.",
        "The platform also includes a local supplier sourcing feature, which will be covered in a separate case study.",
      ],
    },
    {
      type: "prose",
      tone: "slate",
      label: "My role",
      paragraphs: [
        "I joined the project post-discovery and quickly ramped up by thoroughly reviewing the research materials. I collaborated with another designer, working closely with two product managers and a team of twelve developers to design and deliver key features.",
      ],
    },
    {
      type: "outcome",
      label: "Outcome",
      stats: [
        { figure: "98%", caption: "New client onboarding is supported by report builder" },
      ],
    },

    /* ── Chapter 1 ─────────────────────────────────────────────── */
    {
      type: "chapter",
      tone: "lime",
      borderTop: false, // follows the Outcome band, which already has a rule
      title: "Structured data collection at the source",
    },
    {
      type: "annotatedFigure",
      src: `${IMG}/error-validation-form-annotated.webp`,
      alt: "Quarterly reporting form for employment of staff and training, showing inline validation errors on a required field and an issues panel listing what needs fixing",
      idPrefix: "smp-validation-note",
      /* Figma frame "Supplier reporting", node 1034:10576. Boxes are in that
         frame's pixels; the notes are its annotations, verbatim. */
      designWidth: 1440,
      designHeight: 1120,
      annotations: [
        { n: 1, x: 28, y: 26, w: 300, h: 24,
          text: "This is the contract/project name of this report. One supplier can have multiple contracts that they are reporting for in an operation." },
        { n: 2, x: 28, y: 62, w: 120, h: 42, badge: "l",
          text: "The supplier is reporting their Q2 2022 local content data." },
        { n: 3, x: 28, y: 154, w: 240, h: 44, badge: "l",
          text: "There are multiple pages that each contain one or more tables in the report. User navigates between pages through this dropdown." },
        { n: 4, x: 271, y: 154, w: 297, h: 44, badge: "tr",
          text: "This will appear when user hits 'Submit report' while some fields are missing." },
        { n: 5, x: 28, y: 309, w: 1384, h: 18, badge: "r", tip: "below-end",
          text: "Progress bar informs user how much of the report has been completed and how much is left." },
        { n: 6, x: 242, y: 411, w: 24, h: 24, badge: "b",
          text: "Info buttons show tooltips on hover, explaining jargons." },
        { n: 7, x: 32, y: 524, w: 240, h: 40, badge: "l",
          text: "Color-coded cell backgrounds: white represents fully-editable fields; light gray represents aggregated fields and dark gray represents non-editable fields (row and column names)." },
        { n: 8, x: 1068, y: 976, w: 336, h: 44, badge: "l", tip: "left",
          text: "User can use issue fixing guide which goes through all issues one by one to enter missing values. They can either enter the value in this modal or in the table itself." },
      ],
      /* Deliberate deviation from Figma. These are the only two figure bands on
         the page that meet without a divider between them, so the design's
         80 + 80 leaves 160px of white between this paragraph and the next
         screenshot — enough that the two read as unrelated. Halved to 40 + 40
         here and on the section below. */
      padBottom: 40,
      paragraphs: [
        "Previously, local content data was scattered across countless Excel sheets, with aggregation and analysis handled manually: a time-consuming and error-prone process.",
        "We introduced a centralized reporting workflow that starts with structured supplier input. For users with limited connectivity, suppliers can also download a template, fill it out in Excel, and re-upload it to the platform. Built-in data validation ensures submissions are complete and accurate, eliminating the need for manual cleanup and laying the foundation for reliable, scalable reporting.",
      ],
    },
    {
      type: "annotatedFigure",
      src: `${IMG}/usability-testing-annotated.webp`,
      alt: "Australian Industry Participation reporting screen with a collapsible left navigation listing report sections, and a single wide data table filling the page",
      idPrefix: "smp-tables-note",
      /* Figma frame "Supplier reporting V2", node 1036:11040. Boxes are in
         that frame's pixels; the notes are its annotations, verbatim. */
      designWidth: 1440,
      designHeight: 1120,
      annotations: [
        { n: 1, x: 0, y: 104, w: 280, h: 36, badge: "l",
          text: "This used to be a page, now it's a logical grouping of several tables." },
        { n: 2, x: 252, y: 148, w: 20, h: 20, badge: "r",
          text: "The warning sign indicates that there are missing fields on this table." },
        { n: 3, x: 846, y: 70, w: 104, h: 32, badge: "r",
          text: "Clicking this button will trigger the issue fixing guide pop-up same as the former iteration." },
        { n: 4, x: 1386, y: 70, w: 32, h: 32, badge: "b", tip: "below-end",
          text: "Download template and upload functions are accessible here." },
        { n: 5, x: 288, y: 490, w: 20, h: 20, badge: "l",
          text: "User can delete a row by clicking this minus button." },
        { n: 6, x: 281, y: 521, w: 278, h: 38, badge: "b",
          text: "Missing fields are highlighted in red background." },
      ],
      padTop: 40, // pairs with the padBottom: 40 above — see the note there
      paragraphs: [
        "After conducting usability testing, we discovered that the existing layout, displaying multiple tables on a single page, worked fine for short or fixed-length tables. However, for dynamic tables where users can add an unlimited number of rows (such as the procurement table), this structure quickly became impractical. Some users needed to scroll through hundreds or even thousands of entries just to reach the next table, leading to poor navigation and reduced efficiency.",
        "To address this, we restructured the reporting experience to display one table per page. The used-to-be “page” now represents a logical section or group of related tables, accessible via a left navigation bar. This allows users to switch between tables effortlessly without excessive scrolling. We also made the left nav collapsible and optimized the top navigation bar into a compact form to maximize available screen space for the data table itself, improving overall readability and focus.",
      ],
    },

    /* ── Chapter 2 ─────────────────────────────────────────────── */
    {
      type: "chapter",
      tone: "lime",
      title: "Simplifying local content data aggregation across the supply chain",
    },
    {
      type: "annotatedFigurePair",
      /* The supplier tree and the screen its first row's "View Reporting"
         opens, side by side. The arrow is in the first screen's pixels: it
         leaves the bottom of that button (x 1190, y 772) and drops to y 788,
         inside the row, before running right to the second screen. */
      label: "Supplier report tree and one supplier's reporting history, side by side. Scroll sideways to see both",
      arrow: { x: 1190, y0: 772, y1: 788 },
      arrowLabel: "Clicking View Reporting on the first supplier row opens the second screen.",
      screens: [
        {
          src: `${IMG}/individual-supplier-report-annotated.webp`,
          alt: "Supplier report list for the Congo Basin Preservation Initiative, showing a supplier's three contracts and its downstream suppliers' reports nested beneath, with the status of each submission",
          idPrefix: "smp-tree-note",
          /* Figma frame "Supplier report entries", node 1041:11514. Boxes are in
             that frame's pixels; the notes are its annotations, verbatim. */
          designWidth: 1440,
          designHeight: 1174,
          annotations: [
            { n: 1, x: 356, y: 268, w: 114, h: 44, badge: "l",
              text: "The reporting period dropdown sits at the top of the visual hierarchy because changing it updates everything below it." },
            { n: 2, x: 356, y: 336, w: 248, h: 124, badge: "l",
              text: "This is a mid-stream organization in the supply chain: it reports to its upstream buyer and also collects reports from its downstream suppliers. It holds three contracts with its buyer and reports on each one. Under each contract, you’ll find this organization’s own report first, followed by the reports from its entire downstream supply chain." },
            { n: 3, x: 1156, y: 596, w: 168, h: 44, badge: "l", tip: "below-end",
              text: "The reporting tree changes as contracts start and end. This button opens a side panel where buyers add a downstream supplier which could nest under any current supplier as its supplier. SMP then emails this new organization’s manager an onboarding link to join local content reporting." },
            { n: 4, x: 428, y: 716, w: 472, h: 80, badge: "bl",
              text: "Indentation shows the tree structure: the further an organization is indented, the lower it sits in the reporting hierarchy." },
            { n: 5, x: 436, y: 890, w: 440, h: 52, badge: "l", tip: "above",
              text: "An organization can appear more than once in the tree if it reports under multiple contracts, but each contract name is unique." },
          ],
        },
        {
          src: `${IMG}/supplier-reporting-history-annotated.webp`,
          alt: "Reporting details for one supplier, EcoTrace Analytics Ltd., listing every reporting period with its status and a link to each submitted report, beside an overview of the supplier's category, buyer and contract dates",
          idPrefix: "smp-history-note",
          /* Figma frame "SubReport", node 1044:11813. Shown without callouts:
             the arrow from the first screen says what it is. */
          designWidth: 1440,
          designHeight: 1120,
          annotations: [],
        },
      ],
      padTop: 80,
      padBottom: 40,
      paragraphs: [
        "In large-scale project ecosystems, understanding the full local content landscape of the supply chain is critical. We designed an interface that clearly visualizes any buyer’s complete downstream supply chain, across all tiers and reporting periods. The local content compliance experts at buyer organizations can easily manage their supplier tree structure to fit the reporting reality and view submissions over time.",
      ],
    },
    { type: "divider" },
    {
      type: "figure",
      src: `${IMG}/submission-status-grid.webp`,
      alt: "Analysis options panel for selecting supplier reports, with a colour-coded grid showing each supplier's submission status per reporting period",
      frameWidth: 832,
      frameHeight: 669,
      padTop: 0,
      padBottom: 40,
      paragraphs: [
        "We creatively visualize the submission status of each supplier report in a given period during the buyer’s selection of the supplier reports for aggregation. Buyer users now just need to choose the reporting periods and supplier reports they want to aggregate to see a full local content report analysis.",
      ],
    },
    { type: "divider" },
    {
      type: "figure",
      src: `${IMG}/automated-aggregation-view-v2.webp`,
      alt: "Aggregated reporting analysis for workforce and training, showing totals and percentages rolled up across the supply chain",
      frameWidth: 832,
      frameHeight: 669,
      padTop: 0,
      padBottom: 80,
      paragraphs: [
        "The result is that what used to be a completely manual and unstructured data aggregation process can be completed in a few clicks with our tool.",
      ],
    },

    /* ── Chapter 3 ─────────────────────────────────────────────── */
    {
      type: "chapter",
      tone: "cyan",
      title: "Making local content commitments visible, trackable, and actionable",
    },
    {
      type: "figure",
      src: `${IMG}/create-target-form.webp`,
      alt: "Create Target form, setting local content goals by supply chain category for spend, workforce and goods",
      frameWidth: 832,
      frameHeight: 669,
      padTop: 80,
      padBottom: 40,
      paragraphs: [
        "In many projects, buyers are accountable to the national or local government of the region in which they operate and must demonstrate that they’re meeting commitments to hire locally and purchase from local suppliers. The Target feature in SMP was designed to bring clarity and structure to this process. Buyers can now easily create specific local content targets by category, such as spend, workforce, or goods weight, tailored to different supply chain sectors.",
      ],
    },
    { type: "divider" },
    {
      type: "figure",
      src: `${IMG}/target-analysis-view-v2.webp`,
      alt: "Reporting analysis view with performance against targets shown per category and reporting period",
      frameWidth: 832,
      frameHeight: 669,
      padTop: 0,
      padBottom: 80,
      paragraphs: [
        "To support accountability, these targets are seamlessly integrated into the Reporting Analysis view. Buyers can instantly see how they and suppliers are performing against predefined targets across reporting periods.",
        "Aggregated data powers clear scorecards, reducing complexity and enabling buyers to focus on strategic decisions rather than manual tracking. The result is a system that not only makes target setting easy, but turns it into an actionable part of daily operations.",
      ],
    },

    /* ── Chapter 4 ─────────────────────────────────────────────── */
    {
      type: "chapter",
      tone: "lime",
      title: "Turning data into impact stories",
    },
    {
      type: "twoUp",
      padTop: 80,
      padBottom: 40,
      rows: [
        [
          {
            src: `${IMG}/economic-impact-left.webp`,
            alt: "Economic impact summary showing jobs supported, value created and output generated across the supply chain",
          },
          {
            src: `${IMG}/economic-impact-right.webp`,
            alt: "Economic impact charts breaking output down by quarter and by category",
          },
        ],
      ],
      paragraphs: [
        "Local authorities often ask a simple question: What difference did this project make to the local economy?",
        "The Economic Impact module makes that answer to that question clear. Seamlessly integrated into the Reporting Analysis experience, it reveals the footprint of the operation, showing the jobs supported, value created, and output generated across the supply chain over a certain period of time. Presented in clean charts and structured tables, the data speaks clearly.",
      ],
    },
    { type: "divider" },
    {
      type: "figure",
      src: `${IMG}/configure-impact-model.webp`,
      alt: "Admin screen for configuring the economic impact model, with editable coefficients per region",
      frameWidth: 832,
      frameHeight: 669,
      padTop: 0,
      padBottom: 80,
      paragraphs: [
        "Behind the scenes, the calculations are powered by a model developed by DAI’s team of international development economists. Because no two regions are the same, we built flexibility into the admin settings, allowing teams to adjust coefficients and tailor the model to local realities.",
      ],
    },

    /* ── Chapter 5 ─────────────────────────────────────────────── */
    {
      type: "chapter",
      tone: "lime",
      title: "Real-time visibility into local content oversight",
    },
    {
      type: "figure",
      src: `${IMG}/dashboard-overview.webp`,
      alt: "Reporting metrics dashboard with supplier submission status, and local procurement, workforce and training spend broken down by quarter",
      frameWidth: 832,
      frameHeight: 1331,
      paragraphs: [
        "The dashboard helps buyers monitor supplier reporting and track spending across local, national, and foreign sources. With live status updates and visual breakdowns, it's easy to measure progress, identify gaps, and demonstrate compliance.",
      ],
    },

    /* ── Chapter 6 ─────────────────────────────────────────────── */
    {
      type: "chapter",
      tone: "cyan",
      title: "Built for flexibility at scale",
    },
    {
      /*
        Figma lays these four out as a 2x2 of 618px panes. They're the densest
        screenshots on the page — four configuration screens full of small form
        labels — and at that size they were unreadable, so they run in a single
        scrolling row at the same 832px as every other figure.
      */
      type: "scrollRow",
      padTop: 80,
      padBottom: 40,
      label: "Report Builder configuration screens — scroll sideways to see all four",
      figures: [
        {
          src: `${IMG}/report-builder-1-left.webp`,
          alt: "Report Builder initial configuration, setting reporting frequency and cutoff dates",
        },
        {
          src: `${IMG}/report-builder-1-right.webp`,
          alt: "Report Builder table configuration, defining columns and their data types",
        },
        {
          src: `${IMG}/report-builder-2-left.webp`,
          alt: "Report Builder section setup, grouping related tables into a reporting structure",
        },
        {
          src: `${IMG}/report-builder-2-right.webp`,
          alt: "Report Builder field editor, setting aggregation logic at the table level",
        },
      ],
      paragraphs: [
        "Reporting needs change: from one region to another, and over time. To support this, we created Report Builder: a fully configurable, no-code tool that enables the DAI team to define reporting structures without requiring developer support.",
        "Everything is adjustable: reporting frequency, cutoff dates, table formats, and fields. Columns can capture any data type, from simple counts to multi-select inputs, with aggregation logic defined at the table level.",
      ],
    },
    { type: "divider" },
    {
      type: "figure",
      src: `${IMG}/report-configurations.webp`,
      alt: "Report configurations list for the Uganda Tilenga Project, showing multiple configurations and their active periods",
      frameWidth: 832,
      frameHeight: 669,
      padTop: 0,
      padBottom: 80,
      paragraphs: [
        "When reporting needs evolve, users can update configurations or spin up new ones, without disrupting data continuity. There are extensive aliasing capabilities to allow for multi-project data aggregation while preserving regional terminology and needs. Built from real use cases, Report Builder now powers 98% of new client reporting setups.",
      ],
    },

    /* ── Close ─────────────────────────────────────────────────── */
    {
      type: "prose",
      tone: "cyan",
      label: "Impact",
      borderTop: true,
      /* Keeps its bottom rule: CaseStudyBottom no longer draws a border-top of
         its own, because stacking the two made a 2px line. */
      borderBottom: true,
      paragraphs: [
        "The redesigned reporting experience transformed how buyers and suppliers engage with local content data. What was once a fragmented, manual process is now streamlined, visual, and adaptive.",
        "DAI teams gained full control: able to configure, launch, and adjust reporting requirements without engineering support. Buyers access clear insights on local spend and economic impact, improving transparency with local authorities. Suppliers, in turn, are guided through a simpler submission flow, increasing completion rates and data reliability.",
        "What began as a compliance tool has become a platform for visibility, accountability, and smarter decisions at scale.",
      ],
    },
  ],
};
