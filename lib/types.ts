export type JobStatus = "draft" | "published" | "filled" | "archived";
export type LeadStatus = "new" | "in_progress" | "closed";
export type WorkerType = "internal" | "delivery_employee" | "contractor" | "partner";
export type PlacementStatus = "upcoming" | "active" | "ended" | "cancelled";

export type Company = {
  displayName: string;
  legalName: string;
  tagline: string;
  about: string;
  mission: string;
  email: string;
  phone: string;
  address: string;
  hours: string;
  stats: { value: string; label: string }[];
};

export type Service = {
  id: string;
  title: string;
  summary: string;
  body: string;
};

export type Job = {
  id: string;
  title: string;
  location: string;
  type: string;
  category?: string;
  summary: string;
  description: string;
  status: JobStatus;
  postedAt: string;
  deadline?: string;
  payRate: string;
  billRate: string;
};

export type TeamMember = {
  id: string;
  name: string;
  title: string;
  bio: string;
  focus: string;
  published: boolean;
};

export type NewsItem = {
  id: string;
  title: string;
  date: string;
  body: string;
  published: boolean;
};

export type Lead = {
  id: string;
  name: string;
  email: string;
  phone: string;
  organisation?: string;
  enquiryType?: string;
  service?: string;
  message: string;
  source: string;
  jobId: string;
  status: LeadStatus;
  createdAt: string;
};

export type Application = {
  id: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  qualification: string;
  specialisation: string;
  experience: string;
  employmentType: string;
  jobId: string;
  fileName: string;
  storedFile: string;
  consent: boolean;
  createdAt: string;
};

export type Client = {
  id: string;
  name: string;
  sector: string;
  status: string;
  contact: string;
  notes: string;
};

export type Worker = {
  id: string;
  name: string;
  email: string;
  workerType: WorkerType;
  classification: string;
  status: string;
  skills: string;
  notes: string;
};

export type Placement = {
  id: string;
  workerId: string;
  clientId: string;
  role: string;
  start: string;
  end: string;
  status: PlacementStatus;
  billable: boolean;
};

export type Store = {
  updatedAt: string;
  company: Company;
  services: Service[];
  jobs: Job[];
  team: TeamMember[];
  news: NewsItem[];
  leads: Lead[];
  applications?: Application[];
  clients: Client[];
  workers: Worker[];
  placements: Placement[];
};
