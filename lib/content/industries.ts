export type Industry = {
  slug: string;
  title: string;
  image: string;
  imageAlt: string;
  introduction: string;
  challenges: string[];
  services: string[];
  support: string;
};

export const industries: Industry[] = [
  {
    slug: "government-public-sector",
    title: "Government & Public Sector",
    image: "/images/civic.jpg",
    imageAlt: "A modern civic building with a glass facade",
    introduction:
      "Public institutions need workforce processes that are orderly, documented and fair to applicants and employees.",
    challenges: [
      "Recruitment exercises with a clear audit trail",
      "Contract and project staff working beside established posts",
      "Consistent application of approved procedures",
      "Reporting that a responsible officer can review",
    ],
    services: [
      "Recruitment & Talent Acquisition",
      "Contract & Workforce Management",
      "HR Advisory & Compliance",
      "Payroll Management",
    ],
    support:
      "Where Avenyra Global is commissioned, the scope, the approving officer and the reporting rhythm are agreed before work starts. We do not claim a panel appointment or a public-sector contract unless the organisation has confirmed it.",
  },
  {
    slug: "ngos-development",
    title: "NGOs & Development Organisations",
    image: "/images/workshop.jpg",
    imageAlt: "Professionals collaborating during a workshop",
    introduction:
      "Development organisations often employ a mix of continuing staff, project staff and short assignments tied to funding cycles.",
    challenges: [
      "Recruiting to project timelines",
      "Keeping assignment end dates visible",
      "Inducting people who join mid-project",
      "Maintaining records that donors or boards may ask to see",
    ],
    services: [
      "Recruitment & Talent Acquisition",
      "Contract & Workforce Management",
      "Temporary Staffing",
      "Training & Development",
    ],
    support:
      "Support is scoped to the roles and locations the organisation names. Workforce activity is reported to the named contact. Past client relationships are not implied.",
  },
  {
    slug: "financial-services",
    title: "Banking & Financial Services",
    image: "/images/finance.jpg",
    imageAlt: "A professional reviewing financial documents at a desk",
    introduction:
      "Banks and other financial organisations depend on accurate administration and careful handling of employee information.",
    challenges: [
      "Confidential handling of employee and candidate data",
      "Roles that require a documented selection process",
      "Payroll accuracy for varied allowances",
      "Cover for specialist teams during peaks or absence",
    ],
    services: [
      "Recruitment & Talent Acquisition",
      "HR Outsourcing",
      "Payroll Management",
      "Temporary Staffing",
    ],
    support:
      "We agree confidentiality expectations, the systems we may use, and which checks the organisation itself will carry out before a person starts.",
  },
  {
    slug: "healthcare",
    title: "Healthcare & Medical Services",
    image: "/images/healthcare.jpg",
    imageAlt: "Healthcare professionals in a bright clinical environment",
    introduction:
      "Healthcare employers need workforce support that respects professional duties, shift patterns and the sensitivity of the workplace.",
    challenges: [
      "Filling shifts and time-limited cover without confusing the terms",
      "Keeping credentials and start requirements with the employing organisation",
      "Supervisors who have little time for administration",
      "Consistent handling of joiners and leavers",
    ],
    services: [
      "Temporary Staffing",
      "Recruitment & Talent Acquisition",
      "HR Outsourcing",
      "Contract & Workforce Management",
    ],
    support:
      "Clinical privileging, licensing and fitness-to-practise decisions stay with the healthcare organisation and the relevant regulator. Avenyra Global handles the agreed recruitment or administration steps around those decisions.",
  },
  {
    slug: "construction-engineering",
    title: "Construction & Engineering",
    image: "/images/construction.jpg",
    imageAlt: "An architectural structure on a construction project",
    introduction:
      "Construction and engineering work moves with projects, sites and contracts. The workforce often does too.",
    challenges: [
      "Project staff whose dates follow the programme",
      "Site-based onboarding and role clarity",
      "Payroll inputs from different sites",
      "Demobilisation when a package of work ends",
    ],
    services: [
      "Contract & Workforce Management",
      "Recruitment & Talent Acquisition",
      "Payroll Management",
      "Temporary Staffing",
    ],
    support:
      "Assignments are recorded against the project, site and manager the organisation names. End dates are tracked so demobilisation is planned rather than discovered.",
  },
  {
    slug: "manufacturing-logistics",
    title: "Manufacturing & Logistics",
    image: "/images/manufacturing.jpg",
    imageAlt: "An engineer working with equipment in a modern industrial setting",
    introduction:
      "Manufacturing and logistics employers often need both a stable core team and extra hands when volume changes.",
    challenges: [
      "Shift cover and seasonal volume",
      "Clear duties for temporary workers",
      "Attendance information that payroll can trust",
      "Supervisors balancing production with people administration",
    ],
    services: [
      "Temporary Staffing",
      "Payroll Management",
      "HR Outsourcing",
      "Training & Development",
    ],
    support:
      "Cover is briefed around the shift, the site and the duties. Attendance and pay inputs follow the cut-off the organisation sets.",
  },
  {
    slug: "hospitality-retail",
    title: "Hospitality & Retail",
    image: "/images/hospitality.jpg",
    imageAlt: "A restaurant dining room prepared for service",
    introduction:
      "Hospitality and retail teams change with trading hours, seasons and outlets. People processes need to keep up without becoming heavy.",
    challenges: [
      "Hiring for customer-facing roles at pace",
      "Several outlets with different managers",
      "Temporary cover for peak periods",
      "Consistent induction across sites",
    ],
    services: [
      "Recruitment & Talent Acquisition",
      "Temporary Staffing",
      "Training & Development",
      "Payroll Management",
    ],
    support:
      "We work to the outlets and roles in scope, and we keep hiring managers informed of who has been shortlisted or proposed for cover.",
  },
  {
    slug: "smes-corporates",
    title: "SMEs & Corporate Organisations",
    image: "/images/office.jpg",
    imageAlt: "A bright modern office interior with shared worktables",
    introduction:
      "Growing companies and established corporates both need a people function that matches their stage, not a template copied from somewhere else.",
    challenges: [
      "A founder or finance lead carrying HR alongside another job",
      "A first layer of proper employee records",
      "Hiring for roles the organisation has not recruited before",
      "Several departments that need one coherent approach",
    ],
    services: [
      "HR Outsourcing",
      "Recruitment & Talent Acquisition",
      "HR Advisory & Compliance",
      "Employee Benefits Administration",
    ],
    support:
      "The service can start with a narrow scope and widen when the organisation is ready. What is in scope is written down either way.",
  },
];
