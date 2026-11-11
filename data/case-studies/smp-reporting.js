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
    wideScroll { src, alt, height, scaleSm, scaleMd, band, label, paragraphs[], padTop, padBottom }
    twoUp    { rows[][], paragraphs[], padTop, padBottom }
    scrollRow{ figures[], paragraphs[], label, padTop, padBottom }
    text     { paragraphs[], padTop, padBottom }
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
        [
          "We were brought in to redesign the legacy ",
          { b: "local content reporting" },
          " features, used to ",
          { b: "track how much labor, goods, and services are sourced locally" },
          ", and integrate them directly into the SMP for a more cohesive experience. Our goal was to create a more intuitive, transparent, and scalable reporting tool that enables companies to meet regulatory requirements and build stronger relationships with host governments and communities.",
        ],
        "The platform also includes a local supplier sourcing feature, which will be covered in a separate case study.",
      ],
    },
    {
      type: "prose",
      tone: "slate",
      label: "My role",
      paragraphs: [
        "I joined the project post-discovery and quickly ramped up by thoroughly reviewing the research materials. I collaborated with another designer, working closely with two product managers and a team of twelve developers to design and deliver key features that are shown in this case study.",
      ],
    },
    {
      type: "outcome",
      label: "Outcome",
      stats: [
        { figure: "98%", caption: "New client onboarding is supported by Report Builder" },
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
      /* The chapter's intro now leads, and the validation figure follows it,
         the same text-then-figure order as Chapter 3. */
      type: "text",
      padTop: 80,
      padBottom: 40,
      paragraphs: [
        "Previously, local content data was scattered across countless Excel sheets, and aggregation and analysis were done by hand: a time-consuming, error-prone process.",
        "Our local content reporting platform replaces this with one centralized, streamlined process. Suppliers log into their portal and fill in digital forms with the local content data from their projects. Their buyers can then access that data and aggregate it to see the full picture of their operations.",
        "The workflow starts with structured supplier input. We worked from the reporting tables DAI gave us, and designed the interface around how reporting actually works for them. For users with limited connectivity, suppliers can also download a template, fill it out in Excel and re-upload it to the platform. Built-in data validation keeps submissions complete and accurate, which removes the need for manual cleanup and lays the foundation for reliable, scalable reporting.",
      ],
    },
    {
      type: "annotatedFigure",
      src: `${IMG}/error-validation-form-annotated.webp`,
      padTop: 0,
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
         80 + 80 leaves 160px of white between this screenshot and the next
         one — enough that the two read as unrelated. Halved to 40 + 40
         here and on the section below. */
      padBottom: 40,
    },
    {
      type: "text",
      padTop: 40, // pairs with the padBottom: 40 above — see the note there
      padBottom: 40,
      paragraphs: [
        "After conducting usability testing, we discovered that the existing layout, displaying multiple tables on a single page, worked fine for short or fixed-length tables. However, for dynamic tables where users can add an unlimited number of rows (such as the procurement table), this structure quickly became impractical. Some users needed to scroll through hundreds or even thousands of entries just to reach the next table, leading to poor navigation and reduced efficiency.",
        "To address this, we restructured the reporting experience to display one table per page. The used-to-be “page” now represents a logical section or group of related tables, accessible via a left navigation bar. This allows users to switch between tables effortlessly without excessive scrolling. We also made the left nav collapsible and optimized the top navigation bar into a compact form to maximize available screen space for the data table itself, improving overall readability and focus.",
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
      padTop: 0,
    },

    /* ── Chapter 2 ─────────────────────────────────────────────── */
    {
      type: "chapter",
      tone: "lime",
      title: "Simplifying local content data aggregation across the supply chain",
    },
    {
      type: "text",
      padTop: 80,
      padBottom: 40,
      paragraphs: [
        "Once suppliers submit their reports, buyers can open any individual report or aggregate data across reporting periods and the whole supply chain.",
        "An oil and gas operation involves hundreds of organizations across multiple supply chain tiers. Each organization’s reports are visible to its buyers, and each can view its own suppliers’ reports. Picture a tree, where every branch splits into more branches. We designed an interface that clearly visualizes a buyer’s entire downstream supply chain, across every tier and reporting period.",
        "The local content compliance experts at buyer organizations can easily manage their supplier tree so it reflects how reporting actually works.",
        "Clicking “View Reporting” on a supplier’s contract row, in any reporting period, opens a screen listing that contract’s reports across every period. From there, buyers can track its submission status and compare its data over time.",
      ],
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
      padTop: 0,
      padBottom: 40,
    },
    {
      type: "text",
      padTop: 40, // with the pair's padBottom: 40 above, 80px from the band
      padBottom: 40,
      paragraphs: [
        "So how do buyers aggregate reporting data? They choose the reporting periods and supplier reports they want to combine, in any combination, for maximum flexibility.",
        "We visualize each supplier report’s submission status with color-coded pills, which steers buyers toward reports with a green “Submitted” status. Reports in any other status can’t be accessed, so they can’t be aggregated. If a buyer selects one, a warning modal explains why it will be left out.",
        "In the results, we only show count fields, since those are the ones that can be aggregated.",
        "What used to be a fully manual, unstructured aggregation process now takes just a few clicks.",
      ],
    },
    {
      /* Figma "Frame 358", node 1051:13924: the four screens from the supplier
         tree to the aggregated analysis, joined by flow lines. Exported at Figma's
         1x (the most its export gives), about 1.7x the displayed size, and
         cropped to the screens themselves: the band's own padding supplies
         the margins, matching the side-by-side pair above. Shown 930px tall,
         so each screen is about 850px wide, close to the 832 of the other
         figures. */
      type: "wideScroll",
      src: `${IMG}/report-analysis-flow-v3.webp`,
      alt: "Flow from the supplier report list, via View Reporting Analysis, to selecting reporting periods, then selecting supplier reports with each one's submission status per period, and finally the aggregated reporting analysis tables",
      height: 930,
      scaleSm: 0.6,
      scaleMd: 0.8,
      /* The status pills on the third screen ("Select Supplier Reports"),
         from Figma's annotations on node 1050:12667. That screen sits at
         (3318, 12) in this crop, so each box is its Figma position plus that
         offset, in the webp's own pixels. */
      designWidth: 6421,
      designHeight: 1572,
      idPrefix: "analysis-flow-note",
      annotations: [
        { n: 1, x: 3836, y: 708, w: 36, h: 16, badge: "tl", text: "Did not started reporting yet." },
        { n: 2, x: 3876, y: 708, w: 36, h: 16, badge: "tr", text: "Report in progress, not available for aggregation." },
        { n: 3, x: 4364, y: 708, w: 36, h: 16, badge: "tr", tip: "below-end", text: "Report has been successfully submitted, so the data is available to be aggregated." },
        { n: 4, x: 4364, y: 788, w: 36, h: 16, badge: "tr", tip: "below-end", text: "Did not submit report before Cutoff date." },
        { n: 5, x: 4364, y: 868, w: 36, h: 16, badge: "tr", tip: "below-end", text: "This supplier has not been added to the reporting tree in this period." },
      ],
      band: "#393D57",
      label: "Reporting analysis flow, scroll sideways to see every step",
      padTop: 0,
      padBottom: 0, // the dark band meets the Chapter 3 header directly
    },

    /* ── Chapter 3 ─────────────────────────────────────────────── */
    {
      type: "chapter",
      tone: "cyan",
      title: "Built for flexibility at scale",
    },
    {
      type: "text",
      padTop: 80,
      padBottom: 40,
      paragraphs: [
        "After we wrapped up phase one with DAI’s first major client, DAI signed more clients whose reporting covered different localities. Their reporting followed the same logic, but used different tables and terminology.",
        "At first, we were asked to fit the new tables into the existing ones on the backend wherever possible, and to custom-build the ones that didn’t fit for each new client. We soon found this unsustainable: the client list kept growing, and every reporting requirement was slightly different.",
        "So I proposed a new feature to the product team: Report Builder. I argued that although it was a high-effort feature, in the long run it would let DAI admins spin up a new reporting framework for every new client, without developer support. After careful evaluation, the team aligned on it, and we introduced it to clients.",
        "Everything is adjustable: reporting frequency, cutoff dates, table formats and fields. Columns can capture any data type, from simple counts to multi-select inputs, with aggregation logic defined at the table level.",
      ],
    },
    {
      /* Figma "Frame 359", node 1068:14717: the six screens from an empty
         Report Configurations list, through Create Configuration and Report
         Details, to adding a page and a table in Report Builder. Exported at
         Figma's 1x and cropped to the screens, like the analysis flow above,
         and shown at the same scale (930 / 1572), so the screens match it.
         Figma's export renderer lacks Font Awesome 6 Pro, so it drops the
         "page" glyph on the Let's get started empty state; that glyph is
         composited back in from a screen capture of the canvas. */
      type: "wideScroll",
      src: `${IMG}/report-builder-flow-v4.webp`,
      alt: "Flow from an empty Report Configurations list, through Create Configuration and Report Details, to an empty Report Builder, adding a page, and the Add Table panel",
      height: 840,
      scaleSm: 0.6,
      scaleMd: 0.8,
      band: "#393D57",
      label: "Report Builder flow, scroll sideways to see every step",
      padTop: 0,
      padBottom: 40,
      paragraphs: [
        "Once an empty table is set up, users are prompted to create its primary field. This field supplies the row names, and it also carries the table’s aggregation logic.",
        "After reviewing every existing reporting framework, we found two ways data gets aggregated: goods and services by supply chain category (an industry, such as agriculture or construction), and workforce by skill level (such as unskilled, technical or managerial).",
        "We also found two types of tables. A fixed table has a set number of rows, and every count field in it is aggregated. A “Reporter Added Rows” table has as many rows as the reporter adds. There, the primary field is a dropdown, and the reporter tags each row with its supply chain category or skill level. In the aggregated results, totals are then rolled up by that category or level, so all agricultural goods, for example, are summed together.",
        "We also built in a robust aliasing feature. By choosing “Configure Options”, users can rename supply chain categories and skill levels to match the terms each locality actually uses. This respects how each reporting spec really works, while still letting buyers aggregate data across periods without losing continuity.",
      ],
    },
    {
      /* Figma node 1081:17258: setting up the primary field, as two rows.
         Top: a "Fixed Row Values" table with aliased ISCO skill levels.
         Bottom: a "Reporter Added Rows" table with the default supply chain
         categories. The gap between the rows is cut to 160px. Cropped to the screens and shown at the same scale as the
         two flows above (930 / 1572). */
      type: "wideScroll",
      src: `${IMG}/primary-field-flow-v2.webp`,
      alt: "Two Add Primary Field flows in Report Builder. Top: a fixed-row Skill Level field with ISCO skill levels aliased as Managers, Professionals and so on, producing a table with those rows. Bottom: a Reporter Added Rows field using the default supply chain categories, producing a table whose rows reporters add.",
      height: 1325,
      scaleSm: 0.6,
      scaleMd: 0.8,
      band: "#393D57",
      label: "Primary field setup, scroll sideways to see every step",
      padTop: 0,
      padBottom: 40,
      paragraphs: [
        "After adding the primary field, users can continue adding any type of field to the table.",
      ],
    },
    {
      /* Figma "Frame 361", node 1084:13267: adding a Count field (Residents
         of Onslow) with Divide by Gender on, and the resulting table with
         Male, Female and Other sub-columns. Cropped to the screens and shown
         at the same scale as the flows above (930 / 1572). */
      type: "wideScroll",
      src: `${IMG}/add-field-flow.webp`,
      alt: "Add Field flow in Report Builder: choosing the Count field type and Headcount count type for a Residents of Onslow field, turning on Divide by Gender, and the resulting table with Male, Female and Other columns plus gender totals",
      height: 613,
      scaleSm: 0.6,
      scaleMd: 0.8,
      band: "#393D57",
      label: "Add field flow, scroll sideways to see every step",
      padTop: 0,
      padBottom: 80,
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
