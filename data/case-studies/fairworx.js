/*
  Copy for the FairWorx case study, transcribed verbatim from Figma
  (frame "FairWorx", node 924:4672). Nothing here is edited.

  Sections render through a switch in app/work/fairworx/page.js.

  Types used here:
    prose   { label, paragraphs[], tone, borderTop, borderBottom, padTop, padBottom }
    outcome { label, stats[], tone }
    chapter { title, tone, borderTop }
    text    { paragraphs[], padTop, padBottom }
    video   { heading, src, poster, alt, frameWidth, frameHeight, paragraphs[] }
    divider {}

  A paragraph is a string, or an array of parts for mixed formatting — see
  components/case-study/RichText.jsx.
*/

const M = "/assets/case-studies/fairworx";

export const fairworx = {
  slug: "fairworx",
  eyebrow: "FairWorx document analyzer",
  title: "AI-powered insights for a fairer workplace",
  meta: [
    { label: "Platform", value: "Web App" },
    { label: "Industry", value: "Organization development and business consulting" },
  ],

  sections: [
    {
      type: "prose",
      tone: "navy",
      label: "Overview",
      paragraphs: [
        "FairWorx is an AI-powered platform designed to reduce workplace bias, discrimination, and litigation risk. By analyzing company culture through employee feedback, policy documents, and external data, FairWorx delivers actionable insights tailored to each organization’s equity and compliance needs. All findings are validated by FairWorx Consultants for accuracy and context.",
        "This case study focuses on FairWorx’s document analyzer feature, which uses AI to scan organizational policies for discriminatory or risky language. It also assesses documents for clarity and consistency, flagging vague wording that could lead to biased or inconsistent enforcement.",
      ],
    },
    {
      type: "prose",
      tone: "cyan",
      label: "My role",
      paragraphs: [
        "As the lead designer on this project, I collaborated closely with another designer, a product manager, and a team of eight engineers across the research, design, development, and QA phases.",
      ],
    },
    {
      type: "outcome",
      tone: "lime",
      label: "Outcome",
      stats: [
        {
          figure: "85%",
          caption: "reduction in manual review hours by FairWorx Consultants",
        },
      ],
    },

    {
      type: "chapter",
      tone: "cyan",
      borderTop: false,
      title: "Accelerated by AI, guided by human expertise",
    },
    {
      /* The concept section carries no bottom padding of its own — the
         Divider beneath it supplies the 80px and the rule. */
      type: "text",
      padTop: 80,
      padBottom: 0,
      paragraphs: [
        "The FairWorx team initially approached us with a broad concept: leveraging AI to help de-risk corporate policy language. Our role was to refine this idea into a focused, actionable product vision grounded in real consultant workflows. Through collaborative discovery sessions and in-depth conversations with FairWorx Consultants, we uncovered several core pain points that shaped the direction of the solution.",
        "Consultants shared that reviewing long, dense corporate policies was time-consuming and mentally taxing, often requiring multiple passes through the same documents. This manual effort limited how many client engagements the team could take on, directly constraining FairWorx’s ability to scale. In addition, purely human review made it easy to overlook risky areas, especially when working under tight deadlines or across large document sets.",
        "While some consultants experimented with mainstream AI tools like ChatGPT, these tools introduced new friction. Outputs were typically delivered as standalone text documents or spreadsheets, forcing consultants to manually map findings back to the original policy—adding extra steps, and introducing opportunities for error. Rather than accelerating the workflow, these tools often shifted the work elsewhere.",
        [
          "In response, we aligned on a clear design direction: a “",
          { b: "Grammarly for fair and clear corporate policies" },
          ".” The concept centered on surfacing AI-identified risks directly within the original document, preserving context and enabling faster, more confident review. Crucially, all AI findings are reviewed and validated by FairWorx Consultants before being shared with clients—ensuring accuracy, trust, and human judgment remain at the core of the experience.",
        ],
      ],
    },
    { type: "divider" },

    {
      type: "video",
      heading: "Iteration 1: Streamlined individual risk review",
      src: `${M}/iteration-1.mp4`,
      poster: `${M}/iteration-1-poster.webp`,
      alt: "The document analyzer walking through AI-detected risks one at a time, with the matching passage highlighted in the policy PDF alongside accept and dismiss controls.",
      frameHeight: 807,
      paragraphs: [
        [
          "In our initial workflow, users are presented with AI-detected risks one at a time and can choose to either ",
          { b: "accept" },
          " or ",
          { b: "dismiss" },
          " each risk. The interface automatically advances the focus to the next risk upon completion of the previous one. The corresponding highlight in the PDF viewer shifts dynamically, and the page scrolls as needed to keep the current risk in view.",
        ],
        [
          "Upon reviewing a risk, the user’s first action is to determine whether the risk is valid. If validated, they are prompted to rate its ",
          { b: "severity" },
          ", either confirming the AI’s suggested severity or overriding it based on their judgment. Users are also encouraged to leave a comment explaining why the content is considered risky. Once a risk is reviewed, its background changes to a light red shade, providing a persistent visual cue of progress, even if users leave the document analyzer and return later.",
        ],
        "If a risk is dismissed, it is removed from the main risk list. However, users can toggle a setting to “Show dismissed risks,” making it easy to view and recover any previously dismissed items. Additionally, users retain the flexibility to revisit and edit any reviewed risk at any time, supporting an iterative and thorough review process.",
      ],
    },
    { type: "divider" },

    {
      type: "video",
      heading: "Iteration 2: Introducing risk grouping",
      src: `${M}/iteration-2.mp4`,
      poster: `${M}/iteration-2-poster.webp`,
      alt: "Repeated instances of a misused term collected into a single risk group, with severity and comments edited once at the group level.",
      frameHeight: 808,
      paragraphs: [
        [
          "The second iteration addressed the challenge of ",
          { b: "repetitive language misuse" },
          ", where a problematic word or phrase appears multiple times across a document. To streamline handling such patterns, we introduced a ",
          { b: "grouping" },
          " mechanism. Commonly misused terms, pre-identified by FairWorx experts, are automatically grouped as related risks. Within a group, users can edit the severity and comments at the group level, which then applies to all associated instances.",
        ],
        "Users are empowered to organize risks by moving them into or out of groups and creating new groups as needed. This enhancement significantly reduces repetitive manual work and ensures consistent handling and documentation of widespread issues throughout a document.",
      ],
    },
    { type: "divider" },

    {
      type: "video",
      heading: "Iteration 3: Contextual AI insights and guided remediation",
      src: `${M}/iteration-3.mp4`,
      poster: `${M}/iteration-3-poster.webp`,
      alt: "Each flagged risk arriving with pre-populated issue and suggestion fields, both editable by the reviewing consultant.",
      frameHeight: 807,
      paragraphs: [
        "We recognized that AI could contribute more than just risk detection: it could also generate meaningful rationales for each flag. This insight led to Iteration 3, which introduced contextual AI Insights and guided remediation to better support consultants in their review process.",
        [
          "In this iteration, each detected risk now comes with pre-populated fields that explain both why the risk was flagged (“",
          { b: "issue" },
          "”) and offer a recommended approach for improvement (“",
          { b: "suggestion" },
          "”). These fields are fully editable, enabling users to refine AI-generated insights with their own context-specific expertise.",
        ],
        "This enhancement transforms the review process from mere detection and triage into a more guided and actionable experience. Users benefit from both the efficiency of AI and the nuance of human judgment, ensuring that all risks are not only identified but also understood and addressed with clear, constructive solutions.",
      ],
    },
    { type: "divider" },

    {
      type: "prose",
      tone: "cyan",
      label: "Result",
      borderTop: true,
      padTop: 80,
      padBottom: 120,
      paragraphs: [
        "The FairWorx document analyzer has evolved from a straightforward accept/dismiss workflow into a sophisticated, context-aware tool that leverages AI and expert input for comprehensive risk detection, review, and remediation. Each iteration has built upon stakeholder feedback and real-world needs, resulting in a flexible and efficient policy document review process.",
      ],
    },
  ],
};
