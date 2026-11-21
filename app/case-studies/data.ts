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
  deliverables: string[];
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
    resultStat: '+₹75,000/mo Net Profit',
    resultStatShort: '+₹75K/mo Profit',
    title: 'Securing High-Ticket Client Retainers with Dedicated Engineering Delivery',
    challenge:
      'Sarthak runs two agency brands — TechTasteFood (food-tech marketing) and FranFirst (franchise consulting). Both required scalable web platforms to command and retain monthly development retainers from restaurant and franchise clients. Building an in-house development team in Delhi was cost-prohibitive and risked inconsistent delivery quality.',
    solution:
      'BBS stepped in as the invisible technical delivery partner for both brands. We built responsive web assets, custom client dashboards, and integrated CRM portals under strict NDA. Our sprint-based delivery allowed Sarthak to pitch development with certainty, knowing the technical execution was handled by an experienced team.',
    deliverables: ['Responsive web assets', 'Custom client dashboards', 'Integrated CRM portals'],
    outcome:
      'Within 3 months of partnering with BBS, Sarthak\'s combined operations added ₹75,000/mo in net profit from web development retainers alone, as reported by the founder. The consistent delivery and on-time milestones helped him retain clients who previously experienced delays with unmanaged freelance developers.',
    quote:
      'BBS became our reliable technical partner from day one. Their team consistently delivers high-quality work on time, allowing us to focus on client acquisition and scaling our business with confidence.',
    photoPath:
      'https://res.cloudinary.com/ds6jbzjy0/image/upload/f_auto,q_auto/v1784111689/WhatsApp_Image_2026-07-15_at_3.52.04_PM_z1hve2.jpg',
    relatedServiceSlug: 'website-development',
    relatedServiceName: 'Website Development',
  },
  {
    slug: 'bvfx-digify',
    client: 'BVFX Digify',
    founder: 'Aayushman',
    founderRole: 'Founder',
    city: 'Bhilai, Durg',
    industry: 'Digital Marketing Agency',
    resultStat: '3× Faster Project Delivery',
    resultStatShort: '3× Faster Delivery',
    title: 'Meeting Client Deadlines with Coordinated White-Label Sprint Teams',
    challenge:
      'BVFX Digify, a growing digital agency in Bhilai, was winning more client projects than their internal team could comfortably build. Development bottlenecks caused launch delays, risked client satisfaction, and forced the agency to turn away new web briefs during peak campaign seasons.',
    solution:
      'BBS provided dedicated developers who coordinated directly with BVFX\'s team, functioning as an invisible technical extension behind their brand. We ran two-week sprint cycles aligned to BVFX\'s client commitments, with direct communication in Slack and milestone progress tracking.',
    deliverables: ['Dedicated development support', 'Two-week sprint cycles', 'Slack coordination and milestone progress tracking'],
    outcome:
      'Project turnaround time improved by 3× across client builds, as reported by the agency leadership. BVFX was able to accept concurrent client engagements, maintain steady delivery timelines, and expand its active web portfolio without adding in-house payroll.',
    quote:
      'Working with BBS has significantly improved our project delivery speed. Their development team feels like an extension of our own, helping us deliver quality work faster while maintaining excellent client satisfaction.',
    photoPath:
      'https://res.cloudinary.com/ds6jbzjy0/image/upload/f_auto,q_auto/v1784111690/WhatsApp_Image_2026-07-15_at_3.52.05_PM_mpolbe.jpg',
    relatedServiceSlug: 'website-development',
    relatedServiceName: 'Website Development',
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
    title: 'Offloading Technical Overhead to Focus on Agency Business Development',
    challenge:
      'Shivora Media\'s leadership was spending substantial time managing technical bugs, server configurations, and deployment issues—work that took time away from closing new creative retainers and managing agency client relationships in Bhopal.',
    solution:
      'BBS took ownership of web project execution, hosting configurations, and post-launch maintenance under strict NDA. We handled frontend builds, responsive testing, and staging reviews, freeing Mahi\'s team to focus on client strategy and creative marketing campaigns.',
    deliverables: ['Web project execution', 'Hosting configurations', 'Post-launch maintenance', 'Frontend builds, responsive testing, and staging reviews'],
    outcome:
      'With technical development offloaded to BBS, Shivora Media increased active client capacity by 40% without hiring local in-house developers, as reported by the founder. Leadership redirected their hours toward business development and client retention.',
    quote:
      'BBS has helped us scale without the hassle of building an in-house development team. Their consistency, communication, and technical expertise have made them a trusted long-term partner for our agency.',
    photoPath:
      'https://res.cloudinary.com/ds6jbzjy0/image/upload/f_auto,q_auto/v1784111688/WhatsApp_Image_2026-07-15_at_3.52.05_PM_2_dakvlf.jpg',
    relatedServiceSlug: 'website-app-maintenance',
    relatedServiceName: 'Website & App Maintenance',
  },
  {
    slug: 'clocked-agency',
    client: 'Clocked Agency',
    founder: 'Aastha',
    founderRole: 'Founder',
    city: 'Delhi',
    industry: 'Branding & Web Design Agency',
    resultStat: '+₹90,000/mo Revenue',
    resultStatShort: '+₹90K/mo Revenue',
    title: 'Offering Web Development Services Without Expanding Internal Headcount',
    challenge:
      'Clocked Agency frequently received web development briefs from branding clients but lacked in-house developers in Delhi. Sourcing and managing unpredictable freelance developers carried quality risks, leading them to turn down profitable web requests.',
    solution:
      'BBS stepped in as the white-label engineering delivery team. We built custom, responsive websites with structured QA—all delivered under Clocked Agency\'s brand. Aastha\'s team focused on branding and client communications while BBS executed the technical build.',
    deliverables: ['Custom responsive websites', 'Structured quality assurance'],
    outcome:
      'Clocked Agency added ₹90,000/mo in recurring development revenue, as reported by the founder. The white-label partnership enabled them to capture web projects that were previously turned away, delivering reliable builds under their own brand.',
    quote:
      'BBS has been instrumental in helping us deliver premium websites without expanding our internal team. Their professionalism, timely communication, and consistent quality have strengthened both our operations and client trust.',
    photoPath:
      'https://res.cloudinary.com/ds6jbzjy0/image/upload/f_auto,q_auto/v1784111689/WhatsApp_Image_2026-07-15_at_3.52.05_PM_1_p0hpg2.jpg',
    relatedServiceSlug: 'website-development',
    relatedServiceName: 'Website Development',
  },
];
