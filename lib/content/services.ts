export type ServiceIcon =
  | "briefcase"
  | "search"
  | "wallet"
  | "files"
  | "graduation"
  | "scale"
  | "clock"
  | "heart";

export type Service = {
  slug: string;
  title: string;
  summary: string;
  introduction: string;
  description: string;
  activities: string[];
  benefits: string[];
  delivery: string;
  image: string;
  imageAlt: string;
  icon: ServiceIcon;
};

export const services: Service[] = [
  {
    slug: "hr-outsourcing",
    title: "HR Outsourcing",
    summary:
      "A defined human resource function for organisations that need dependable people administration without building every process in-house.",
    introduction:
      "HR outsourcing gives an organisation a practical way to handle day-to-day people administration while managers remain responsible for their teams.",
    description:
      "Avenyra Global agrees the activities in scope, the records to be kept and the rhythm of reporting. The work can cover a full people-administration function or a selected set of tasks. Line managers keep decisions that belong to them. We carry the agreed administration and raise anything that sits outside the scope before it is taken on.",
    activities: [
      "Employee records and routine HR administration",
      "Onboarding coordination and leaver checklists",
      "Leave, attendance and employee query handling",
      "Support with implementing approved people policies",
      "Workforce reporting for the agreed management audience",
    ],
    benefits: [
      "Less routine administration on line managers",
      "A consistent way of handling repeat people processes",
      "A named scope, so expectations stay clear",
      "Room to extend support as the organisation grows",
    ],
    delivery:
      "We begin with a scoping conversation, confirm the activities and systems involved, and agree how queries and reports will move. The service is then reviewed against that agreement.",
    image: "/images/consult.jpg",
    imageAlt: "Two professionals greeting each other in a bright office",
    icon: "briefcase",
  },
  {
    slug: "recruitment-talent-acquisition",
    title: "Recruitment & Talent Acquisition",
    summary:
      "Structured search and selection support for permanent and fixed-term roles, from the brief through to a shortlist.",
    introduction:
      "Recruitment support helps organisations attract and assess candidates against a clear role brief.",
    description:
      "Avenyra Global works from the role, the workplace and the requirements the hiring manager can defend. We prepare the brief, invite applications, screen against the agreed criteria and present a shortlist with the relevant information. The hiring decision remains with the organisation. We do not describe a search as exclusive, urgent or guaranteed.",
    activities: [
      "Role briefing with the hiring manager",
      "Advertisement wording and application handling",
      "Screening against agreed criteria",
      "Interview coordination and shortlist presentation",
      "Feedback to candidates who were formally assessed",
    ],
    benefits: [
      "A brief that hiring managers and candidates can understand",
      "A documented selection trail",
      "Time returned to managers during the early screening",
      "A respectful process for people who apply",
    ],
    delivery:
      "Each search starts with the role requirements, the location, the employment type and the decision timeline. We agree the channels and the shortlist format before applications are invited.",
    image: "/images/interview.jpg",
    imageAlt: "A professional portrait in a contemporary workplace",
    icon: "search",
  },
  {
    slug: "payroll-management",
    title: "Payroll Management",
    summary:
      "Payroll processing support based on the organisation’s approved inputs, calendar and statutory obligations.",
    introduction:
      "Payroll management is the disciplined processing of pay from approved inputs to a completed pay run.",
    description:
      "Avenyra Global processes payroll from the information the organisation approves: joiners, leavers, changes, overtime, unpaid leave and other adjustments. We work to a calendar, keep a record of the run, and flag items that need a decision before payment. Statutory treatment follows the rules that apply to the engagement and the guidance the organisation’s advisers have confirmed. We do not invent tax positions.",
    activities: [
      "Pay runs from approved inputs",
      "Joiner, leaver and variation processing",
      "Payslip preparation for the agreed population",
      "Payroll queries and a record of adjustments",
      "Handover of payroll reports to the named client contact",
    ],
    benefits: [
      "A predictable pay calendar",
      "Fewer informal adjustments outside the process",
      "A record of what was paid and why",
      "A clear route for payroll queries",
    ],
    delivery:
      "We confirm the pay population, the cut-off, the approval step and the reports required. The organisation approves inputs before the run is closed.",
    image: "/images/desk.jpg",
    imageAlt: "Hands reviewing documents and a laptop during payroll preparation",
    icon: "wallet",
  },
  {
    slug: "contract-workforce-management",
    title: "Contract & Workforce Management",
    summary:
      "Administration of contract and project-based workers, including start dates, extensions and assignment records.",
    introduction:
      "Contract and workforce management keeps assignment details orderly when people are engaged for a defined period or project.",
    description:
      "Organisations often run permanent teams alongside contract, project and temporary workers. Avenyra Global maintains the assignment record: role, location, dates, extensions and the manager responsible. We coordinate the agreed onboarding steps and remind the named contact before an assignment end date. Engagement terms are those the organisation and its advisers approve.",
    activities: [
      "Assignment records for contract and project workers",
      "Start, extension and end-date administration",
      "Coordination of agreed onboarding steps",
      "Status reporting to the named manager",
      "Handover notes when an assignment closes",
    ],
    benefits: [
      "One view of who is engaged, where and until when",
      "Fewer missed extension or end dates",
      "Cleaner handover between managers",
      "A record that can be reviewed with the organisation",
    ],
    delivery:
      "We agree which worker groups are in scope, which system holds the record, and who may approve an extension. Changes are confirmed in writing.",
    image: "/images/meeting.jpg",
    imageAlt: "Professionals in a business meeting reviewing work together",
    icon: "files",
  },
  {
    slug: "training-development",
    title: "Training & Development",
    summary:
      "Practical learning support for teams, from induction topics to skills sessions agreed with management.",
    introduction:
      "Training and development helps employees build the skills an organisation has identified as necessary for the work.",
    description:
      "Avenyra Global designs and coordinates learning around a brief from management: who the session is for, what they should be able to do afterwards, and how long the organisation can release people from their duties. Sessions may cover induction, supervisory practice, workplace conduct or role-specific skills. We do not present attendance as a qualification unless a recognised provider has awarded one.",
    activities: [
      "Learning needs discussion with the sponsoring manager",
      "Session design and materials for the agreed topic",
      "Delivery or coordination of the session",
      "Attendance records",
      "A short note on what was covered and any follow-up",
    ],
    benefits: [
      "Learning time used against a stated purpose",
      "Managers can see who attended",
      "Materials that match the workplace rather than a generic catalogue",
      "A follow-up note the organisation can keep",
    ],
    delivery:
      "We confirm the audience, the objective, the format and the date. After the session we share attendance and the agreed follow-up points.",
    image: "/images/training.jpg",
    imageAlt: "Colleagues in a training discussion around a meeting table",
    icon: "graduation",
  },
  {
    slug: "hr-advisory-compliance",
    title: "HR Advisory & Compliance",
    summary:
      "Practical human resource advice and support with employment procedures, documentation and consistent practice.",
    introduction:
      "HR advisory and compliance support helps managers apply employment procedures with care and a proper record.",
    description:
      "Managers often need a second view on a procedure: a contract query, a disciplinary step, a leave question or a document that should be on file. Avenyra Global advises within the facts provided and the procedure the organisation has adopted. Where a matter needs legal advice, we say so and pause. We support consistent documentation. We do not certify that an organisation is compliant, and we do not claim licences that have not been confirmed.",
    activities: [
      "Advice on applying the organisation’s people procedures",
      "Support with employment documentation in scope",
      "Guidance on preparing for formal meetings",
      "Review of routine HR letters before issue",
      "A note of the advice given and the facts it relied on",
    ],
    benefits: [
      "Managers are not left to interpret a procedure alone",
      "A written trail of what was advised",
      "Earlier identification of matters that need legal counsel",
      "More consistent handling of similar cases",
    ],
    delivery:
      "Advice is given against the documents and facts supplied. We agree response times for routine queries and a separate path for urgent employee-relations matters.",
    image: "/images/advisory.jpg",
    imageAlt: "A professional team in discussion in a meeting room",
    icon: "scale",
  },
  {
    slug: "temporary-staffing",
    title: "Temporary Staffing",
    summary:
      "Short-term staffing support when an organisation needs cover for absence, a peak in work or a time-limited project.",
    introduction:
      "Temporary staffing provides cover for a defined period, with the assignment terms agreed before a person starts.",
    description:
      "Avenyra Global sources temporary cover against a brief: the duties, the location, the shift or hours, the start date and the expected end date. Candidates are told the assignment is temporary. The organisation approves the person before the start. If the assignment needs to change, that change is agreed rather than assumed.",
    activities: [
      "Briefing for the temporary assignment",
      "Sourcing and screening against the brief",
      "Presentation of suitable candidates",
      "Confirmation of dates, location and duties",
      "Replacement coordination if agreed cover falls through before the start",
    ],
    benefits: [
      "Cover tied to a real gap in the team",
      "Candidates who know the work is temporary",
      "A start and end that managers can plan around",
      "A route to extend or close the assignment deliberately",
    ],
    delivery:
      "We confirm the duties, the workplace requirements and the approval step. No one is presented as available to start until those points are clear.",
    image: "/images/collab.jpg",
    imageAlt: "Colleagues collaborating around a laptop in an office",
    icon: "clock",
  },
  {
    slug: "employee-benefits-administration",
    title: "Employee Benefits Administration",
    summary:
      "Administration of the employee benefits an organisation has chosen to offer, from enrolment to employee queries.",
    introduction:
      "Benefits administration keeps enrolment, changes and employee questions in one orderly process.",
    description:
      "Avenyra Global administers the benefit plans the organisation has already selected with its providers. The work covers enrolment, eligible changes, leaver notifications and a first line of employee queries. Plan rules remain the provider’s rules. We explain the process and pass on decisions that belong to the provider or to the organisation. We do not design insured benefits or quote premiums.",
    activities: [
      "Enrolment and change administration",
      "Leaver notifications to the named provider contact",
      "Employee query handling within the plan information supplied",
      "Records of who is covered under the administered plans",
      "Reporting to the organisation’s benefits owner",
    ],
    benefits: [
      "Employees have a clear place to take a benefits question",
      "Joiners and leavers are less likely to be missed",
      "The organisation keeps a record of administered changes",
      "Providers receive consistent information",
    ],
    delivery:
      "We list the plans in scope, the eligibility rules we have been given, and the calendar for changes. Anything outside that list is referred back.",
    image: "/images/handshake.jpg",
    imageAlt: "Two professionals shaking hands across a meeting table",
    icon: "heart",
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
