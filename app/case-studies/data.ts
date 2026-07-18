export interface CaseStudy {
  slug: string;
  client: string;
  founder: string;
  founderRole: string;
  city: string;
  industry: string;
  resultStat: string;
  resultStatShort: string;
  title: string;
  challenge: string;
  solution: string;
  outcome: string;
  quote: string;
  photoPath: string;
  relatedServiceSlug: string;
  relatedServiceName: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'techtastefood',
    client: 'TechTasteFood & FranFirst',
    founder: 'Sarthak',
    founderRole: 'Founder',
    city: 'New Delhi',
    industry: 'Food-Tech & Franchise Consulting',
    resultStat: '+\u20b975,000/mo Net Profit',
    resultStatShort: '+\u20b975K/mo Profit',
    title: 'Securing High-Ticket Client Retainers with Premium Engineering Quality',
    challenge:
      'Sarthak runs two agency brands \u2014 TechTasteFood (food-tech marketing) and FranFirst (franchise consulting). Both needed enterprise-grade web platforms to command and retain high-ticket monthly retainers from demanding restaurant and franchise clients. Building an in-house dev team in Delhi was cost-prohibitive and risked inconsistent output quality.',
    solution:
      'BBS stepped in as the invisible technical arm for both brands. We built scalable web assets, custom client dashboards, and integrated CRM portals \u2014 all under strict NDA. Our sprint-based delivery allowed Sarthak to pitch confidently, knowing the engineering quality would match the premium positioning his agencies commanded.',
    outcome:
      'Within 3 months of partnering with BBS, Sarthak\'s combined operations added \u20b975,000/mo in net profit from web development retainers alone. The consistent quality and on-time delivery helped him retain high-ticket clients who previously churned due to subpar outsourced work.',
    quote:
      'BBS became our reliable technical partner from day one. Their team consistently delivers high-quality work on time, allowing us to focus on client acquisition and scaling our business with confidence.',
    photoPath:
      'https://res.cloudinary.com/ds6jbzjy0/image/upload/f_auto,q_auto/v1784111689/WhatsApp_Image_2026-07-15_at_3.52.04_PM_z1hve2.jpg',
    relatedServiceSlug: 'custom-web-applications',
    relatedServiceName: 'Custom Web & Portal Development',
  },
  {
    slug: 'bvfx-digify',
    client: 'BVFX Digify',
    founder: 'Aayushman',
    founderRole: 'Founder',
    city: 'Bhilai, Durg',
    industry: 'Digital Marketing Agency',
    resultStat: '3\u00d7 Faster Project Delivery',
    resultStatShort: '3\u00d7 Faster Delivery',
    title: 'Crushing Launch Deadlines with Coordinated White-Label Sprint Teams',
    challenge:
      'BVFX Digify, a fast-growing digital agency in Bhilai, was winning more client projects than their small internal team could handle. Development bottlenecks caused launch delays, risked client satisfaction, and forced Aayushman to turn away new business during peak seasons.',
    solution:
      'BBS provided dedicated, agile developers who integrated directly into BVFX\'s Slack workspace, functioning as an invisible extension of their internal team. We ran two-week sprint cycles aligned to BVFX\'s client commitments, with daily standups and transparent progress tracking.',
    outcome:
      'Project delivery speed improved by 3\u00d7 within the first quarter. BVFX stopped turning away projects and started confidently accepting concurrent client engagements. Client satisfaction scores improved, and the agency expanded its active portfolio without adding a single in-house developer.',
    quote:
      'Working with BBS has significantly improved our project delivery speed. Their development team feels like an extension of our own, helping us deliver quality work faster while maintaining excellent client satisfaction.',
    photoPath:
      'https://res.cloudinary.com/ds6jbzjy0/image/upload/f_auto,q_auto/v1784111690/WhatsApp_Image_2026-07-15_at_3.52.05_PM_mpolbe.jpg',
    relatedServiceSlug: 'custom-web-applications',
    relatedServiceName: 'Custom Web & Portal Development',
  },
  {
    slug: 'shivora-media',
    client: 'Shivora Media',
    founder: 'Mahi',
    founderRole: 'Founder',
    city: 'Bhopal',
    industry: 'Media & Creative Agency',
    resultStat: '+40% Client Capacity',
    resultStatShort: '+40% Capacity',
    title: 'Eliminating the Tech Overhead to Focus Entirely on Acquisition',
    challenge:
      'Shivora Media\'s leadership was spending over half their time managing technical debugging, server deployments, and post-launch maintenance \u2014 work that directly competed with their ability to close new deals and service existing creative clients in Bhopal.',
    solution:
      'BBS took 100% ownership of project execution, DevOps, and post-launch maintenance under a strict NDA. We handled everything from initial architecture to production deployment, staging environments, and ongoing bug fixes \u2014 freeing Mahi and team to focus exclusively on client relationships and creative strategy.',
    outcome:
      'With technical operations fully offloaded, Shivora Media increased their client capacity by 40%. The agency onboarded new retainer clients without any additional hiring, and Mahi was able to dedicate time to business development rather than debugging code.',
    quote:
      'BBS has helped us scale without the hassle of building an in-house development team. Their consistency, communication, and technical expertise have made them a trusted long-term partner for our agency.',
    photoPath:
      'https://res.cloudinary.com/ds6jbzjy0/image/upload/f_auto,q_auto/v1784111688/WhatsApp_Image_2026-07-15_at_3.52.05_PM_2_dakvlf.jpg',
    relatedServiceSlug: 'devops-infrastructure',
    relatedServiceName: 'Auto-Scaling Cloud & DevOps',
  },
  {
    slug: 'clocked-agency',
    client: 'Clocked Agency',
    founder: 'Aastha',
    founderRole: 'Founder',
    city: 'Delhi',
    industry: 'Branding & Web Design Agency',
    resultStat: '+\u20b990,000/mo Revenue',
    resultStatShort: '+\u20b990K/mo Revenue',
    title: 'Scaling Premium Web Development Without Expanding Internal Headcount',
    challenge:
      'Clocked Agency was consistently turning away high-paying web development requests because the risk, time, and overhead of recruiting in-house engineers in Delhi was too high. Each rejected project represented lost recurring revenue and weakened client relationships.',
    solution:
      'BBS stepped in as an invisible white-label engineering extension. We built custom, responsive websites with rigorous QA processes \u2014 all delivered under Clocked Agency\'s brand. Aastha\'s team focused on design and client management while we handled the entire development lifecycle.',
    outcome:
      'Clocked Agency added \u20b990,000/mo in recurring development revenue without hiring a single developer. The partnership allowed them to accept every web development brief that came in, transforming previously rejected leads into profitable retainers.',
    quote:
      'BBS has been instrumental in helping us deliver premium websites without expanding our internal team. Their professionalism, timely communication, and consistent quality have strengthened both our operations and client trust.',
    photoPath:
      'https://res.cloudinary.com/ds6jbzjy0/image/upload/f_auto,q_auto/v1784111689/WhatsApp_Image_2026-07-15_at_3.52.05_PM_1_p0hpg2.jpg',
    relatedServiceSlug: 'custom-web-applications',
    relatedServiceName: 'Custom Web & Portal Development',
  },
];
