# AmitaSoft Shared Site Shell Content Manifest

Status: Implemented and live on the AmitaSoft main site and blog.

Implementation package: `@amitasoft/site-shell`

Approved implementation commit: `4f97f2945274c059b68f364323bdd574e5c2b6e7`

This document is the content contract for the shared header and footer. The executable manifest lives in `index.js`. Main-site and blog adapters must consume that package rather than copy this content.

## Header

Primary navigation, in order:

1. Home: `/`
2. About Us: `/#about`
3. Products: `/products`
4. Resources: `/resources`
5. Blogs: `/blog/`
6. Contact: `/contact-us`
7. Schedule a demo: `/schedule-demo`

Products children, in order:

1. All products: `/products`
2. SafeVault: `/products/safevault`
3. CliQloan: `/products/cliqloan`
4. TaxFlo: `/products/taxflo`

Resources children, in order:

- All resources: `/resources`
- Tax & CPA workflow
  - Tax organizer: `/tax-organizer`
  - Engagement letter: `/engagement-letter`
  - Document request list: `/document-request-list`
  - Prior-year return: `/prior-year-return`
- Mortgage & lending
  - Desktop Underwriter: `/desktop-underwriter`
  - Clear to close: `/clear-to-close`
  - Automated underwriting: `/automated-underwriting`
  - TRID: `/trid`
  - Loan origination system: `/loan-origination-system`
  - Verification of employment: `/verification-of-employment`
  - Form 1003: `/form-1003`
- Document intelligence
  - Document intelligence: `/document-intelligence`

## Footer

Heading: Partner with us

Tagline: Building infinite trust + intelligent infrastructure

Company column, in order:

1. Home: `/`
2. About Us: `/#about`
3. Blogs: `/blog/`
4. Contact Us: `/contact-us`

Products column, in order:

1. All Products: `/products`
2. SafeVault: `/products/safevault`
3. CliQloan: `/products/cliqloan`
4. TaxFlo: `/products/taxflo`

Resources column, in order:

1. Resources: `/resources`
2. Schedule Demo: `/schedule-demo`
3. FAQ: `/faq`

Contact:

- Email display: `support@amitasoft.com`
- Email href: `mailto:support@amitasoft.com`
- Phone display: `+1 408-430-3650`
- Phone href: `tel:+14084303650`

Social links:

- LinkedIn: `https://www.linkedin.com/company/amitasoft/`
- Instagram: `https://www.instagram.com/amitasoft/`
- Facebook: `https://www.facebook.com/profile.php?id=61583589355202`
- X: `https://x.com/amitasoft358151`

Legal links:

- Privacy Policy: `/privacy-policy`
- Terms & Conditions: `/terms-conditions`

## Contract checks

- Every desktop and mobile navigation item and every footer link must be a real anchor in prerendered HTML.
- Main and blog builds must render the same keyed href map.
- Internal shell links must return `200` without redirects.
- Blog links must use `/blog/`, never `/blog`.
- The displayed phone number and RFC 3966 dial URI above must remain distinct.
