"use client";

import { useEffect, useMemo, useState } from "react";

const COPY = {
  en: {
    navComparison: "Comparison",
    navConsultants: "Consultants",
    navPricing: "Pricing",
    navFaq: "FAQ",
    navBook: "Book strategy call",

    badge: "Premium workforce infrastructure for Europe",
    title: "Hire in Europe without opening entities",
    subtitle:
      "Convert contractors into compliant employees in 2 weeks — with payroll, compliance, and high-touch support built in.",
    ctaPrimary: "Get hiring strategy",
    ctaSecondary: "Run cost calculator",

    stat1: "2 weeks",
    stat1Sub: "Typical launch speed",
    stat2: "20–40%",
    stat2Sub: "Potential cost optimization",
    stat3: "1 structure",
    stat3Sub: "Single point of control",

    calculatorTitle: "EU Hiring Cost & Risk Check",
    calculatorSub: "Get an instant estimate and model recommendation.",
    country: "Country",
    salary: "Monthly gross salary (€)",
    role: "Role type",
    model: "Current model",
    teamSize: "Team size",
    result1: "Estimated employer cost",
    result2: "Typical generic EOR cost",
    result3: "Potential monthly savings",
    assessment: "Current assessment",

    riskHigh: "High Risk: Consultant Misclassification",
    riskHighBody:
      "Independent consultants working long-term with one client may face misclassification risk.",
    riskMedium: "Recommended: Hybrid structure",
    riskMediumBody:
      "A mix of payroll, entity, and selective EOR may be more cost-efficient.",
    riskLow: "Recommended: Start lean, stay compliant",
    riskLowBody:
      "A managed structure can help you move fast while reducing setup delays.",

    uniqueBadge: "Workora unique value proposition",
    uniqueTitle: "You are not just another EOR",
    uniqueSub:
      "Workora is built for freelancers and independent consultants who already have clients but need a legal European structure to sign contracts, get paid, access payroll, and work compliantly.",
    uniqueCards: [
      [
        "Freelancer-first",
        "Designed for consultants and freelancers first — not only HR departments."
      ],
      [
        "Bring your own client",
        "Already passed the interview and secured the client? Workora enables the contract."
      ],
      [
        "No company needed",
        "Work legally with European clients without opening your own company."
      ],
      [
        "One flow",
        "Work permit support, legal setup, employment contract, payroll, and client contracting in one process."
      ],
      [
        "Spain-first advantage",
        "Start with a compliant Spain-based structure and expand across Europe with stronger cost control."
      ],
      [
        "Fast onboarding",
        "Move from opportunity to legal working setup in days or weeks, not months."
      ]
    ],

    consultantBadge: "Consultant vs employee reality",
    consultantTitle:
      "Why top consultants across Europe are switching to employment",
    consultantSub:
      "Freelancing can bring freedom, but also hidden legal, financial, and social protection risks. Workora helps consultants keep their client and work, while upgrading the legal structure behind it.",

    freelanceTitle: "Freelance reality today",
    employeeTitle: "Employment via our structure",
    freelanceBullets: [
      "Higher exposure to false self-employment reviews",
      "No employer-backed pension or stronger social security",
      "Harder mortgage and credit approval",
      "Greater legal uncertainty with one long-term client",
      "Admin burden, invoice chasing, and unstable income timing",
      "Difficult to sign client contracts when an EU company is required",
      "No simple route to work permit or employment status"
    ],
    employeeBullets: [
      "Full compliant employment structure",
      "Social security, pension, and healthcare contributions",
      "Same client, same work, cleaner legal setup",
      "Lower misclassification exposure",
      "Bankable income for loans, mortgages, and planning",
      "Client contract enabled through Workora",
      "Work permit, payroll, and legal onboarding support"
    ],

    consultantInsightTitle: "The key insight",
    consultantInsightBody:
      "You do not have to change your client or your work. You upgrade the legal and financial structure behind it.",
    consultantBenefitsTitle:
      "Why standalone consultants benefit from becoming our employee",
    consultantBenefitsBody:
      "This model helps high-value consultants keep momentum while gaining protections usually sacrificed when invoicing alone.",
    consultantBenefitCards: [
      [
        "Keep continuity",
        "Continue serving the same client with minimal disruption."
      ],
      [
        "Gain protection",
        "Move into payroll, social security, and stronger legal footing."
      ],
      [
        "Look stronger financially",
        "Present stable employment income for loans and long-term planning."
      ],
      [
        "Remove admin friction",
        "Reduce invoicing stress, collections risk, and compliance burden."
      ]
    ],

    featureCards: [
      [
        "Reduce contractor risk",
        "Spot likely misclassification before it becomes a tax or labor issue."
      ],
      [
        "Optimize cost",
        "Use payroll, entity, or EOR only where it truly makes sense."
      ],
      [
        "Move faster",
        "Launch hiring in days or weeks instead of waiting months."
      ],
      [
        "Gain visibility",
        "Get one structure, one invoice, and one decision framework."
      ]
    ],

    freelancerSeoBadge: "Freelancer work in Europe",
    freelancerSeoTitle: "Work in Europe without opening a company",
    freelancerSeoSub:
      "Workora helps freelancers, IT consultants, remote professionals, and independent contractors legally work with European clients when the client requires a European company, compliant payroll, or employment contract.",
    freelancerProblemTitle: "Common freelancer problem",
    freelancerSolutionTitle: "Workora solution",
    freelancerProblems: [
      "You have a client but no company",
      "The client requires an EU-based contracting entity",
      "You need an employment contract or payroll setup",
      "You want to convert freelance work into legal employment",
      "You need work permit or legal onboarding support"
    ],
    freelancerSolutions: [
      "Workora signs with the client through a compliant structure",
      "You receive employment and payroll support",
      "Your client gets a cleaner contracting route",
      "You reduce admin, invoicing, and compliance burden",
      "You keep the same client and continue the same work"
    ],

    comparisonTitle: "Why not use generic EOR everywhere?",
    comparisonSub:
      "Because the most convenient model is not always the smartest or most cost-efficient one.",
    comparisonRows: [
      ["Speed to launch", "High", "Low to medium", "High"],
      ["Cost optimization", "Low", "Medium", "High"],
      ["Country flexibility", "Medium", "Low", "High"],
      ["Strategic guidance", "Low", "Low", "High"],
      ["Best for scale", "Medium", "Low", "High"],
      ["Freelancer-first onboarding", "Low", "Low", "High"],
      ["Bring-your-own-client model", "Low", "Low", "High"],
      ["Work permit support", "Limited", "Low", "High"]
    ],

    pricingBadge: "Pricing and revenue model",
    pricingTitle: "Simple pricing for freelancers and companies",
    pricingSub:
      "Start lean, validate demand, and scale through monthly recurring revenue, onboarding fees, legal support, and premium advisory.",
    pricingCards: [
      [
        "Starter",
        "€299/month",
        "For freelancers with one client who need basic contract, compliance, and onboarding support.",
        ["Client contract routing", "Basic compliance review", "Invoice and admin support", "Email support"]
      ],
      [
        "Professional",
        "€599/month",
        "For consultants who need employment, payroll support, and stronger legal structure.",
        ["Employment contract support", "Payroll coordination", "Freelance-to-employee conversion", "Priority onboarding"]
      ],
      [
        "Premium",
        "€999/month",
        "For cross-border consultants or companies needing deeper legal, work permit, and relocation support.",
        ["Work permit support", "Legal partner coordination", "Client contract setup", "Dedicated onboarding support"]
      ],
      [
        "Enterprise",
        "Custom",
        "For companies hiring multiple consultants across Europe with compliance, payroll, and workforce design needs.",
        ["Multi-country setup", "Workforce structuring", "Bulk onboarding", "Custom legal and payroll model"]
      ]
    ],

    revenueTitle: "How Workora generates money",
    revenueSub:
      "The MVP can start manually at low cost, then scale into a recurring workforce infrastructure platform.",
    revenuePoints: [
      "Monthly service fee per consultant or employee",
      "One-time onboarding and contract setup fee",
      "Work permit and legal coordination package",
      "Payroll and compliance administration margin",
      "Premium advisory for companies hiring cross-border talent",
      "Enterprise contracts for multi-consultant onboarding"
    ],

    proofTitle: "How this converts into revenue",
    proofSub: "This page works as a premium sales funnel, not just a brochure.",
    proofSteps: [
      "Visitor lands on a pain-led hero section",
      "Interactive calculator creates engagement",
      "Consultant section increases urgency",
      "Pricing section frames commercial value",
      "Lead form captures qualified prospects",
      "Follow-up pushes the lead into a strategy call"
    ],

    leadBadge: "Lead magnet + strategy session",
    leadTitle: "Start working legally in Europe",
    leadSub:
      "Submit your details and we will help you structure your client contract, payroll, employment setup, and legal onboarding path.",
    leadBullets: [
      "Country-by-country cost logic",
      "EOR vs payroll vs entity framework",
      "Freelance risk checklist",
      "Launch plan for compliant EU hiring",
      "Work permit and legal setup review",
      "Bring-your-own-client onboarding path"
    ],
    firstName: "Your name",
    company: "Company",
    email: "Your email",
    primaryCountry: "Primary country",
    submit: "Get playbook + strategy session",
    integrationHint:
      "Suggested integrations: HubSpot, Mailchimp, Calendly, LinkedIn Insight Tag, Meta Pixel, Google Ads conversion tracking.",
    successTitle: "You’re in.",
    successBody: "Your request has been submitted. We will contact you shortly.",

    seoTitle: "SEO and discovery layer",
    seoBody:
      "Built for Google SEO, Google Ads, LinkedIn, Facebook, and Instagram discovery across Europe.",
    seoExtended:
      "Optimized for high-intent searches around freelancers working legally in Europe, work permits, contractor-to-employee conversion, EOR alternatives, EU payroll, Spain-based employment structure, and hiring without opening entities.",
    keywordsLabel: "High-intent keyword targets",

    faqTitle: "What prospects usually ask before booking",
    faqs: [
      [
        "Can you replace Deel or Remote?",
        "This works best as a strategic, freelancer-first layer above generic EOR or payroll tools, especially when the consultant already has a client."
      ],
      [
        "Who is this best for?",
        "Freelancers, IT consultants, independent contractors, and companies hiring international talent across Europe."
      ],
      [
        "Can consultants keep the same client?",
        "Yes. The goal is usually to improve the legal structure without disrupting the work."
      ],
      [
        "Can this help with work permits?",
        "The MVP positioning includes work permit and legal onboarding coordination through appropriate legal partners."
      ],
      [
        "Can this page capture real leads?",
        "Yes. It submits directly to Formspree and can later connect to CRM or booking tools."
      ]
    ],

    footer:
      "Compliant hiring, payroll, freelancer onboarding, and workforce structuring across Europe."
  }
};

COPY.es = COPY.en;
COPY.fr = COPY.en;
COPY.de = COPY.en;
COPY.nl = COPY.en;

const COUNTRIES = {
  spain: {
    name: { en: "Spain", es: "España", fr: "Espagne", de: "Spanien", nl: "Spanje" },
    multiplier: 1.3,
    note: { en: "Strong employment protections and social security overhead." }
  },
  germany: {
    name: { en: "Germany", es: "Alemania", fr: "Allemagne", de: "Deutschland", nl: "Duitsland" },
    multiplier: 1.2,
    note: { en: "Strict labor compliance with good scale potential." }
  },
  belgium: {
    name: { en: "Belgium", es: "Bélgica", fr: "Belgique", de: "Belgien", nl: "België" },
    multiplier: 1.35,
    note: { en: "Higher burden but strong fit for R&D teams." }
  },
  netherlands: {
    name: { en: "Netherlands", es: "Países Bajos", fr: "Pays-Bas", de: "Niederlande", nl: "Nederland" },
    multiplier: 1.22,
    note: { en: "Business-friendly and good for international structures." }
  },
  ireland: {
    name: { en: "Ireland", es: "Irlanda", fr: "Irlande", de: "Irland", nl: "Ierland" },
    multiplier: 1.15,
    note: { en: "Strong HQ location and English-speaking ecosystem." }
  }
};

const KEYWORDS = [
  "work in Europe without company",
  "freelancer Europe legal contract",
  "contractor to employee Europe",
  "work permit Europe freelancers",
  "invoice client without company EU",
  "EOR alternative freelancers",
  "freelance compliance Europe",
  "independent consultant Europe contract",
  "IT consultant employment Europe",
  "EU payroll for freelancers",
  "Spain payroll for freelancers",
  "hire employees in Europe",
  "EOR Europe",
  "payroll services EU",
  "contractor vs employee Europe",
  "convert contractor to employee",
  "work permit Spain consultant",
  "European client requires company",
  "freelancer with no company Europe",
  "bring your own client employment"
];

function Pill({ children }) {
  return <span className="pill">{children}</span>;
}

function IconCircle({ children }) {
  return <div className="iconCircle">{children}</div>;
}

export default function Page() {
  const [lang, setLang] = useState("en");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showStickyCta, setShowStickyCta] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    company: "",
    workEmail: "",
    country: "spain",
    leadCountry: "",
    salary: "4000",
    role: "it_consultant",
    model: "contractor",
    teamSize: "1-5",
    hiringGoal: ""
  });

  const copy = COPY[lang] || COPY.en;

  const setField = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  useEffect(() => {
    if (typeof navigator !== "undefined") {
      const auto = navigator.language.slice(0, 2).toLowerCase();
      if (COPY[auto]) setLang(auto);
    }
  }, []);

  useEffect(() => {
    const onScroll = () => setShowStickyCta(window.scrollY > 420);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const selectedCountry = COUNTRIES[form.country] || COUNTRIES.spain;
  const salary = Number(form.salary || 0);

  const employerCost = useMemo(
    () => salary * selectedCountry.multiplier,
    [salary, selectedCountry]
  );

  const eorEstimate = useMemo(() => employerCost + 550, [employerCost]);

  const savingsVsEor = useMemo(
    () => Math.max(0, eorEstimate - (employerCost + 650)),
    [eorEstimate, employerCost]
  );

  const recommendation = useMemo(() => {
    if (
      form.role === "it_consultant" ||
      form.role === "independent_consultant" ||
      (form.model === "contractor" && ["operations", "scientist"].includes(form.role))
    ) {
      return { title: copy.riskHigh, body: copy.riskHighBody, tone: "high" };
    }

    if (form.teamSize === "11-20" || form.teamSize === "20+" || form.model === "eor") {
      return { title: copy.riskMedium, body: copy.riskMediumBody, tone: "medium" };
    }

    return { title: copy.riskLow, body: copy.riskLowBody, tone: "low" };
  }, [copy, form]);

  const riskClass =
    recommendation.tone === "high"
      ? "assessment high"
      : recommendation.tone === "medium"
      ? "assessment medium"
      : "assessment low";

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("https://formspree.io/f/xkokebwk", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: form.firstName,
        company: form.company,
        email: form.workEmail,
        primaryCountry: form.leadCountry,
        hiringGoal: form.hiringGoal,
        calculatorCountry: form.country,
        salary: form.salary,
        role: form.role,
        model: form.model
      })
    });

    setSubmitted(true);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Workora",
    description:
      "Workora helps freelancers and companies work legally across Europe through compliant contracts, payroll, employment setup, and work permit support.",
    url: "https://getworkora.com",
    sameAs: [],
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "EUR",
      lowPrice: "299",
      highPrice: "999",
      offerCount: "4"
    },
    keywords: KEYWORDS.join(", ")
  };

  return (
    <main className="pageShell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className={showStickyCta ? "stickyBar visible" : "stickyBar"}>
        <div className="stickyInner">
          <div>
            <div className="stickyTitle">{copy.leadTitle}</div>
            <div className="stickySub">{copy.leadSub}</div>
          </div>
          <a href="#lead-capture" className="primaryBtn compact">
            {copy.ctaPrimary}
          </a>
        </div>
      </div>

      <section className="heroSection">
        <div className="container topNav">
          <div className="brandWrap">
            <div className="brandMark">W</div>
            <div>
              <div className="brandTop">Workora</div>
              <div className="brandBottom">Workforce Infrastructure</div>
            </div>
          </div>

          <div className="navDesktop">
            <a href="#comparison">{copy.navComparison}</a>
            <a href="#consultants">{copy.navConsultants}</a>
            <a href="#pricing">{copy.navPricing}</a>
            <a href="#faq">{copy.navFaq}</a>
            <a href="#lead-capture" className="ghostBtn">{copy.navBook}</a>
          </div>

          <div className="langWrap">
            <div className="langDesktop">
              {Object.keys(COPY).map((l) => (
                <button
                  key={l}
                  type="button"
                  className={lang === l ? "langBtn active" : "langBtn"}
                  onClick={() => setLang(l)}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>

            <button
              type="button"
              className="menuBtn"
              onClick={() => setMobileMenuOpen((v) => !v)}
            >
              {mobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="container mobilePanel">
            <a href="#comparison">{copy.navComparison}</a>
            <a href="#consultants">{copy.navConsultants}</a>
            <a href="#pricing">{copy.navPricing}</a>
            <a href="#faq">{copy.navFaq}</a>
            <a href="#lead-capture" className="mobileBook">{copy.navBook}</a>
          </div>
        )}

        <div className="container heroGrid">
          <div>
            <Pill>{copy.badge}</Pill>
            <h1 className="heroTitle">{copy.title}</h1>
            <p className="heroSubtitle">{copy.subtitle}</p>

            <div className="heroCtas">
              <a href="#lead-capture" className="primaryBtn">{copy.ctaPrimary}</a>
              <a href="#calculator" className="secondaryBtn">{copy.ctaSecondary}</a>
            </div>

            <div className="statsGrid">
              <div className="statCard">
                <div className="statValue">{copy.stat1}</div>
                <div className="statLabel">{copy.stat1Sub}</div>
              </div>
              <div className="statCard">
                <div className="statValue">{copy.stat2}</div>
                <div className="statLabel">{copy.stat2Sub}</div>
              </div>
              <div className="statCard">
                <div className="statValue">{copy.stat3}</div>
                <div className="statLabel">{copy.stat3Sub}</div>
              </div>
            </div>
          </div>

          <div className="calculatorCard" id="calculator">
            <div className="calculatorHeader">
              <div>
                <div className="microLabel">Live assessment</div>
                <h2 className="sectionTitle tight">{copy.calculatorTitle}</h2>
                <div className="sectionSub small">{copy.calculatorSub}</div>
              </div>
              <IconCircle>✓</IconCircle>
            </div>

            <div className="formGrid">
              <div className="field">
                <label>{copy.country}</label>
                <select value={form.country} onChange={(e) => setField("country", e.target.value)}>
                  {Object.entries(COUNTRIES).map(([key, value]) => (
                    <option key={key} value={key}>
                      {value.name[lang] || value.name.en}
                    </option>
                  ))}
                </select>
              </div>

              <div className="field">
                <label>{copy.salary}</label>
                <input
                  type="number"
                  value={form.salary}
                  onChange={(e) => setField("salary", e.target.value)}
                />
              </div>

              <div className="field">
                <label>{copy.role}</label>
                <select value={form.role} onChange={(e) => setField("role", e.target.value)}>
                  <option value="founder">Founder / leadership</option>
                  <option value="scientist">Scientist / regulated role</option>
                  <option value="engineer">Engineer / product</option>
                  <option value="operations">Operations / embedded role</option>
                  <option value="it_consultant">IT Consultant</option>
                  <option value="independent_consultant">Independent Consultant</option>
                </select>
              </div>

              <div className="field">
                <label>{copy.model}</label>
                <select value={form.model} onChange={(e) => setField("model", e.target.value)}>
                  <option value="contractor">Freelance / contractor</option>
                  <option value="employee">Employee</option>
                  <option value="eor">EOR platform</option>
                </select>
              </div>

              <div className="field full">
                <label>{copy.teamSize}</label>
                <select value={form.teamSize} onChange={(e) => setField("teamSize", e.target.value)}>
                  <option>1-5</option>
                  <option>6-10</option>
                  <option>11-20</option>
                  <option>20+</option>
                </select>
              </div>
            </div>

            <div className="resultPanel">
              <div className="resultGrid">
                <div>
                  <div className="resultLabel">{copy.result1}</div>
                  <div className="resultValue">€{Math.round(employerCost).toLocaleString()}</div>
                </div>
                <div>
                  <div className="resultLabel">{copy.result2}</div>
                  <div className="resultValue">€{Math.round(eorEstimate).toLocaleString()}</div>
                </div>
                <div>
                  <div className="resultLabel">{copy.result3}</div>
                  <div className="resultValue">€{Math.round(savingsVsEor).toLocaleString()}</div>
                </div>
              </div>

              <div className={riskClass}>
                <div className="assessmentTitle">{copy.assessment}</div>
                <div className="assessmentHeadline">{recommendation.title}</div>
                <p>{recommendation.body}</p>
                <p className="countryNote">{selectedCountry.note[lang] || selectedCountry.note.en}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container sectionPad">
        <div className="featureGrid">
          {copy.featureCards.map(([title, body]) => (
            <div className="featureCard" key={title}>
              <div className="featureIcon">✦</div>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container sectionPad">
        <Pill>{copy.uniqueBadge}</Pill>
        <h2 className="sectionTitle">{copy.uniqueTitle}</h2>
        <p className="sectionSub">{copy.uniqueSub}</p>

        <div className="featureGrid topGap">
          {copy.uniqueCards.map(([title, body]) => (
            <div className="featureCard" key={title}>
              <div className="featureIcon">★</div>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container sectionPad" id="consultants">
        <Pill>{copy.consultantBadge}</Pill>
        <h2 className="sectionTitle">{copy.consultantTitle}</h2>
        <p className="sectionSub">{copy.consultantSub}</p>

        <div className="twoColGrid topGap">
          <div className="riskCard redTone">
            <h3>{copy.freelanceTitle}</h3>
            <ul>
              {copy.freelanceBullets.map((item) => (
                <li key={item}>⚠ {item}</li>
              ))}
            </ul>
          </div>

          <div className="riskCard greenTone">
            <h3>{copy.employeeTitle}</h3>
            <ul>
              {copy.employeeBullets.map((item) => (
                <li key={item}>✓ {item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="darkInsight">
          <h3>{copy.consultantInsightTitle}</h3>
          <p>{copy.consultantInsightBody}</p>
        </div>

        <div className="twoColWide topGap">
          <div className="whiteCard">
            <h3>{copy.consultantBenefitsTitle}</h3>
            <p className="muted">{copy.consultantBenefitsBody}</p>
            <div className="miniCardGrid">
              {copy.consultantBenefitCards.map(([title, body]) => (
                <div className="miniCard" key={title}>
                  <h4>{title}</h4>
                  <p>{body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="whiteCard">
            <div className="triggerBadge">Consultant conversion trigger</div>
            <h3>Why this is so persuasive</h3>
            <div className="persuasionList">
              <p><strong>Emotionally:</strong> consultants want freedom, but also security and stability.</p>
              <p><strong>Practically:</strong> many already work like employees, without the benefits.</p>
              <p><strong>Commercially:</strong> your offer removes pain while preserving continuity.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container sectionPad">
        <Pill>{copy.freelancerSeoBadge}</Pill>
        <h2 className="sectionTitle">{copy.freelancerSeoTitle}</h2>
        <p className="sectionSub">{copy.freelancerSeoSub}</p>

        <div className="twoColGrid topGap">
          <div className="whiteCard">
            <h3>{copy.freelancerProblemTitle}</h3>
            <ul>
              {copy.freelancerProblems.map((item) => (
                <li key={item}>⚠ {item}</li>
              ))}
            </ul>
          </div>

          <div className="whiteCard">
            <h3>{copy.freelancerSolutionTitle}</h3>
            <ul>
              {copy.freelancerSolutions.map((item) => (
                <li key={item}>✓ {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="comparisonSection" id="comparison">
        <div className="container sectionPad">
          <Pill>{copy.navComparison}</Pill>
          <h2 className="sectionTitle">{copy.comparisonTitle}</h2>
          <p className="sectionSub">{copy.comparisonSub}</p>

          <div className="comparisonTable">
            <div className="comparisonHead">
              <div>Feature</div>
              <div>Generic EOR only</div>
              <div>Local payroll only</div>
              <div>Workora hybrid</div>
            </div>

            {copy.comparisonRows.map((row) => (
              <div className="comparisonRow" key={row[0]}>
                <div className="comparisonFeature">{row[0]}</div>
                <div>{row[1]}</div>
                <div>{row[2]}</div>
                <div className="highlighted">{row[3]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container sectionPad">
        <div className="caseGrid">
          {[
            ["Biotech hiring across 4 countries", "Reduce over-reliance on high-cost EOR usage.", "Potential savings: €5K+/month"],
            ["Startup launch without entity setup", "Enable first hires while keeping a path toward later entity formation.", "Launch speed: ~2 weeks"],
            ["Contractor conversion program", "Move embedded roles into safer employment structures.", "Risk reduction: materially improved"],
            ["Freelancer with client but no company", "Workora provides a compliant structure so the consultant can contract legally.", "Revenue model: monthly fee + setup"],
            ["Company hiring outside Europe", "Workora helps structure onboarding, payroll, work permit support, and administration.", "Expansion path: enterprise package"]
          ].map(([title, body, metric]) => (
            <div className="caseCard" key={title}>
              <div className="caseIcon">◆</div>
              <h3>{title}</h3>
              <p>{body}</p>
              <div className="metricPill">{metric}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container sectionPad" id="pricing">
        <Pill>{copy.pricingBadge}</Pill>
        <h2 className="sectionTitle">{copy.pricingTitle}</h2>
        <p className="sectionSub">{copy.pricingSub}</p>

        <div className="pricingGrid">
          {copy.pricingCards.map(([title, price, desc, features]) => (
            <div className="pricingCard" key={title}>
              <h3>{title}</h3>
              <div className="price">{price}</div>
              <p>{desc}</p>
              <ul>
                {features.map((item) => (
                  <li key={item}>✓ {item}</li>
                ))}
              </ul>
              <a href="#lead-capture" className="primaryBtn fullWidth">
                {copy.ctaPrimary}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="container sectionPad">
        <Pill>{copy.revenueTitle}</Pill>
        <h2 className="sectionTitle">{copy.revenueSub}</h2>

        <div className="featureGrid">
          {copy.revenuePoints.map((point) => (
            <div className="featureCard" key={point}>
              <div className="featureIcon">€</div>
              <p>{point}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="darkSection">
        <div className="container sectionPad twoColWide darkGrid">
          <div>
            <Pill>{copy.proofTitle}</Pill>
            <h2 className="sectionTitle light">{copy.proofSub}</h2>
            <p className="sectionSub lightSub">
              This page is designed to convert across Google, LinkedIn, Facebook, Instagram, and direct outbound.
            </p>
          </div>

          <div className="processCard">
            {copy.proofSteps.map((step, i) => (
              <div className="stepItem" key={step}>
                <div className="stepNum">{i + 1}</div>
                <div>{step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container sectionPad" id="lead-capture">
        <div className="leadGrid">
          <div className="leadLeft">
            <Pill>{copy.leadBadge}</Pill>
            <h2 className="sectionTitle light">{copy.leadTitle}</h2>
            <p className="sectionSub lightSub">{copy.leadSub}</p>

            <div className="leadBulletGrid">
              {copy.leadBullets.map((item) => (
                <div className="leadBullet" key={item}>✓ {item}</div>
              ))}
            </div>
          </div>

          <div className="leadRight">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="leadForm">
                <div>
                  <div className="microLabel">Get instant access</div>
                  <h3 className="formTitle">{copy.ctaPrimary}</h3>
                </div>

                <div className="formGrid">
                  <div className="field">
                    <label>{copy.firstName}</label>
                    <input
                      name="firstName"
                      type="text"
                      value={form.firstName}
                      onChange={(e) => setField("firstName", e.target.value)}
                      placeholder="Steve Peterson"
                      required
                    />
                  </div>

                  <div className="field">
                    <label>{copy.company}</label>
                    <input
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={(e) => setField("company", e.target.value)}
                      placeholder="Your company"
                    />
                  </div>

                  <div className="field">
                    <label>{copy.email}</label>
                    <input
                      name="email"
                      type="email"
                      value={form.workEmail}
                      onChange={(e) => setField("workEmail", e.target.value)}
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div className="field">
                    <label>Hiring goal</label>
                    <select
                      name="hiringGoal"
                      value={form.hiringGoal}
                      onChange={(e) => setField("hiringGoal", e.target.value)}
                      required
                    >
                      <option value="">Select hiring goal</option>
                      <option value="first-hire">Hiring first employee in Europe</option>
                      <option value="expanding">Expanding team in Europe</option>
                      <option value="contractors">Hiring contractors</option>
                      <option value="compliance">Fixing compliance / structure</option>
                      <option value="work-permit">Work permit / legal setup support</option>
                      <option value="freelancer-client">I am a freelancer with my own client</option>
                      <option value="unsure">Not sure yet</option>
                    </select>
                  </div>

                  <div className="field full">
                    <label>{copy.primaryCountry}</label>
                    <input
                      name="country"
                      type="text"
                      value={form.leadCountry}
                      onChange={(e) => setField("leadCountry", e.target.value)}
                      placeholder="e.g. Spain, Germany, France"
                      required
                    />
                  </div>
                </div>

                <div className={riskClass}>
                  <div className="assessmentTitle">{copy.assessment}</div>
                  <div className="assessmentHeadline">{recommendation.title}</div>
                  <p>{recommendation.body}</p>
                </div>

                <button className="primaryBtn fullWidth" type="submit">
                  {copy.submit}
                </button>

                <div className="integrationHint">{copy.integrationHint}</div>
              </form>
            ) : (
              <div className="successBox">
                <div className="successIcon">✓</div>
                <h3>{copy.successTitle}</h3>
                <p>{copy.successBody}</p>
              </div>
            )}
          </div>
        </div>
      </section>

     <section className="container sectionPad">
  <div className="cleanSeoBlock">
    <Pill>Work legally across Europe</Pill>

    <h2 className="sectionTitle">
      Work in Europe without opening a company
    </h2>

    <p className="sectionSub">
      Whether you're a freelancer, consultant, or company, Workora helps you operate legally across Europe with compliant employment structures, payroll, and contractor-to-employee conversion — without the complexity of setting up entities.
    </p>

    <div className="featureGrid topGap">
      <div className="featureCard">
        <h3>For freelancers</h3>
        <p>
          Keep your client, upgrade your legal structure, and access social security, payroll, and financial stability.
        </p>
      </div>

      <div className="featureCard">
        <h3>For companies</h3>
        <p>
          Hire across Europe without opening entities while reducing compliance risks and optimizing cost.
        </p>
      </div>

      <div className="featureCard">
        <h3>For consultants</h3>
        <p>
          Convert long-term contracts into compliant employment without disrupting your work or income.
        </p>
      </div>
    </div>
  </div>

  {/* 🔒 Hidden SEO layer (Google reads it, users don't see it) */}
  <div style={{ display: "none" }}>
    hire employees in Europe, EOR Europe, payroll services EU, contractor vs employee Europe,
    freelance compliance EU, convert contractor to employee, IT consultant employment Europe,
    independent consultant employment contract Europe, work in Europe without company,
    freelancer Europe legal contract, work permit Europe freelancers, invoice client without company EU,
    EOR alternative freelancers, EU payroll for freelancers, Spain payroll freelancers
  </div>
</section>

      <section className="container sectionPad" id="faq">
        <Pill>{copy.navFaq}</Pill>
        <h2 className="sectionTitle">{copy.faqTitle}</h2>

        <div className="faqGrid">
          {copy.faqs.map(([q, a]) => (
            <div className="faqCard" key={q}>
              <h3>{q}</h3>
              <p>{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="siteFooter">
        <div className="container footerInner">
          <div>
            <div className="footerBrand">Workora</div>
            <div className="footerText">{copy.footer}</div>
          </div>
          <div className="footerRight">Enterprise-ready premium funnel</div>
        </div>
      </footer>
    </main>
  );
}
