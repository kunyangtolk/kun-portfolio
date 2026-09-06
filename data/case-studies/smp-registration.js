/*
  Copy for the SMP registration case study, transcribed verbatim from Figma
  (frame "SMP registration case study", node 924:3936). Nothing here is edited
  — including Figma's own "reassured user" and the colon before "all designed".

  Sections render through a switch in app/work/smp-registration/page.js, so
  extending the page is a data edit — no layout work.

  Types:
    prose      { label, paragraphs[], bullets[], tone, borderTop, borderBottom }
    outcome    { label, stats[] }
    chapter    { title, tone, borderTop }
    figure     { src, alt, frameWidth, frameHeight, maxWidth, framed,
                 paragraphs[], padTop, padBottom }
    text       { paragraphs[], padTop, padBottom }
    wideScroll { src, alt, height, framed, inset, label, paragraphs[], padTop, padBottom }
    divider    {}

  A paragraph is a string, or an array of parts for mixed formatting — see
  components/case-study/RichText.jsx.
*/

const IMG = "/assets/case-studies/smp-reg";
const W3 = "https://www.w3schools.com/jsref";

export const smpRegistration = {
  slug: "smp-registration",
  eyebrow: "DAI supplier management portal registration platform",
  title: "Unlock local business potential to fuel community transformation",
  meta: [
    { label: "Platform", value: "Web app" },
    { label: "Industry", value: "Supplier sourcing" },
  ],

  sections: [
    {
      type: "prose",
      tone: "navy",
      label: "Overview",
      paragraphs: [
        "DAI is a global development company that partners with governments, corporations, and philanthropies to address critical social and economic challenges. Since 1970, it has worked in over 150 countries to promote governance, create inclusive markets, and ensure stability. Its Sustainable Business Group (SBG) supports clients in aligning commercial and social impact goals through supply chain localization and targeted social investment. SBG’s key product, the Supplier Management Portal (SMP), enables buyers to source local suppliers and strengthen their social license to operate. The legacy platform made it difficult for suppliers to register and for buyers to identify qualified vendors, so DAI SBG brought our team in to redesign the experience.",
        "The platform also includes a local hiring and purchasing data reporting feature, which will be covered in a separate case study.",
      ],
    },
    {
      type: "prose",
      tone: "lime",
      label: "My role",
      paragraphs: [
        "I joined the project post-discovery and quickly ramped up by thoroughly reviewing the research materials. I collaborated with another designer, working closely with two product managers and a team of twelve developers to design and deliver key features.",
      ],
    },
    {
      type: "outcome",
      label: "Outcome",
      stats: [
        { figure: "35%", caption: "reduction in supplier registration drop-offs" },
        { figure: "45%", caption: "fewer tech support requests" },
      ],
    },

    /* Chapter one — the supplier side of the form. */
    {
      type: "chapter",
      tone: "lime",
      borderTop: false,
      title: "A simplified, accessible supplier intake flow",
    },
    {
      type: "figure",
      src: `${IMG}/supplier-profile.webp`,
      alt: "The redesigned supplier profile, with a completeness tracker down the left and the Size & Revenue section broken into four short requirement cards.",
      frameWidth: 832,
      frameHeight: 669,
      padTop: 80,
      padBottom: 40,
      paragraphs: [
        "Signing up for the platform used to be a tedious, error-prone experience for suppliers. Through active stakeholder communication, we learned that supplier users vary widely in their technical proficiency. While medium-to-large enterprises often have the resources to complete the application accurately, many small businesses struggle with the process.",
        [
          "To fix this, we removed redundant fields and prioritized inputs essential to the procurement process. We also streamlined the form into bite-sized sections, using a ",
          { b: "dynamic tracker" },
          " to guide suppliers through the process.",
        ],
      ],
    },
    { type: "divider" },
    {
      type: "figure",
      src: `${IMG}/question-sequence.webp`,
      alt: "The question sequence: five sections — general details, registration details, ownership, size and revenue, client references — with the number of fields tapering off across the flow.",
      frameWidth: 1280,
      frameHeight: 400,
      maxWidth: 1280,
      framed: false,
      padTop: 0,
      padBottom: 40,
      paragraphs: [
        [
          "We front-loaded the form with simple, low-effort questions to ease users in. As the form progresses, more complex fields appear, at a point when users are already invested, making them more likely to continue. This approach leverages the “",
          { b: "sunk cost fallacy" },
          ",” a behavioral principle that increases the likelihood of task completion as users become more committed over time.",
        ],
      ],
    },
    { type: "divider" },

    /* The three wide flow panels. Figma clips each at the frame edge; here they
       scroll. Heights are the Figma band heights, so the page still measures. */
    {
      type: "wideScroll",
      src: `${IMG}/manual-saving-pattern.webp`,
      alt: "Question-level manual saving: a requirement card moving through not started, in progress, in progress with an attachment, and completed, annotated with when each state activates and saves.",
      height: 608,
      label: "Question-level manual saving pattern — scroll sideways to see more",
    },
    {
      type: "text",
      paragraphs: [
        [
          "Due to the lack of stable internet connection in many supplier locations, we implemented a ",
          { b: "question-level manual saving pattern" },
          " that minimized any potential data loss and reassured user that their input has been saved.",
        ],
      ],
    },
    { type: "divider" },
    {
      type: "wideScroll",
      src: `${IMG}/partial-progress-saving.webp`,
      alt: "Partial progress saving: the joint venture question branching through yes and no answers, with ownership percentages saved a row at a time and totals filling in as they go.",
      height: 957,
      label: "Allowing partial progress to be saved — scroll sideways to see more",
    },
    {
      type: "text",
      paragraphs: [
        [
          "Additionally, we recognized that some users may not have all the required information on hand. By ",
          { b: "allowing partial progress to be saved" },
          " at the question level, users can complete what they know and return later, promoting more flexibility.",
        ],
      ],
    },
    { type: "divider" },
    {
      type: "text",
      paragraphs: [
        "To enhance data quality and minimize user errors, we applied targeted validation rules to critical fields such as email, phone number, and percentage inputs, guided by widely accepted UX best practices:",
      ],
    },
    {
      type: "wideScroll",
      src: `${IMG}/reward-early-punish-late.webp`,
      alt: "Reward early, punish late: four states of a validated field showing the error appearing only after the user leaves the field and clearing the moment it is corrected.",
      height: 664,
      label: "Reward early, punish late — scroll sideways to see more",
    },
    {
      type: "text",
      padBottom: 120,
      paragraphs: [
        ["“", { b: "Reward early, punish late" }, "”"],
        [
          "Errors are displayed only after the user exits the field (",
          { a: "onBlur", href: `${W3}/event_onblur.asp` },
          ") and are cleared immediately as the user corrects the input (",
          { a: "onChange", href: `${W3}/event_onchange.asp` },
          "). This creates a more supportive and less frustrating experience by reinforcing progress and reducing friction.",
        ],
      ],
    },
    {
      type: "wideScroll",
      src: `${IMG}/empty-field-validation.webp`,
      alt: "The empty-field edge case: a joint venture party left blank while its ownership percentage is filled, with the missing-field error held back until the user hits Save.",
      height: 438,
      label: "Empty field validation on submission — scroll sideways to see more",
    },
    {
      type: "text",
      paragraphs: [
        [{ b: "Empty field validation on submission" }],
        [
          "If a required field is left blank, the error only appears when the user clicks “Save” (",
          { a: "onSubmit", href: `${W3}/event_onsubmit.asp` },
          "). This approach prevents premature warnings and respects the user’s intent to complete the question.",
        ],
      ],
    },
    { type: "divider" },

    /* Chapter two — the buyer side, then back to the supplier's inbox. */
    {
      type: "chapter",
      tone: "cyan",
      borderTop: true,
      title: "Clearer, faster paths to opportunity",
    },
    {
      type: "figure",
      src: `${IMG}/notice-creation.webp`,
      alt: "The notice creation screen, with the goods and services tagging modal open over the form and visibility settings in the right rail.",
      frameWidth: 1280,
      frameHeight: 700,
      maxWidth: 1280,
      /* No .figure-frame here. Figma puts the 8px navy stroke on the inner
         832px CreateNotice frame, not on this 1280x700 canvas, and that stroke
         is already in the exported pixels — adding the CSS frame drew a second
         one around the empty margin. */
      framed: false,
      padTop: 80,
      padBottom: 40,
      paragraphs: [
        [
          "We reworked the ",
          { b: "notice creation" },
          " experience from the ground up. The new ",
          { b: "goods and services tagging modal" },
          " allows buyers to quickly select from thousands of options. Buyers can now post procurement opportunities with ",
          { b: "targeted visibility settings" },
          ": filtering suppliers by sector, verification status, and location. This ensures each notice reaches the most relevant suppliers, improving response rates and reducing irrelevant responses.",
        ],
      ],
    },
    { type: "divider" },
    {
      type: "figure",
      src: `${IMG}/response-management.webp`,
      alt: "The buyer's response workspace: supplier conversations listed down the left, the selected supplier's details and message thread on the right.",
      frameWidth: 832,
      frameHeight: 669,
      padTop: 40,
      padBottom: 40,
      paragraphs: [
        "Once a notice is live, buyers can manage supplier responses in a centralized workspace. Each supplier’s submission of inquiry or bid includes contextual metadata and one-click access to the full supplier profile: all designed to reduce back-and-forth and streamline decision-making.",
      ],
    },
    { type: "divider" },
    {
      type: "wideScroll",
      src: `${IMG}/supplier-views-row-v2.webp`,
      alt: "The three supplier views side by side: discover notices with filters, a threaded response view, and the message inbox.",
      /* No wrapper around the row — each of the three screens carries its own
         6px stroke instead, redrawn per panel after Figma's export clipped
         them. 502 = the 1004px asset at half scale. */
      height: 502,
      /* No frame around the row — Figma's outer frame is padding, not a border,
         and the .figure-frame that used to be here was also what stopped it
         scrolling (its `overflow: hidden` beat `overflow-x: auto`). */
      framed: false,
      inset: true,
      label: "Discover, Messages and Inbox — scroll sideways to see more",
      padTop: 40,
      padBottom: 40,
      paragraphs: [
        [
          "For suppliers, the platform now revolves around three views: ",
          { b: "Discover" },
          ", ",
          { b: "Messages" },
          ", and ",
          { b: "Inbox" },
          ". The redesigned discover view enables filtering to serve notices relevant to supplier business.",
        ],
        "Conversations are organized by opportunity and presented in a threaded, email-style format, making it easy to track questions, submit bids, and follow up in one place.",
      ],
    },
    { type: "divider" },
    {
      type: "figure",
      src: `${IMG}/notification-settings.webp`,
      alt: "Email notification settings: per-event toggles, a goods and services filter with selected tags, and a frequency choice between individual, daily and weekly.",
      frameWidth: 832,
      /* Figma's slot is 832x669, but the screen Kun exported runs to 776 and
         the missing 107px are the sidebar logo and the Unsubscribe All button.
         Cropping to the slot would cut both, so the figure keeps its own
         height — the one band on the page that runs taller than the design. */
      frameHeight: 776,
      padTop: 40,
      padBottom: 40,
      paragraphs: [
        [
          "To keep suppliers engaged, we built a ",
          { b: "customizable alert system" },
          ". Notifications can be filtered by a supplier’s registered goods and services, ensuring relevance and reducing overload.",
        ],
        "The system is flexible enough to keep users connected, and simple enough for nontechnical users to manage with ease.",
      ],
    },
        {
      type: "prose",
      tone: "cyan",
      borderTop: true,
      label: "Impact",
      paragraphs: [
        "The SMP significantly improved how local suppliers and international buyers connect, communicate, and collaborate. By streamlining supplier onboarding and centralizing procurement workflows, the platform reduced inefficiencies and unlocked new opportunities for both sides of the marketplace. These improvements supported regulatory compliance, economic development, and operational scalability across regions.",
      ],
      bullets: [
        "Provided 100K+ local suppliers (sometimes for the first time) with access to international corporate contracts.",
        "Established a standardized platform and avenue for educating local suppliers on doing business with international organizations.",
      ],
    },
  ],
};
