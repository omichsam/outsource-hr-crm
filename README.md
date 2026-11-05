# Avenyra Global

Public website for Avenyra Global, a human resource outsourcing, recruitment and workforce solutions company.

Marketing copy lives in `lib/content`. Contact details, leadership names and credentials that the company has not confirmed are shown as labelled placeholders. The careers page lists only vacancies with status `published`. Sample operational records in the admin area are not shown on the public site.

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The internal administration area is at [http://localhost:3000/admin](http://localhost:3000/admin). It keeps enquiries, CV submissions, and vacancy publishing separate from the public pages. CV files are stored in `data/private-uploads`, which is not served publicly.

Set `NEXT_PUBLIC_SITE_URL` when deploying so canonical links, the sitemap and Open Graph URLs use the live domain.
