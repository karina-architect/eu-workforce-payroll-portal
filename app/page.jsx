"use client";

import { useEffect, useMemo, useState } from "react";

const COPY = {
  en: {
    navComparison: "Comparison",
    navConsultants: "Consultants",
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
      "Independent consultants working long-term with one client are often at elevated misclassification risk under European labor rules.",
    riskMedium: "Recommended: Hybrid structure",
    riskMediumBody:
      "At your scale, a mix of payroll, entity, and selective EOR usage is often more cost-efficient than one model everywhere.",
    riskLow: "Recommended: Start lean, stay compliant",
    riskLowBody:
      "A managed payroll or EOR-backed structure can help you move fast while avoiding entity setup delays.",
    consultantBadge: "Consultant vs employee reality",
    consultantTitle:
      "Why top consultants across Europe are switching to employment",
    consultantSub:
      "Many IT and independent consultants assume freelancing gives maximum freedom. In today’s European environment, that often comes with hidden risk, weaker protection, and less financial stability.",
    freelanceTitle: "Freelance reality today",
    employeeTitle: "Employment via our structure",
    freelanceBullets: [
      "Higher exposure to false self-employment reviews and audits",
      "No employer-backed pension or stronger social security coverage",
      "No unemployment safety net in many practical situations",
      "Harder mortgage, rent, and credit approval with irregular invoices",
      "Greater legal uncertainty when working long-term for one client",
      "Admin burden, invoice chasing, and inconsistent income timing"
    ],
    employeeBullets: [
      "Full compliant employment structure",
      "Social security, pension, and healthcare contributions",
      "Same client, same work, cleaner legal setup",
      "Far lower misclassification exposure",
      "Stronger legal protection and documented employment status",
      "Bankable income for loans, mortgages, and long-term planning"
    ],
    consultantInsightTitle: "The key insight",
    consultantInsightBody:
      "You do not have to change your client or your day-to-day work. You simply upgrade the legal and financial structure behind it — from vulnerable freelance dependence to stable, compliant employment.",
    consultantBenefitsTitle:
      "Why standalone consultants benefit from becoming our employee",
    consultantBenefitsBody:
      "This model helps high-value consultants keep commercial momentum while gaining protections they usually sacrifice when invoicing alone. It is especially compelling for IT consultants and independent consultants embedded with one client over time.",
    consultantBenefitCards: [
      ["Keep continuity", "Continue serving the same client with minimal operational disruption."],
      ["Gain protection", "Move into a structure with payroll, social security, and stronger legal footing."],
      ["Look stronger financially", "Present stable employment income for housing, loans, and long-term security."],
      ["Remove admin friction", "Reduce invoicing stress, collections risk, and self-managed compliance burden."]
    ],
    featureCards: [
      ["Reduce contractor risk", "Spot likely misclassification before it becomes a tax or labor issue."],
      ["Optimize cost", "Use payroll, entity, or EOR only where it truly makes sense."],
      ["Move faster", "Launch hiring in days or weeks instead of waiting months for entity setup."],
      ["Gain visibility", "Get one structure, one invoice, and one decision framework."]
    ],
    comparisonTitle: "Why not use generic EOR everywhere?",
    comparisonSub:
      "Because the most convenient model is not always the smartest or most cost-efficient one.",
    comparisonRows: [
      ["Speed to launch", "High", "Low to medium", "High"],
      ["Cost optimization", "Low", "Medium", "High"],
      ["Country flexibility", "Medium", "Low", "High"],
      ["Strategic guidance", "Low", "Low", "High"],
      ["Best for scale", "Medium", "Low", "High"]
    ],
    proofTitle: "How this converts into revenue",
    proofSub: "This page works as a premium sales funnel, not just a brochure.",
    proofSteps: [
      "Visitor lands on a pain-led hero section",
      "Interactive calculator creates engagement and relevance",
      "Consultant section increases emotional and practical urgency",
      "Lead form captures qualified prospects",
      "Follow-up email sequence pushes the lead into a strategy call"
    ],
    leadBadge: "Lead magnet + strategy session",
    leadTitle: "Get the European Biotech Hiring & Payroll Playbook",
    leadSub:
      "Unlock your hiring assessment, receive the playbook, and request a custom review of your current setup.",
    leadBullets: [
      "Country-by-country cost logic",
      "EOR vs payroll vs entity framework",
      "Freelance risk checklist",
      "Launch plan for compliant EU hiring"
    ],
    firstName: "Your name",
    company: "Company",
    email: "Your email",
    primaryCountry: "Primary country",
    submit: "Get playbook + strategy session",
    integrationHint:
      "Suggested integrations: HubSpot, Mailchimp, Calendly, LinkedIn Insight Tag, Meta Pixel, Google Ads conversion tracking.",
    successTitle: "You’re in.",
    successBody:
      "Your request has been captured in this demo view. Connect this form to your CRM or booking flow for live lead capture.",
    seoTitle: "SEO and discovery layer",
    seoBody:
      "Built for Google SEO, Google Ads, LinkedIn, Facebook, and Instagram discovery across Europe.",
    keywordsLabel: "High-intent keyword targets",
    faqTitle: "What prospects usually ask before booking",
    faqs: [
      ["Can you replace Deel or Remote?", "This positioning works best as a strategic layer above generic EOR or payroll tools, not as a commodity replacement pitch."],
      ["Who is this best for?", "Companies hiring in Europe, especially biotech, tech, and regulated teams that need speed and compliance clarity."],
      ["Can consultants keep the same client?", "Yes. The goal is often to improve the legal structure around an existing commercial reality, not to disrupt the work itself."],
      ["Can this page capture real leads?", "Yes. It is structured for real lead capture and ready to connect to a CRM, email platform, and booking tool."]
    ],
    footer: "Compliant hiring, payroll, and workforce structuring across Europe."
  },
  es: {
    navComparison: "Comparación",
    navConsultants: "Consultores",
    navFaq: "FAQ",
    navBook: "Reservar llamada",
    badge: "Infraestructura premium de empleo en Europa",
    title: "Contrata en Europa sin abrir empresas",
    subtitle: "Convierte contratistas en empleados conformes en 2 semanas, con nómina, cumplimiento y soporte premium.",
    ctaPrimary: "Obtener estrategia",
    ctaSecondary: "Calcular coste",
    stat1: "2 semanas",
    stat1Sub: "Velocidad típica de lanzamiento",
    stat2: "20–40%",
    stat2Sub: "Ahorro potencial",
    stat3: "1 estructura",
    stat3Sub: "Control centralizado",
    calculatorTitle: "Chequeo de coste y riesgo en Europa",
    calculatorSub: "Obtén una estimación instantánea y una recomendación.",
    country: "País",
    salary: "Salario bruto mensual (€)",
    role: "Tipo de rol",
    model: "Modelo actual",
    teamSize: "Tamaño del equipo",
    result1: "Coste estimado del empleador",
    result2: "Coste típico EOR genérico",
    result3: "Ahorro mensual potencial",
    assessment: "Evaluación actual",
    riskHigh: "Alto riesgo: reclasificación del consultor",
    riskHighBody: "Los consultores independientes que trabajan a largo plazo para un solo cliente suelen tener mayor riesgo de reclasificación.",
    riskMedium: "Recomendado: estructura híbrida",
    riskMediumBody: "A su escala, mezclar nómina, entidad y uso selectivo de EOR suele ser más eficiente.",
    riskLow: "Recomendado: avanzar rápido y cumplir",
    riskLowBody: "Una estructura gestionada ayuda a contratar rápido sin abrir entidad de inmediato.",
    consultantBadge: "Realidad consultor vs empleado",
    consultantTitle: "Por qué los mejores consultores en Europa están pasando a empleo",
    consultantSub: "Muchos consultores IT e independientes creen que ser freelance da máxima libertad. Hoy en Europa eso suele implicar más riesgo y menos estabilidad.",
    freelanceTitle: "Realidad freelance",
    employeeTitle: "Ventaja del empleo con nuestra estructura",
    freelanceBullets: [
      "Mayor exposición a auditorías",
      "Sin mejor cobertura social ni pensión empresarial",
      "Sin red real de desempleo",
      "Más difícil para hipoteca y crédito",
      "Más incertidumbre jurídica con un solo cliente",
      "Más carga administrativa y cobros inestables"
    ],
    employeeBullets: [
      "Estructura laboral plenamente conforme",
      "Seguridad social, pensión y salud",
      "Mismo cliente, mismo trabajo, estructura más limpia",
      "Mucho menos riesgo de reclasificación",
      "Mayor protección legal",
      "Ingresos bancables para hipoteca y planificación"
    ],
    consultantInsightTitle: "La idea clave",
    consultantInsightBody: "No cambias tu cliente ni tu trabajo diario. Solo mejoras la estructura legal y financiera que lo soporta.",
    consultantBenefitsTitle: "Por qué a los consultores independientes les conviene ser nuestros empleados",
    consultantBenefitsBody: "Este modelo permite mantener la continuidad comercial mientras se gana seguridad, protección y credibilidad financiera.",
    consultantBenefitCards: [
      ["Mantén continuidad", "Sigue con el mismo cliente con mínima disrupción."],
      ["Gana protección", "Pasa a una estructura con nómina y seguridad social."],
      ["Mejor imagen financiera", "Ingresos estables para vivienda, préstamos y seguridad."],
      ["Menos fricción administrativa", "Reduce facturas, cobros y carga de cumplimiento."]
    ],
    featureCards: [
      ["Reduce riesgo", "Detecta posible mala clasificación antes de que se convierta en problema fiscal o laboral."],
      ["Optimiza coste", "Usa nómina, entidad o EOR solo donde realmente convenga."],
      ["Más velocidad", "Contrata en días o semanas, no en meses."],
      ["Más visibilidad", "Una estructura, una factura y una lógica clara."]
    ],
    comparisonTitle: "¿Por qué no usar EOR genérico en todas partes?",
    comparisonSub: "Porque el modelo más cómodo no siempre es el más inteligente ni el más rentable.",
    comparisonRows: [
      ["Velocidad", "Alta", "Baja/media", "Alta"],
      ["Optimización de coste", "Baja", "Media", "Alta"],
      ["Flexibilidad por país", "Media", "Baja", "Alta"],
      ["Guía estratégica", "Baja", "Baja", "Alta"],
      ["Mejor para escalar", "Media", "Baja", "Alta"]
    ],
    proofTitle: "Cómo esto se convierte en ventas",
    proofSub: "Esta página funciona como embudo premium, no como folleto.",
    proofSteps: [
      "Entrada por dolor claro",
      "Calculadora crea interés",
      "Sección de consultores aumenta urgencia",
      "Formulario capta leads cualificados",
      "Email lleva a llamada estratégica"
    ],
    leadBadge: "Lead magnet + sesión estratégica",
    leadTitle: "Obtén la guía europea de contratación y nómina biotech",
    leadSub: "Desbloquea tu evaluación, recibe la guía y solicita una revisión de tu situación.",
    leadBullets: [
      "Lógica de coste por país",
      "Marco EOR vs nómina vs entidad",
      "Checklist de riesgo freelance",
      "Plan de lanzamiento conforme"
    ],
    firstName: "Nombre",
    company: "Empresa",
    email: "Email profesional",
    primaryCountry: "País principal",
    submit: "Obtener guía + sesión",
    integrationHint: "Integraciones sugeridas: HubSpot, Mailchimp, Calendly, LinkedIn Insight Tag, Meta Pixel y conversiones de Google Ads.",
    successTitle: "Listo.",
    successBody: "Tu solicitud ha sido capturada en esta demo. Conecta el formulario a tu CRM o agenda para captación real.",
    seoTitle: "Capa SEO y descubrimiento",
    seoBody: "Preparado para SEO, Google Ads, LinkedIn, Facebook e Instagram en Europa.",
    keywordsLabel: "Palabras clave de alta intención",
    faqTitle: "Preguntas frecuentes antes de reservar",
    faqs: [
      ["¿Sustituyen a Deel o Remote?", "La mejor posición es como capa estratégica sobre herramientas genéricas."],
      ["¿Para quién es ideal?", "Empresas que contratan en Europa, especialmente biotech, tech y entornos regulados."],
      ["¿Los consultores pueden mantener el mismo cliente?", "Sí. Normalmente la idea es mejorar la estructura legal sin cambiar la realidad comercial."],
      ["¿Puede captar leads reales?", "Sí. Está preparado para CRM, email y herramienta de reserva."]
    ],
    footer: "Contratación, nómina y estructuración laboral conforme en Europa."
  },
  fr: {
    navComparison: "Comparaison",
    navConsultants: "Consultants",
    navFaq: "FAQ",
    navBook: "Réserver un appel",
    badge: "Infrastructure premium d’emploi en Europe",
    title: "Embauchez en Europe sans créer d’entités",
    subtitle: "Transformez des contractants en salariés conformes en 2 semaines avec paie, conformité et accompagnement premium.",
    ctaPrimary: "Obtenir la stratégie",
    ctaSecondary: "Calculer le coût",
    stat1: "2 semaines",
    stat1Sub: "Délai typique",
    stat2: "20–40%",
    stat2Sub: "Optimisation potentielle",
    stat3: "1 structure",
    stat3Sub: "Point de contrôle unique",
    calculatorTitle: "Vérification coût et risque Europe",
    calculatorSub: "Recevez une estimation immédiate et une recommandation.",
    country: "Pays",
    salary: "Salaire brut mensuel (€)",
    role: "Type de rôle",
    model: "Modèle actuel",
    teamSize: "Taille de l’équipe",
    result1: "Coût employeur estimé",
    result2: "Coût EOR générique",
    result3: "Économie mensuelle potentielle",
    assessment: "Évaluation actuelle",
    riskHigh: "Risque élevé : requalification du consultant",
    riskHighBody: "Les consultants indépendants travaillant durablement pour un seul client sont souvent plus exposés à la requalification.",
    riskMedium: "Recommandé : structure hybride",
    riskMediumBody: "À cette échelle, une combinaison paie + entité + EOR sélectif est souvent plus efficace.",
    riskLow: "Recommandé : aller vite tout en restant conforme",
    riskLowBody: "Une structure gérée permet d’embaucher rapidement sans créer immédiatement une entité.",
    consultantBadge: "Réalité consultant vs salarié",
    consultantTitle: "Pourquoi les meilleurs consultants en Europe passent au statut salarié",
    consultantSub: "Beaucoup de consultants IT et indépendants pensent que le freelance offre plus de liberté. Aujourd’hui, cela apporte souvent plus de risque et moins de stabilité.",
    freelanceTitle: "Réalité du freelance",
    employeeTitle: "Avantage du salariat via notre structure",
    freelanceBullets: [
      "Exposition accrue aux contrôles",
      "Pas de meilleure couverture sociale ni retraite employeur",
      "Peu de filet chômage réel",
      "Plus difficile pour crédit et logement",
      "Incertain juridiquement avec un seul client",
      "Charge administrative et paiements instables"
    ],
    employeeBullets: [
      "Structure salariale pleinement conforme",
      "Cotisations sociales, retraite et santé",
      "Même client, même travail, cadre plus propre",
      "Risque de requalification bien plus faible",
      "Protection juridique renforcée",
      "Revenus bancables pour crédit et stabilité"
    ],
    consultantInsightTitle: "L’idée clé",
    consultantInsightBody: "Vous ne changez ni votre client ni votre travail quotidien. Vous améliorez simplement la structure juridique et financière qui le soutient.",
    consultantBenefitsTitle: "Pourquoi les consultants indépendants gagnent à devenir nos salariés",
    consultantBenefitsBody: "Ce modèle permet de conserver la continuité commerciale tout en gagnant sécurité, protection et crédibilité financière.",
    consultantBenefitCards: [
      ["Garder la continuité", "Continuez avec le même client avec très peu de perturbation."],
      ["Gagner en protection", "Passez à une structure avec paie et cotisations."],
      ["Renforcer votre profil financier", "Des revenus stables pour logement, prêt et sécurité."],
      ["Réduire la friction administrative", "Moins de factures, de recouvrement et de conformité à gérer."]
    ],
    featureCards: [
      ["Réduire le risque", "Détectez la mauvaise classification avant un problème fiscal ou social."],
      ["Optimiser le coût", "Utilisez paie, entité ou EOR uniquement quand cela a du sens."],
      ["Accélérer", "Lancez l’embauche en jours ou semaines plutôt qu’en mois."],
      ["Gagner en visibilité", "Une structure, une facture, une logique."]
    ],
    comparisonTitle: "Pourquoi ne pas utiliser un EOR générique partout ?",
    comparisonSub: "Parce que le modèle le plus pratique n’est pas toujours le plus intelligent.",
    comparisonRows: [
      ["Vitesse de lancement", "Élevée", "Faible à moyenne", "Élevée"],
      ["Optimisation du coût", "Faible", "Moyenne", "Élevée"],
      ["Flexibilité pays", "Moyenne", "Faible", "Élevée"],
      ["Accompagnement stratégique", "Faible", "Faible", "Élevé"],
      ["Meilleur pour scaler", "Moyen", "Faible", "Élevé"]
    ],
    proofTitle: "Comment cela devient un moteur commercial",
    proofSub: "Cette page fonctionne comme un entonnoir premium, pas comme une brochure.",
    proofSteps: [
      "Arrivée sur un message de douleur clair",
      "Calculateur interactif = engagement",
      "Section consultant = urgence émotionnelle et pratique",
      "Formulaire = leads qualifiés",
      "Email = appel stratégique"
    ],
    leadBadge: "Lead magnet + session stratégique",
    leadTitle: "Recevez le playbook européen biotech hiring & payroll",
    leadSub: "Débloquez votre évaluation, recevez le guide et demandez une revue personnalisée.",
    leadBullets: [
      "Logique de coût par pays",
      "Cadre EOR vs paie vs entité",
      "Checklist risque freelance",
      "Plan de lancement conforme"
    ],
    firstName: "Prénom",
    company: "Entreprise",
    email: "Email professionnel",
    primaryCountry: "Pays principal",
    submit: "Recevoir le guide + la session",
    integrationHint: "Intégrations suggérées : HubSpot, Mailchimp, Calendly, LinkedIn Insight Tag, Meta Pixel et conversions Google Ads.",
    successTitle: "C’est bon.",
    successBody: "Votre demande a été capturée dans cette démo. Connectez le formulaire à votre CRM ou agenda pour des leads réels.",
    seoTitle: "Couche SEO et acquisition",
    seoBody: "Conçu pour le SEO, Google Ads, LinkedIn, Facebook et Instagram en Europe.",
    keywordsLabel: "Mots-clés à forte intention",
    faqTitle: "Questions fréquentes avant réservation",
    faqs: [
      ["Pouvez-vous remplacer Deel ou Remote ?", "Le meilleur positionnement est une couche stratégique au-dessus des outils génériques."],
      ["Pour qui est-ce idéal ?", "Les entreprises qui recrutent en Europe, surtout biotech, tech et environnements régulés."],
      ["Les consultants peuvent-ils garder le même client ?", "Oui. L’objectif est souvent d’améliorer la structure juridique sans changer la réalité commerciale."],
      ["Cette page peut-elle capter de vrais leads ?", "Oui. Elle est prête pour CRM, emailing et prise de rendez-vous."]
    ],
    footer: "Embauche, paie et structuration de workforce conformes en Europe."
  },
  de: {
    navComparison: "Vergleich",
    navConsultants: "Berater",
    navFaq: "FAQ",
    navBook: "Strategiegespräch buchen",
    badge: "Premium Workforce-Infrastruktur für Europa",
    title: "In Europa einstellen, ohne Gesellschaften zu eröffnen",
    subtitle: "Wandeln Sie Contractor in regelkonforme Arbeitnehmer um – in 2 Wochen, mit Payroll, Compliance und Premium-Support.",
    ctaPrimary: "Strategie erhalten",
    ctaSecondary: "Kostenrechner starten",
    stat1: "2 Wochen",
    stat1Sub: "Typische Startzeit",
    stat2: "20–40%",
    stat2Sub: "Potenzielle Optimierung",
    stat3: "1 Struktur",
    stat3Sub: "Zentraler Kontrollpunkt",
    calculatorTitle: "EU-Kosten- und Risikocheck",
    calculatorSub: "Sofortige Schätzung und Modell-Empfehlung.",
    country: "Land",
    salary: "Monatliches Bruttogehalt (€)",
    role: "Rollentyp",
    model: "Aktuelles Modell",
    teamSize: "Teamgröße",
    result1: "Geschätzte Arbeitgeberkosten",
    result2: "Typische generische EOR-Kosten",
    result3: "Potenzielle monatliche Ersparnis",
    assessment: "Aktuelle Einschätzung",
    riskHigh: "Hohes Risiko: Berater-Fehlklassifizierung",
    riskHighBody: "Unabhängige Berater mit langfristiger Tätigkeit für einen Kunden tragen oft ein erhöhtes Fehlklassifizierungsrisiko.",
    riskMedium: "Empfohlen: Hybridstruktur",
    riskMediumBody: "In Ihrer Größenordnung ist eine Mischung aus Payroll, Entity und selektivem EOR oft effizienter.",
    riskLow: "Empfohlen: Schnell starten und compliant bleiben",
    riskLowBody: "Eine gemanagte Struktur hilft beim schnellen Hiring ohne sofortige Entity-Gründung.",
    consultantBadge: "Berater vs. Arbeitnehmer",
    consultantTitle: "Warum Top-Berater in Europa in Beschäftigung wechseln",
    consultantSub: "Viele IT- und Independent-Berater glauben, Freelancing bringe maximale Freiheit. In Europa bedeutet es heute oft mehr Risiko und weniger Stabilität.",
    freelanceTitle: "Freelance-Realität",
    employeeTitle: "Vorteile der Beschäftigung über unsere Struktur",
    freelanceBullets: [
      "Höhere Prüfungs- und Auditgefahr",
      "Keine stärkere soziale Absicherung oder Arbeitgeberrente",
      "Kaum echte Arbeitslosenabsicherung",
      "Schwieriger bei Hypothek und Kredit",
      "Mehr rechtliche Unsicherheit bei einem Hauptkunden",
      "Mehr Admin-Aufwand und schwankende Zahlungseingänge"
    ],
    employeeBullets: [
      "Vollständig regelkonforme Beschäftigungsstruktur",
      "Sozialversicherung, Rente und Gesundheitsbeiträge",
      "Gleicher Kunde, gleiche Arbeit, sauberere Struktur",
      "Deutlich geringeres Fehlklassifizierungsrisiko",
      "Stärkerer rechtlicher Schutz",
      "Bankfähiges Einkommen für Kredite und Planung"
    ],
    consultantInsightTitle: "Der entscheidende Punkt",
    consultantInsightBody: "Sie ändern weder Ihren Kunden noch Ihre tägliche Arbeit. Sie verbessern nur die rechtliche und finanzielle Struktur dahinter.",
    consultantBenefitsTitle: "Warum selbstständige Berater davon profitieren, unser Arbeitnehmer zu werden",
    consultantBenefitsBody: "Dieses Modell verbindet kommerzielle Kontinuität mit Schutz, Sicherheit und finanzieller Glaubwürdigkeit.",
    consultantBenefitCards: [
      ["Kontinuität behalten", "Mit minimaler Störung beim gleichen Kunden weiterarbeiten."],
      ["Schutz gewinnen", "Wechsel in eine Struktur mit Payroll und Sozialversicherung."],
      ["Finanziell stärker auftreten", "Stabiles Einkommen für Wohnen, Kredite und Sicherheit."],
      ["Admin-Reibung senken", "Weniger Rechnungen, Inkasso und Compliance-Aufwand."]
    ],
    featureCards: [
      ["Risiko senken", "Fehlklassifizierung erkennen, bevor daraus Steuer- oder Arbeitsprobleme werden."],
      ["Kosten optimieren", "Payroll, Entity oder EOR nur dort einsetzen, wo es wirklich Sinn ergibt."],
      ["Schneller handeln", "Hiring in Tagen oder Wochen statt in Monaten."],
      ["Mehr Transparenz", "Eine Struktur, eine Rechnung, eine klare Logik."]
    ],
    comparisonTitle: "Warum nicht überall generisches EOR nutzen?",
    comparisonSub: "Weil das bequemste Modell nicht immer das klügste oder günstigste ist.",
    comparisonRows: [
      ["Startgeschwindigkeit", "Hoch", "Niedrig bis mittel", "Hoch"],
      ["Kostenoptimierung", "Niedrig", "Mittel", "Hoch"],
      ["Länderflexibilität", "Mittel", "Niedrig", "Hoch"],
      ["Strategische Beratung", "Niedrig", "Niedrig", "Hoch"],
      ["Am besten für Skalierung", "Mittel", "Niedrig", "Hoch"]
    ],
    proofTitle: "Wie daraus ein Vertriebssystem wird",
    proofSub: "Diese Seite ist ein Premium-Funnel, keine reine Broschüre.",
    proofSteps: [
      "Einstieg über klaren Pain Point",
      "Interaktiver Rechner schafft Relevanz",
      "Berater-Sektion erhöht emotionale und praktische Dringlichkeit",
      "Formular erfasst qualifizierte Leads",
      "E-Mail-Sequenz führt in den Strategie-Call"
    ],
    leadBadge: "Lead Magnet + Strategiesession",
    leadTitle: "Erhalten Sie das European Biotech Hiring & Payroll Playbook",
    leadSub: "Freischalten, Guide erhalten und individuelle Review anfordern.",
    leadBullets: [
      "Länderspezifische Kostenlogik",
      "EOR vs Payroll vs Entity Framework",
      "Freelance-Risikocheckliste",
      "Launch-Plan für regelkonformes Hiring"
    ],
    firstName: "Vorname",
    company: "Unternehmen",
    email: "Geschäftliche E-Mail",
    primaryCountry: "Primäres Land",
    submit: "Playbook + Session erhalten",
    integrationHint: "Empfohlene Integrationen: HubSpot, Mailchimp, Calendly, LinkedIn Insight Tag, Meta Pixel und Google Ads Conversion Tracking.",
    successTitle: "Erfasst.",
    successBody: "Ihre Anfrage wurde in dieser Demo erfasst. Verbinden Sie das Formular mit CRM oder Buchungssystem für Live-Leads.",
    seoTitle: "SEO- und Discovery-Layer",
    seoBody: "Optimiert für Google SEO, Google Ads, LinkedIn, Facebook und Instagram in Europa.",
    keywordsLabel: "Keywords mit hoher Kaufabsicht",
    faqTitle: "Häufige Fragen vor der Buchung",
    faqs: [
      ["Können Sie Deel oder Remote ersetzen?", "Am besten funktioniert dieses Modell als strategische Ebene über generischen Tools."],
      ["Für wen ist das ideal?", "Für Unternehmen mit Hiring in Europa, besonders biotech, tech und regulierte Teams."],
      ["Können Berater denselben Kunden behalten?", "Ja. Häufig geht es darum, die rechtliche Struktur zu verbessern, nicht die Arbeit zu ändern."],
      ["Kann diese Seite echte Leads erfassen?", "Ja. Sie ist bereit für CRM, E-Mail und Terminbuchung."]
    ],
    footer: "Regelkonformes Hiring, Payroll und Workforce-Strukturierung in Europa."
  },
  nl: {
    navComparison: "Vergelijking",
    navConsultants: "Consultants",
    navFaq: "FAQ",
    navBook: "Strategiegesprek boeken",
    badge: "Premium workforce-infrastructuur voor Europa",
    title: "Huur in Europa zonder entiteiten op te zetten",
    subtitle: "Zet contractors om naar compliant werknemers in 2 weken — met payroll, compliance en premium support.",
    ctaPrimary: "Strategie krijgen",
    ctaSecondary: "Kosten berekenen",
    stat1: "2 weken",
    stat1Sub: "Typische starttijd",
    stat2: "20–40%",
    stat2Sub: "Potentiële optimalisatie",
    stat3: "1 structuur",
    stat3Sub: "Eén controlepunt",
    calculatorTitle: "EU kosten- en risicocheck",
    calculatorSub: "Ontvang direct een schatting en aanbeveling.",
    country: "Land",
    salary: "Maandelijks bruto salaris (€)",
    role: "Roltype",
    model: "Huidig model",
    teamSize: "Teamgrootte",
    result1: "Geschatte werkgeverskost",
    result2: "Typische generieke EOR-kost",
    result3: "Potentiële maandelijkse besparing",
    assessment: "Huidige beoordeling",
    riskHigh: "Hoog risico: consultant-herkwalificatie",
    riskHighBody: "Onafhankelijke consultants die langdurig voor één klant werken lopen vaak meer risico op herkwalificatie.",
    riskMedium: "Aanbevolen: hybride structuur",
    riskMediumBody: "Op jouw schaal is een mix van payroll, entiteit en selectieve EOR vaak efficiënter.",
    riskLow: "Aanbevolen: snel starten en compliant blijven",
    riskLowBody: "Een beheerde structuur helpt snel te huren zonder direct een entiteit op te zetten.",
    consultantBadge: "Consultant vs werknemer",
    consultantTitle: "Waarom topconsultants in Europa overstappen naar employment",
    consultantSub: "Veel IT- en independent consultants denken dat freelancen maximale vrijheid geeft. In Europa betekent het vandaag vaak meer risico en minder stabiliteit.",
    freelanceTitle: "Freelance realiteit",
    employeeTitle: "Voordelen van employment via onze structuur",
    freelanceBullets: [
      "Meer blootstelling aan audits en controles",
      "Geen sterkere sociale bescherming of werkgeverspensioen",
      "Beperkt werkloosheidsvangnet",
      "Moeilijker voor hypotheek en krediet",
      "Meer juridische onzekerheid bij één hoofdklant",
      "Meer administratie en onzekere betaling"
    ],
    employeeBullets: [
      "Volledig compliant employment-structuur",
      "Sociale zekerheid, pensioen en gezondheidsbijdragen",
      "Dezelfde klant, hetzelfde werk, schonere structuur",
      "Veel lager misclassificatierisico",
      "Sterkere juridische bescherming",
      "Bankwaardig inkomen voor leningen en planning"
    ],
    consultantInsightTitle: "De kern",
    consultantInsightBody: "Je verandert je klant of je dagelijkse werk niet. Je verbetert alleen de juridische en financiële structuur erachter.",
    consultantBenefitsTitle: "Waarom zelfstandige consultants baat hebben bij employment via ons",
    consultantBenefitsBody: "Dit model combineert commerciële continuïteit met bescherming, zekerheid en financiële geloofwaardigheid.",
    consultantBenefitCards: [
      ["Behoud continuïteit", "Blijf bij dezelfde klant met minimale verstoring."],
      ["Krijg bescherming", "Ga naar een structuur met payroll en sociale bijdragen."],
      ["Sta financieel sterker", "Stabiel inkomen voor wonen, leningen en zekerheid."],
      ["Minder administratieve frictie", "Minder facturen, inning en compliance-werk."]
    ],
    featureCards: [
      ["Risico verlagen", "Zie mogelijke misclassificatie vóór het een fiscaal of arbeidsprobleem wordt."],
      ["Kosten optimaliseren", "Gebruik payroll, entiteit of EOR alleen waar het echt zin heeft."],
      ["Sneller bewegen", "Start hiring in dagen of weken in plaats van maanden."],
      ["Meer zichtbaarheid", "Eén structuur, één factuur en één beslislogica."]
    ],
    comparisonTitle: "Waarom niet overal generieke EOR gebruiken?",
    comparisonSub: "Omdat het makkelijkste model niet altijd het slimste of voordeligste is.",
    comparisonRows: [
      ["Snelheid van lancering", "Hoog", "Laag tot middel", "Hoog"],
      ["Kostenoptimalisatie", "Laag", "Middel", "Hoog"],
      ["Flexibiliteit per land", "Middel", "Laag", "Hoog"],
      ["Strategische begeleiding", "Laag", "Laag", "Hoog"],
      ["Beste voor schaal", "Middel", "Laag", "Hoog"]
    ],
    proofTitle: "Hoe dit omzet oplevert",
    proofSub: "Deze pagina werkt als premium funnel, niet als brochure.",
    proofSteps: [
      "Bezoeker landt op een scherpe pain-led hero",
      "Calculator creëert engagement",
      "Consultant-sectie verhoogt urgentie",
      "Leadformulier vangt gekwalificeerde prospects",
      "E-mailflow leidt naar strategiegesprek"
    ],
    leadBadge: "Lead magnet + strategiesessie",
    leadTitle: "Ontvang de European Biotech Hiring & Payroll Playbook",
    leadSub: "Ontgrendel je beoordeling, ontvang de gids en vraag een maatwerkreview aan.",
    leadBullets: [
      "Kostenlogica per land",
      "EOR vs payroll vs entiteit-framework",
      "Freelance-risicochecklist",
      "Launchplan voor compliant hiring"
    ],
    firstName: "Voornaam",
    company: "Bedrijf",
    email: "Zakelijk e-mailadres",
    primaryCountry: "Primair land",
    submit: "Gids + sessie ontvangen",
    integrationHint: "Aanbevolen integraties: HubSpot, Mailchimp, Calendly, LinkedIn Insight Tag, Meta Pixel en Google Ads conversietracking.",
    successTitle: "Gelukt.",
    successBody: "Je aanvraag is in deze demo vastgelegd. Koppel het formulier aan CRM of boekingstool voor live lead capture.",
    seoTitle: "SEO- en discovery-laag",
    seoBody: "Gebouwd voor Google SEO, Google Ads, LinkedIn, Facebook en Instagram in Europa.",
    keywordsLabel: "Zoekwoorden met hoge intentie",
    faqTitle: "Veelgestelde vragen vóór boeking",
    faqs: [
      ["Kunnen jullie Deel of Remote vervangen?", "Deze positionering werkt het best als strategische laag boven generieke tools."],
      ["Voor wie is dit ideaal?", "Voor bedrijven die in Europa inhuren, vooral biotech, tech en gereguleerde teams."],
      ["Kunnen consultants dezelfde klant houden?", "Ja. Vaak gaat het erom de juridische structuur te verbeteren zonder het werk te veranderen."],
      ["Kan deze pagina echte leads vastleggen?", "Ja. Ze is klaar voor CRM, e-mail en boeking."]
    ],
    footer: "Compliant hiring, payroll en workforce-structurering in Europa."
  }
};

const COUNTRIES = {
  spain: {
    name: { en: "Spain", es: "España", fr: "Espagne", de: "Spanien", nl: "Spanje" },
    multiplier: 1.3,
    note: {
      en: "Strong employment protections and social security overhead.",
      es: "Fuertes protecciones laborales y carga de seguridad social.",
      fr: "Forte protection sociale et charges employeur.",
      de: "Starker Arbeitnehmerschutz und Sozialabgaben.",
      nl: "Sterke werknemersbescherming en sociale lasten."
    }
  },
  germany: {
    name: { en: "Germany", es: "Alemania", fr: "Allemagne", de: "Deutschland", nl: "Duitsland" },
    multiplier: 1.2,
    note: {
      en: "Strict labor compliance with good scale potential.",
      es: "Cumplimiento laboral estricto con buen potencial de escala.",
      fr: "Conformité stricte avec bon potentiel de croissance.",
      de: "Strenge Compliance mit gutem Skalierungspotenzial.",
      nl: "Strikte compliance met goed schaalpotentieel."
    }
  },
  belgium: {
    name: { en: "Belgium", es: "Bélgica", fr: "Belgique", de: "Belgien", nl: "België" },
    multiplier: 1.35,
    note: {
      en: "Higher burden but strong fit for R&D teams.",
      es: "Mayor carga pero fuerte encaje para equipos I+D.",
      fr: "Charges plus élevées mais bon choix pour les équipes R&D.",
      de: "Höhere Last, aber stark für F&E-Teams.",
      nl: "Hogere lasten maar sterke fit voor R&D-teams."
    }
  },
  netherlands: {
    name: { en: "Netherlands", es: "Países Bajos", fr: "Pays-Bas", de: "Niederlande", nl: "Nederland" },
    multiplier: 1.22,
    note: {
      en: "Business-friendly and good for international structures.",
      es: "Entorno favorable para negocios y estructuras internacionales.",
      fr: "Très adapté aux structures internationales.",
      de: "Unternehmensfreundlich und gut für internationale Strukturen.",
      nl: "Zakelijk vriendelijk en goed voor internationale structuren."
    }
  },
  ireland: {
    name: { en: "Ireland", es: "Irlanda", fr: "Irlande", de: "Irland", nl: "Ierland" },
    multiplier: 1.15,
    note: {
      en: "Strong HQ location and English-speaking ecosystem.",
      es: "Buena sede y ecosistema angloparlante.",
      fr: "Excellent hub anglophone.",
      de: "Starker HQ-Standort mit englischsprachigem Umfeld.",
      nl: "Sterke HQ-locatie en Engelstalig ecosysteem."
    }
  }
};

const KEYWORDS = [
  "hire employees in Europe",
  "EOR Europe",
  "payroll services EU",
  "contractor vs employee Europe",
  "freelance compliance EU",
  "convert contractor to employee",
  "hire in Spain Germany Netherlands Belgium",
  "IT consultant employment Europe",
  "independent consultant employment contract Europe",
  "Google Ads workforce compliance Europe",
  "LinkedIn payroll hiring Europe",
  "Facebook consultant employment Europe",
  "Instagram freelance to employee Europe"
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
    salary: "4000",
    role: "it_consultant",
    model: "contractor",
    teamSize: "1-5"
  });

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

  const copy = COPY[lang];
  const selectedCountry = COUNTRIES[form.country];
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
      (form.model === "contractor" &&
        ["operations", "scientist"].includes(form.role))
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

  const setField = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  const data = {
    firstName,
    company,
    email,
    primaryCountry,
  };

  await fetch("https://formspree.io/f/xkokebwk", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  alert("Submitted successfully!");
};

  return (
    <main className="pageShell">
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
            <div className="brandMark">◌</div>
            <div>
              <div className="brandTop">EuroWorkforce</div>
              <div className="brandBottom">Premium EU hiring funnel</div>
            </div>
          </div>

          <div className="navDesktop">
            <a href="#comparison">{copy.navComparison}</a>
            <a href="#consultants">{copy.navConsultants}</a>
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
            <a href="#faq">{copy.navFaq}</a>
            <a href="#lead-capture" className="mobileBook">{copy.navBook}</a>
            <div className="langMobile">
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
                    <option key={key} value={key}>{value.name[lang]}</option>
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
                <p className="countryNote">{selectedCountry.note[lang]}</p>
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
              <p><strong>Emotionally:</strong> consultants want freedom, but they also want security, status, and long-term stability.</p>
              <p><strong>Practically:</strong> many work like employees already, but without the legal or financial advantages of employment.</p>
              <p><strong>Commercially:</strong> your offer lets them keep momentum while removing pain — that is a powerful conversion combination.</p>
            </div>
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
              <div>EuroWorkforce hybrid</div>
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
            ["Biotech hiring across 4 countries", "Used mixed payroll + EOR structure to reduce over-reliance on high-cost EOR usage.", "Potential structure savings: €5K+/month"],
            ["Startup launch without entity setup", "Enabled first hires fast while keeping a path toward later entity formation.", "Launch speed: ~2 weeks"],
            ["Contractor conversion program", "Helped embedded roles move into safer employment structures with better visibility.", "Risk reduction: materially improved"]
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

<section className="darkSection">
  <div className="container sectionPad twoColWide darkGrid">
    <div>
      <Pill>{copy.proofTitle}</Pill>
      <h2 className="sectionTitle light">{copy.proofSub}</h2>
      <p className="sectionSub lightSub">
        This page is designed to convert across Google, LinkedIn, Facebook, Instagram, and direct outbound by combining authority, urgency, role-based relevance, and lead capture.
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
        <form
          action="https://formspree.io/f/xkokebwk"
          method="POST"
          className="leadForm"
        >

          {/* Header */}
          <div>
            <div className="microLabel">Get instant access</div>
            <h3 className="formTitle">{copy.ctaPrimary}</h3>
          </div>

          {/* Fields */}
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
                <option value="">Select...</option>
                <option>Hiring first employee in Europe</option>
                <option>Expanding team in Europe</option>
                <option>Hiring contractors</option>
                <option>Fixing compliance / structure</option>
                <option>Not sure yet</option>
              </select>
            </div>

            <div className="field">
              <label>{copy.primaryCountry}</label>
              <input
                name="country"
                type="text"
                value={form.country}
                onChange={(e) => setField("country", e.target.value)}
                placeholder="e.g. Spain, Germany, France"
                required
              />
            </div>

          </div>

          {/* Submit */}
          <button className="primaryBtn fullWidth" type="submit">
            {copy.submit}
          </button>

          <div className="integrationHint">
            {copy.integrationHint}
          </div>

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

                <div className="formGrid">
                  <div className="field">
                    <label>Hiring goal</label>
<select
  name="hiringGoal"
  value={form.hiringGoal}
  onChange={(e) => setField("hiringGoal", e.target.value)}
  required
>
  <option value="" disabled>Select hiring goal</option>
  <option value="first-hire">Hiring first employee in Europe</option>
  <option value="expanding">Expanding team in Europe</option>
  <option value="contractors">Hiring contractors</option>
  <option value="compliance">Fixing compliance / structure</option>
  <option value="unsure">Not sure yet</option>
</select>
                  </div>
                 <div className="field">
  <label>{copy.primaryCountry}</label>
  <input
    name="country"
    value={form.country}
    onChange={(e) => setField("country", e.target.value)}
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

                <button className="primaryBtn fullWidth" type="submit">{copy.submit}</button>
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
        <div className="seoCard">
          <Pill>{copy.seoTitle}</Pill>
          <h2 className="sectionTitle smallTop">{copy.seoBody}</h2>
          <p className="sectionSub">{copy.keywordsLabel}</p>
          <div className="keywordWrap">
            {KEYWORDS.map((item) => (
              <span className="keywordTag" key={item}>{item}</span>
            ))}
          </div>
          <div className="channelGrid">
            {[
              ["Google", "SEO pages, ads, high-intent keyword matching"],
              ["LinkedIn", "Founder, CFO, HR and consultant targeting"],
              ["Facebook", "Retargeting and consultant awareness ads"],
              ["Instagram", "Short-form consultant pain-to-solution hooks"]
            ].map(([title, body]) => (
              <div className="channelCard" key={title}>
                <h4>{title}</h4>
                <p>{body}</p>
              </div>
            ))}
          </div>
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
            <div className="footerBrand">EuroWorkforce</div>
            <div className="footerText">{copy.footer}</div>
          </div>
          <div className="footerRight">Enterprise-ready premium funnel</div>
        </div>
      </footer>
    </main>
  );
}
