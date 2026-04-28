/**
 * HowTo JSON-LD step data — Two Bit Digital
 * ─────────────────────────────────────────────────────────────────────────────
 * Maps article slugs to structured HowToStep arrays.
 * The article page reads this file and injects HowTo schema when steps exist.
 *
 * Only include articles that are genuinely procedural / step-by-step.
 * Each step's `name` should be a short imperative phrase.
 * Each step's `text` should be the explanatory sentence(s) from the article.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export type HowToStep = {
  name: string
  text: string
}

export type HowToSchema = {
  name:        string
  description: string
  steps:       HowToStep[]
}

/** Map of insight slug → HowTo data. undefined slugs are ignored. */
export const howtoData: Record<string, HowToSchema> = {

  // ── How to build an AI workflow ─────────────────────────────────────────────
  'what-are-ai-workflows': {
    name:        'How to Build an AI Workflow',
    description: 'A six-stage process for designing, building, and monitoring AI workflows that deliver measurable ROI for your business.',
    steps: [
      {
        name: 'Map the current process in full detail',
        text: 'Document every step, input, output, decision point, and exception in the existing process. You cannot reliably automate a process you have not fully documented.',
      },
      {
        name: 'Identify which steps are AI-suitable',
        text: 'Look for steps involving reading, extracting, classifying, summarising, or generating natural language. These are your automation candidates.',
      },
      {
        name: 'Choose the right AI architecture',
        text: 'Simple extraction suits prompt engineering with an LLM API. Knowledge-intensive tasks suit RAG (Retrieval-Augmented Generation). Multi-step autonomous work suits agent frameworks.',
      },
      {
        name: 'Build with human oversight from the start',
        text: 'Define confidence thresholds below which the AI routes to human review rather than acting autonomously. Reduce oversight gradually as confidence in the system grows.',
      },
      {
        name: 'Connect to your existing systems',
        text: 'The AI layer must read from and write to your CRM, case management, document storage, and email. Integration is where complexity usually hides.',
      },
      {
        name: 'Monitor, measure, and iterate',
        text: 'Track accuracy, processing time, and error rates from day one. AI workflows improve with use, but only if the metrics are being watched.',
      },
    ],
  },

  // ── How to build an AI automation strategy ──────────────────────────────────
  'how-to-build-an-ai-automation-strategy': {
    name:        'How to Build an AI Automation Strategy for Your Business',
    description: 'A six-step framework for moving from ad-hoc AI experimentation to a coherent, compounding AI automation programme.',
    steps: [
      {
        name: 'Audit your current processes',
        text: 'List every repeating process in your business and document the inputs, outputs, decision points, and people involved. This is a business analysis exercise, not a technology exercise.',
      },
      {
        name: 'Identify automation candidates',
        text: 'Score each process against volume, complexity, and strategic value. High-volume, low-strategic-value processes with moderate complexity are your primary targets.',
      },
      {
        name: 'Choose the right AI approach for each candidate',
        text: 'Match each automation candidate to the correct architecture — prompt engineering, RAG, agent frameworks, fine-tuned models, or traditional rule-based automation — based on the nature of the task.',
      },
      {
        name: 'Decide whether to build or partner',
        text: 'If AI is your core product, build internally. If AI is a capability layer on top of your core business, partnering with a specialist studio is almost always the better economic decision.',
      },
      {
        name: 'Start with one workflow, not ten',
        text: 'Pick the single highest-value automation candidate — the one consuming the most staff hours with the clearest inputs and outputs — and build it properly before expanding.',
      },
      {
        name: 'Measure, learn, and expand',
        text: 'Define success metrics before deployment. Review accuracy, processing time, and staff hours reclaimed weekly for the first month. Each workflow teaches you something that makes the next one faster.',
      },
    ],
  },

  // ── How to make the custom vs. off-the-shelf decision ───────────────────────
  'custom-software-vs-off-the-shelf': {
    name:        'How to Make the Custom vs. Off-the-Shelf Software Decision',
    description: 'A six-step decision framework for growing businesses choosing between bespoke software development and packaged solutions.',
    steps: [
      {
        name: 'List and classify your processes',
        text: 'List every process the software needs to support, then mark which are generic and which are genuinely differentiating to your business.',
      },
      {
        name: 'Research off-the-shelf options seriously',
        text: 'Evaluate at least three packaged options — not just demos, but real implementations. Talk to customers who have used them for two or more years.',
      },
      {
        name: 'Estimate the workaround cost',
        text: 'Calculate how many staff hours per week your team will spend adapting their work to fit software that does not quite fit. This is a real, recurring cost.',
      },
      {
        name: 'Get a scoped build estimate',
        text: 'Obtain a detailed build estimate from a studio that can show you similar work — not a rough number from a sales call.',
      },
      {
        name: 'Run the five-year total cost of ownership comparison',
        text: 'Compare total spend both ways across five years, including build, subscription, implementation, maintenance, and switching costs.',
      },
      {
        name: 'Decide based on numbers and strategic importance',
        text: 'Choose based on the TCO analysis and how central the process is to your competitive position — not based on which option feels less risky.',
      },
    ],
  },

  // ── How to run a paperless event ────────────────────────────────────────────
  'how-to-run-a-paperless-event-pakistan': {
    name:        'How to Run a Fully Paperless Event',
    description: 'A six-step guide to running a completely digital event — from registration setup to post-event analytics — using Tikkit X.',
    steps: [
      {
        name: 'Set up your event',
        text: 'Create your event with name, date, venue, and capacity. Configure ticket types (free, paid, or tiered) and set visibility. Your registration page goes live immediately.',
      },
      {
        name: 'Configure your registration form',
        text: 'Decide what information to collect at registration. Set capacity limits by category if needed. Every field added to the form is automatically included in your guest export.',
      },
      {
        name: 'Share the registration link',
        text: 'Distribute your single registration URL via WhatsApp, social media, or email. Guests register on any device and receive a unique QR code immediately upon confirmed payment.',
      },
      {
        name: 'Monitor registrations in real time',
        text: 'Watch the live dashboard as registrations arrive. Approve or decline pending guests, manage a waitlist, and message all registered guests directly from the dashboard.',
      },
      {
        name: 'Run check-in on the day',
        text: 'Open the scanner on any mobile device and share the link with door staff. Scan each guest QR code for instant cryptographic verification — works fully offline at the venue.',
      },
      {
        name: 'Review post-event analytics',
        text: 'Access total registrations, check-in rate, arrival timeline, revenue, and full guest records with timestamps. Export to CSV and build audience profiles across events.',
      },
    ],
  },

  // ── How to digitise law firm case files ─────────────────────────────────────
  'law-firm-case-file-digitisation': {
    name:        'How to Digitise a Law Firm\'s Paper Case Files',
    description: 'A seven-step guide to moving a law firm from paper case files to a structured digital archive — without disrupting active matters.',
    steps: [
      {
        name: 'Audit your paper volume',
        text: 'Count active and archived matter files, estimate volume in linear metres or file boxes, identify document formats, and apply your retention policy to eliminate files before scanning begins.',
      },
      {
        name: 'Prioritise active cases over archived files',
        text: 'Start with currently active matters — these are the files your fee earners need daily. Digitising them first delivers immediate operational benefit and builds momentum.',
      },
      {
        name: 'Establish a scanning and OCR workflow',
        text: 'Use a dedicated document scanner (minimum 50 pages per minute with auto-feed) and scan to searchable PDF with OCR. Flag handwritten documents for manual review.',
      },
      {
        name: 'Define your naming convention and folder taxonomy',
        text: 'Design and document your folder structure and file naming convention before scanning begins. Encode matter reference, document type, date, and version in every file name.',
      },
      {
        name: 'Implement role-based access controls',
        text: 'Configure system-level permissions so fee earners access only their assigned matters. Log every access event for audit purposes. Do not rely on convention — enforce at the system level.',
      },
      {
        name: 'Plan the physical archive responsibly',
        text: 'Retain physical originals for active matters until they conclude. Apply your retention policy to archived files, use a certified destruction service, and maintain a destruction log.',
      },
      {
        name: 'Train your team and maintain the system',
        text: 'Train all staff on the naming convention and folder structure. Designate a senior person to monitor compliance. The system is only as good as the discipline with which it is maintained.',
      },
    ],
  },

  // ── Inside Two Bit Digital's AI engineering process ─────────────────────────
  'inside-two-bit-digital-ai-engineering-process': {
    name:        'Two Bit Digital\'s Five-Phase AI Engineering Process',
    description: 'The five-phase process Two Bit Digital uses to take AI-powered software products from concept to production in regulated industries.',
    steps: [
      {
        name: 'Discovery and architecture design',
        text: 'Map user types, workflows, data flows, and regulatory constraints. Design the data model and permission structure. Produce a technical specification before writing any code.',
      },
      {
        name: 'Engineering foundation',
        text: 'Build database schema with row-level security, authentication, RBAC, multi-tenant isolation, and the deployment pipeline — the invisible infrastructure that every feature rests on.',
      },
      {
        name: 'AI and integration layer',
        text: 'Implement LLM API integration, the RAG pipeline, prompt engineering and versioning, confidence threshold logic, AI audit logging, and all external system integrations.',
      },
      {
        name: 'Quality assurance and compliance review',
        text: 'Test functional requirements and compliance obligations: audit trail completeness, access control enforcement, AI output logging, and failure mode behaviour under edge cases.',
      },
      {
        name: 'Deployment and ongoing support',
        text: 'Deploy to staging, run smoke tests, configure monitoring and alerting, establish incident response, then go live. Ongoing sprints, patching, and scaling support follow.',
      },
    ],
  },

  // ── How to win UK government digital contracts ───────────────────────────────
  'winning-uk-government-digital-contracts': {
    name:        'How to Win UK Government Digital Contracts',
    description: 'Key steps for technology companies positioning themselves to win UK government digital procurement through G-Cloud, DOS, and Crown Commercial Service frameworks.',
    steps: [
      {
        name: 'Identify the right procurement route',
        text: 'Determine whether G-Cloud (cloud products and services), DOS (specific project delivery), or Crown Commercial Service TPS is the appropriate framework for your offering.',
      },
      {
        name: 'Get your credentials in order',
        text: 'Ensure your UK Companies House registration, D&B D-U-N-S number, Cyber Essentials certification, and professional indemnity and public liability insurance are all current before bidding.',
      },
      {
        name: 'Build your evidence base',
        text: 'Compile specific examples of similar work with named outcomes, sector, and scale. Government evaluators score on evidence of delivery, not on claimed capability.',
      },
      {
        name: 'Understand the scoring methodology',
        text: 'Read the evaluation criteria for every opportunity before writing a word of your response. Responses that do not directly address the stated criteria score poorly regardless of quality.',
      },
      {
        name: 'Write a compliant, evidence-led response',
        text: 'Name individuals with verifiable credentials, demonstrate understanding of GDS standards, address risk robustly, and include measurable social value commitments.',
      },
      {
        name: 'Leverage the SME advantage',
        text: 'Use the government\'s explicit SME procurement policies, reduced financial thresholds, and agility advantages over large system integrators to differentiate your submission.',
      },
    ],
  },

}
