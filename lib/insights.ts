export type InsightPost = {
  slug:        string
  title:       string
  excerpt:     string
  publishedAt: string
  readTime:    string
  category:    string
  tags:        string[]
  metaTitle:   string
  metaDesc:    string
  content:     Section[]
}

type Section = {
  type:    'intro' | 'h2' | 'h3' | 'p' | 'ul' | 'ol' | 'callout' | 'cta'
  heading?: string
  text?:   string
  items?:  string[]
}

export const insights: InsightPost[] = [
  {
    slug:        'how-to-choose-saas-development-agency-uk',
    title:       'How to Choose a SaaS Development Agency in the UK: A Founder\'s Checklist',
    excerpt:     'Most SaaS builds fail not because of bad code, but because the agency never understood the product. Here is how to find a partner that does.',
    publishedAt: '2026-04-10',
    readTime:    '8 min read',
    category:    'SaaS Development',
    tags:        ['SaaS development', 'agency selection', 'product development', 'UK tech'],
    metaTitle:   'How to Choose a SaaS Development Agency UK | Two Bit Digital',
    metaDesc:    'A practical checklist for founders evaluating SaaS development agencies in the UK. What to look for, what to avoid, and the questions that separate real studios from freelancer collectives.',
    content: [
      {
        type: 'intro',
        text: 'You have a SaaS idea, a budget, and a shortlist of agencies. The pitches all sound similar — modern stack, agile process, experienced team. How do you tell the difference between a studio that will ship your product and one that will burn your runway? This guide gives you the checklist we wish more of our clients had used before coming to us.',
      },
      {
        type: 'h2',
        heading: '1. Do They Own a Product Themselves?',
        text: 'There is a meaningful difference between an agency that builds for clients and one that also builds and owns its own software products. Product ownership forces hard decisions: about architecture that needs to scale, about user experience under real usage, about what it costs to maintain software over years rather than weeks. Ask any agency you are evaluating: do you have your own SaaS products? If yes, what are they and can we see them?',
      },
      {
        type: 'callout',
        text: 'Two Bit Digital operates three in-house products: Tikkit X (live), Averon Legal Systems (beta), and Terra Core (development). Every decision we made in those builds informs how we advise our clients.',
      },
      {
        type: 'h2',
        heading: '2. Can They Show You the Architecture Decision, Not Just the Outcome?',
        text: 'Portfolio pages show polished screenshots. What you need to understand is the thinking behind the build. Ask to see an architecture diagram. Ask why they chose Supabase over a self-hosted Postgres instance. Ask how they handle tenant isolation in their multi-tenant builds. Agencies that can answer these questions fluently are the ones who made the decisions deliberately — not accidentally.',
      },
      {
        type: 'h2',
        heading: '3. Check Their Understanding of Your Regulatory Context',
        text: 'If your SaaS serves a regulated market — legal, financial, healthcare, government — your agency needs to understand the compliance requirements before they write a line of code. GDPR is table stakes. FCA implications for financial apps, SRA rules for legal platforms, CQC requirements for healthcare software — these need to be understood at architecture level. Ask directly: have you built for this regulatory context before?',
      },
      {
        type: 'h2',
        heading: '4. Founding Team vs Delivery Team',
        text: 'Many agencies sell you the founding team and deliver with junior contractors. Ask who will actually be working on your product day to day. Ask for names. Look them up on LinkedIn. If the agency cannot tell you who will be on your project before you sign, that is a red flag.',
      },
      {
        type: 'h2',
        heading: '5. The Ownership and IP Question',
        text: 'Ensure your contract explicitly states that all intellectual property created during the engagement — code, designs, documentation — transfers to you on final payment. Some agencies retain licence rights, use your code in boilerplate, or include vendor lock-in through proprietary tooling. Read the IP clause carefully.',
      },
      {
        type: 'h2',
        heading: '6. Post-Launch Support Model',
        text: 'SaaS does not end at launch — it begins there. Ask what the post-launch relationship looks like. Do they offer retained engineering support? How are bugs triaged and SLAs defined? What happens if a critical issue occurs at 2am? A studio with no answer to these questions has never seen a production incident.',
      },
      {
        type: 'h2',
        heading: 'The Checklist',
      },
      {
        type: 'ul',
        items: [
          'Do they own and operate their own SaaS products?',
          'Can they explain architecture decisions, not just outcomes?',
          'Do they understand your regulatory context (GDPR, FCA, SRA, CQC)?',
          'Who specifically will work on your project day-to-day?',
          'Does the contract assign full IP ownership to you?',
          'What does post-launch support look like?',
          'Do they have case studies from your industry?',
          'Can you speak to a previous client directly?',
          'What is their process for scope changes and cost estimates?',
          'Are they a registered company with verifiable credentials?',
        ],
      },
      {
        type: 'cta',
        text: 'Two Bit Digital is a UK-registered SaaS development studio (Companies House #14710072) that has built and operates its own products. If you are evaluating agencies for a SaaS build, we are happy to answer every question on this list.',
      },
    ],
  },
  {
    slug:        'ai-integration-regulated-industries',
    title:       'AI Integration for Regulated Industries: What Engineering Teams Get Wrong',
    excerpt:     'Most AI integrations in regulated sectors fail compliance review before they reach production. Here is what to get right from the start.',
    publishedAt: '2026-04-08',
    readTime:    '10 min read',
    category:    'AI Engineering',
    tags:        ['AI integration', 'regulated industries', 'LLM development', 'compliance', 'RegTech'],
    metaTitle:   'AI Integration for Regulated Industries | LLM Compliance Guide — Two Bit Digital',
    metaDesc:    'What engineering teams consistently get wrong when integrating AI into regulated environments — legal, financial, healthcare, and government. A technical and compliance guide from Two Bit Digital.',
    content: [
      {
        type: 'intro',
        text: 'There is no shortage of enthusiasm for AI in regulated industries. Legal teams want document review copilots. Financial compliance teams want automated disclosure analysis. Healthcare providers want clinical note summarisation. The problem is that most engineering teams approach these integrations the same way they would any other feature — and discover the compliance blockers only when they reach the review stage. Here is what we have learned building AI systems for regulated environments.',
      },
      {
        type: 'h2',
        heading: 'The Core Problem: AI Outputs Are Not Auditable by Default',
        text: 'Most regulated environments require a documented, reproducible explanation for any decision or action. An LLM response is, by default, neither. The same input can produce different outputs on different runs. There is no native audit log. There is no version control for model outputs. If your AI integration will touch compliance-sensitive processes, auditability is not a feature — it is a prerequisite.',
      },
      {
        type: 'h2',
        heading: 'What to Build Into the Foundation',
      },
      {
        type: 'ul',
        items: [
          'Log every prompt and every model response with a unique request ID, timestamp, model version, and temperature setting.',
          'Store prompt templates in version control — not hardcoded in application logic.',
          'Implement a confidence threshold below which AI outputs are routed to human review rather than acted upon automatically.',
          'Build the human oversight layer before you build the automation layer.',
          'Never store sensitive personal data in a third-party vector database without explicit data processing agreements and jurisdiction checks.',
        ],
      },
      {
        type: 'h2',
        heading: 'Data Residency and Processing Agreements',
        text: 'If your application processes personal data — which most regulated industry apps do — you need to understand exactly where that data goes when it leaves your system and hits an LLM API. OpenAI, Anthropic, and Google all offer enterprise agreements with data processing terms that specify data residency, retention periods, and opt-out from training. The default API tier terms are not sufficient for most regulated use cases. Ensure you have signed data processing agreements (DPAs) before processing any personal data through an LLM API.',
      },
      {
        type: 'h2',
        heading: 'The Hallucination Risk in High-Stakes Contexts',
        text: 'LLMs hallucinate. This is a known, documented, and not fully solved problem. In a consumer app, a hallucination is an annoyance. In a legal document review system, a compliance screening tool, or a clinical summarisation tool, a hallucination can create professional liability. The solution is not to avoid AI — it is to architect for fallibility. Every AI output in a high-stakes context should be presented as a draft that requires human confirmation, not a decision that requires human override.',
      },
      {
        type: 'h2',
        heading: 'RAG as the Standard Architecture for Regulated AI',
        text: 'Retrieval-Augmented Generation (RAG) has become the standard architecture for regulated AI applications, and for good reason. Rather than relying on the model\'s training data, RAG retrieves specific, identifiable documents and grounds the model\'s response in them. This means you can cite sources, track which documents informed which output, and update the knowledge base without retraining the model. For legal, financial, and healthcare AI, RAG is not an optimisation — it is the baseline.',
      },
      {
        type: 'h2',
        heading: 'Practical Checklist for Regulated AI Integration',
      },
      {
        type: 'ol',
        items: [
          'Identify every point at which personal data will be processed by an AI model.',
          'Ensure DPAs are in place with every AI API provider before processing any personal data.',
          'Implement structured logging for every prompt and response — with request IDs and model version.',
          'Define explicit confidence thresholds below which outputs route to human review.',
          'Implement RAG rather than relying on base model knowledge for domain-specific tasks.',
          'Build the human oversight interface before the automation layer.',
          'Conduct a Data Protection Impact Assessment (DPIA) before deployment.',
          'Test failure modes: what happens when the AI returns low confidence? When the API is unavailable? When the model returns a refusal?',
        ],
      },
      {
        type: 'cta',
        text: 'Two Bit Digital specialises in AI integration for regulated industries — legal, financial, healthcare, and government. We build with compliance architecture from day one, not as a retrofit.',
      },
    ],
  },
  {
    slug:        'winning-uk-government-digital-contracts',
    title:       'How Technology Companies Can Win UK Government Digital Contracts',
    excerpt:     'G-Cloud, Crown Commercial Service, DOS — the UK government spends billions on technology annually. Here is how to position your company to win.',
    publishedAt: '2026-04-05',
    readTime:    '12 min read',
    category:    'Government Digital',
    tags:        ['government contracts', 'G-Cloud', 'Crown Commercial Service', 'DOS framework', 'UK procurement'],
    metaTitle:   'How to Win UK Government Digital Contracts | G-Cloud & CCS Guide — Two Bit Digital',
    metaDesc:    'A practical guide to winning UK government technology contracts. G-Cloud, DOS, Crown Commercial Service, and what procurement evaluators actually look for. Written by Two Bit Digital.',
    content: [
      {
        type: 'intro',
        text: 'The UK government spends over £10 billion annually on technology. A significant portion of that flows through structured procurement frameworks designed to make it accessible to companies of all sizes — not just the large systems integrators that dominated public sector IT for decades. This guide explains how the main frameworks work and how to position your company to win.',
      },
      {
        type: 'h2',
        heading: 'The Three Main Routes to Market',
        text: 'Most government technology procurement flows through one of three routes: G-Cloud (for cloud-based products and services), the Digital Outcomes and Specialists (DOS) framework (for teams and specialists to deliver specific projects), and the Crown Commercial Service Technology Products and Services (TPS) framework. Understanding which is appropriate for your offering is the starting point.',
      },
      {
        type: 'h2',
        heading: 'G-Cloud: Your Fastest Route to the Catalogue',
        text: 'G-Cloud is a framework that allows pre-approved suppliers to list cloud products and services on the Digital Marketplace (now Crown Marketplace). Buyers can purchase directly without running a full tender. New framework iterations open periodically for new supplier applications. To be approved, you need to submit a service definition, pricing, and terms — but there is no complex bid process. The barrier is lower than most suppliers realise.',
      },
      {
        type: 'h2',
        heading: 'DOS: How Specific Projects Are Procured',
        text: 'The Digital Outcomes and Specialists framework is used when a public sector buyer has a specific project requirement — a new digital service, a data analytics platform, or a cloud migration. Approved suppliers are invited to respond to specific requirements. This is where the writing quality of your response matters most. Government evaluators score responses against stated criteria, often with mandatory minimum thresholds. Understanding the scoring methodology before you write your response is not optional — it is the job.',
      },
      {
        type: 'h2',
        heading: 'What Procurement Evaluators Actually Look For',
        text: 'Having evaluated and reviewed government tender responses across multiple frameworks, the consistent differentiators are not the ones most suppliers focus on. Evaluators are not primarily evaluating technical capability — they assume a baseline level of competence from framework-approved suppliers. They are evaluating evidence: specific examples, measurable outcomes, and demonstrated understanding of the public sector context.',
      },
      {
        type: 'ul',
        items: [
          'Specific evidence of similar work — sector, scale, and outcome, not technology stack.',
          'Demonstrated understanding of government procurement and delivery context (GDS standards, WCAG, government security classifications).',
          'Named individuals with verifiable credentials — not "a senior engineer" but a named person with a track record.',
          'Robust approach to risk — how you handle scope change, how you handle delivery delays, what your escalation path looks like.',
          'Social value: government contracts now require measurable social value commitments — employment, sustainability, community benefit.',
          'Data and security: clear articulation of how you handle government data, what certifications you hold or are working towards (Cyber Essentials, ISO 27001).',
        ],
      },
      {
        type: 'h2',
        heading: 'Pre-qualification: Getting Your Credentials in Order',
        text: 'Before you can bid on most government contracts, you need a minimum set of credentials in place. A UK Companies House registered entity is the baseline. D&B D-U-N-S numbers are required for many government procurement systems. Cyber Essentials certification is increasingly a mandatory requirement. Insurance certificates (professional indemnity, public liability) need to be current. These are not nice-to-haves — they are table stakes for the evaluation stage.',
      },
      {
        type: 'h2',
        heading: 'The SME Advantage',
        text: 'The UK government has explicit policies to increase SME procurement share. The Crown Commercial Service has dedicated SME routes, reduced financial threshold requirements, and simplified evaluation criteria for smaller contracts. The Cabinet Office publishes targets for SME spend. Large system integrators have structural disadvantages on agility, cost, and speed that a well-positioned SME can exploit — if they can demonstrate the governance and accountability that buyers need.',
      },
      {
        type: 'callout',
        text: 'Two Bit Digital is a UK-registered entity (Companies House #14710072), UN Vendor registered (#1177996), and D&B D-U-N-S verified (77-532-7428). We are eligible to respond to government procurement frameworks and actively bid on public sector digital opportunities.',
      },
      {
        type: 'cta',
        text: 'If your organisation is looking for a technology partner with the credentials and experience to deliver on government digital contracts, we would be glad to discuss your requirements.',
      },
    ],
  },
]

export function getInsight(slug: string): InsightPost | undefined {
  return insights.find((p) => p.slug === slug)
}
