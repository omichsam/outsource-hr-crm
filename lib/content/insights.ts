export const insightCategories = [
  "HR Management",
  "Recruitment",
  "Employment Practices",
  "Payroll",
  "Career Development",
  "Leadership",
] as const;

export type InsightCategory = (typeof insightCategories)[number];

export type Article = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: InsightCategory;
  image: string;
  imageAlt: string;
  paragraphs: string[];
};

export const articles: Article[] = [
  {
    slug: "what-to-agree-before-hr-outsourcing",
    title: "What to agree before you outsource any HR work",
    description:
      "A useful HR outsourcing arrangement starts with a written scope: the tasks, the records, the approvals and the point of contact.",
    date: "2026-09-16",
    category: "HR Management",
    image: "/images/consult.jpg",
    imageAlt: "Two professionals greeting each other in a bright office",
    paragraphs: [
      "Outsourcing a piece of human resource work fails most often for a simple reason. The organisation and the provider never wrote down the same task list. One side hears “run our HR”. The other hears a defined set of administration. The gap appears later, usually in a hurry, around a leaver, a payroll change or an unhappy employee.",
      "Before any work moves, name the activities. Employee files, onboarding checklists, leave records, query handling and monthly reports are different jobs. Say which of them are included. Say which systems hold the record of truth. Say who inside the organisation may instruct a change, and who must approve it when the change affects pay or a contract.",
      "Agree the rhythm as well as the tasks. A weekly query log and a monthly workforce note are enough for many organisations. What matters is that managers know when they will hear from the provider, and the provider knows which questions can wait for that note.",
      "Keep decisions where they belong. A provider can prepare a letter, assemble a file and remind a manager of the procedure the organisation has adopted. The decision to hire, to warn or to dismiss remains with the employer. An outsourcing agreement that blurs that line creates risk for both sides.",
      "Review the scope after the first month, not after the first complaint. Early review is how a practical service becomes a steady one. If a task keeps falling outside the list, either add it deliberately or stop expecting it to be done.",
    ],
  },
  {
    slug: "a-clearer-recruitment-brief",
    title: "A clearer recruitment brief produces a fairer shortlist",
    description:
      "Selection improves when the role, the workplace and the criteria are agreed before candidates are invited to apply.",
    date: "2026-08-04",
    category: "Recruitment",
    image: "/images/interview.jpg",
    imageAlt: "A professional portrait in a contemporary workplace",
    paragraphs: [
      "A hiring manager who says “we will know the right person when we see them” is usually short of time, not short of standards. The difficulty is that an unstated standard cannot be applied evenly. Candidates are left guessing, and the shortlist reflects whoever was easiest to find.",
      "A usable brief answers a few plain questions. What will this person do in the first six months? Where will they work, and when? Which requirements are essential, and which are useful but teachable? Who decides, and by when? Those answers do not need to become a long specification. They do need to be stable enough to screen against.",
      "Essential criteria should be things the organisation can evidence. A qualification, a level of experience, a language, a licence, or a type of work the person has actually done. Preferences dressed up as essentials narrow the field for no operational reason and are difficult to defend if someone asks why they were screened out.",
      "Tell candidates the employment type and the location in the advertisement. Temporary, contract and permanent are not interchangeable descriptions. People arrange their lives around them.",
      "When the shortlist is ready, share the same evidence with every interviewer: the brief, the criteria and the notes from screening. A fair process is mostly a consistent one. The hiring decision still belongs to the organisation.",
    ],
  },
  {
    slug: "records-that-make-employment-procedures-work",
    title: "Employment procedures only work when the record is complete",
    description:
      "Policies help managers when the file shows what was communicated, what was decided and what happens next.",
    date: "2026-07-21",
    category: "Employment Practices",
    image: "/images/advisory.jpg",
    imageAlt: "Colleagues in a meeting reviewing a matter together",
    paragraphs: [
      "Most organisations have a procedure for something that matters: probation, leave, grievance, discipline, or ending employment. The procedure is only as useful as the record behind it. A conversation that nobody noted is difficult to recall accurately three months later, and impossible to explain calmly if the matter becomes formal.",
      "A sufficient note is short. It records the date, who was present, what was discussed, what was decided and what was agreed as the next step. It does not need to be a transcript. It does need to be written while the memory is fresh and shared with the people who must act on it.",
      "Employee files should hold the documents a manager would expect to find: the offer or contract that was issued, identification of the role and location, changes that were confirmed, and correspondence about formal steps. Informal kindness and informal warnings are both easy to lose. If a step is serious enough to rely on later, it belongs in the file.",
      "Access matters as much as storage. People data is not general office reading. Limit the file to the managers and HR practitioners who need it for the employment relationship, and say who that is.",
      "When a procedure and a record disagree, stop and reconcile them before the next step. Acting quickly on an incomplete file is how small inconsistencies become formal disputes.",
    ],
  },
  {
    slug: "a-payroll-calendar-people-can-trust",
    title: "A payroll calendar people can trust",
    description:
      "Accurate pay depends less on heroics at month end and more on a cut-off, approved inputs and a named approver.",
    date: "2026-06-11",
    category: "Payroll",
    image: "/images/desk.jpg",
    imageAlt: "A desk prepared for detailed administrative work",
    paragraphs: [
      "Employees experience payroll as a promise: the right amount, on the agreed day, with a payslip they can read. That promise is kept by a calendar, not by a last-minute effort. The organisations that pay calmly have decided, in advance, when inputs close and who is allowed to approve them.",
      "List the inputs. New starters, leavers, unpaid leave, overtime, allowances, advances and any change to an account or a statutory detail. Each one needs an owner and a cut-off. An input that arrives after the cut-off waits for the next run unless the organisation has a written exception path.",
      "Separate preparation from approval. The person who compiles the changes should not be the only person who releases the payment. A second review catches duplicated overtime, a leaver who was still paid, and a joiner whose start date was misread.",
      "Keep a record of adjustments. If a figure changes between the draft and the final run, note who asked and why. The question will return, often from the employee, and the answer should not depend on memory.",
      "Queries deserve a route. A shared inbox with a response expectation is better than a private message to whoever seems available. Statutory questions that the payroll team cannot answer should be referred to the organisation’s appointed adviser rather than guessed.",
    ],
  },
  {
    slug: "how-to-read-an-opportunity",
    title: "How to read an opportunity before you apply",
    description:
      "A careful application starts with the role itself: the duties, the location, the employment type and the closing date.",
    date: "2026-05-19",
    category: "Career Development",
    image: "/images/careers.jpg",
    imageAlt: "A team working together in a bright office",
    paragraphs: [
      "Job advertisements vary in quality. Some are precise. Some are hopeful. Before you spend an evening on an application, read for the facts that will shape your working life if you are successful.",
      "Start with the duties, not the adjectives. A title such as “executive” or “lead” means little until you can see the work. Look for what the person will produce, who they will work with, and whether the role supervises anyone. If those points are missing, it is reasonable to ask before you apply.",
      "Check the employment type and the location. Permanent, contract and temporary arrangements carry different expectations about duration and benefits. A role described as hybrid still has a workplace. Know how often you would be expected there, and whether the organisation has stated it.",
      "Use the closing date. A complete application sent in time is more useful than a perfect one sent after the organisation has moved on. If you are submitting a general CV rather than applying for a named vacancy, say so. It lets a recruiter file your details honestly.",
      "Tailor the evidence, not the personality. Show where you have done similar work, for how long, and what you were responsible for. Leave claims you cannot discuss in an interview off the page. A shorter CV that is accurate will serve you better than a long one that is vague.",
    ],
  },
  {
    slug: "what-managers-owe-a-team",
    title: "What managers owe a team, in ordinary weeks",
    description:
      "Leadership in a workforce setting is mostly clarity: priorities, feedback, and a predictable way to raise a concern.",
    date: "2026-04-08",
    category: "Leadership",
    image: "/images/team.jpg",
    imageAlt: "A diverse professional team standing together in an office",
    paragraphs: [
      "Teams rarely need a speech. They need to know what matters this week, what “done” looks like, and how to say when something is blocking the work. Managers who provide those three things, steadily, are already practising leadership.",
      "Priorities should be few enough to remember. When everything is urgent, people choose for themselves, and the choices will not match. A short weekly note or a standing meeting with a real agenda is enough. Cancel it when there is nothing to decide, rather than filling it.",
      "Feedback works best close to the work. Praise that is specific teaches the team what to repeat. A correction that waits for an annual review arrives too late to be useful and too late to feel fair. Say what you observed, why it matters, and what you are asking for next.",
      "Make the route for concerns obvious. People will not use a procedure they cannot find, or a manager who treats every question as disloyalty. Tell the team who they can speak to if the concern is about you. That single instruction changes the culture of a team more than a values poster.",
      "Protect time for one-to-one conversations. They are where context travels: workload, development, and the practical difficulties of the job. A manager who learns those things early spends less time repairing them later.",
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${iso}T00:00:00`));
}
