const shellManifest = Object.freeze({
  brand: {
    label: 'AmitaSoft',
    href: '/',
    logoSrc: '/images/amitasoft-logo.svg',
  },
  header: {
    primary: [
      { key: 'home', label: 'Home', href: '/' },
      { key: 'about', label: 'About Us', href: '/about' },
      { key: 'products', label: 'Products', href: '/products' },
      { key: 'resources', label: 'Resources', href: '/resources' },
      { key: 'blogs', label: 'Blogs', href: '/blog/' },
      { key: 'contact', label: 'Contact', href: '/contact-us' },
    ],
    products: [
      { key: 'all-products', label: 'All products', href: '/products' },
      { key: 'safevault', label: 'SafeVault', href: '/products/safevault' },
      { key: 'cliqloan', label: 'CliQloan', href: '/products/cliqloan' },
      { key: 'taxflo', label: 'TaxFlo', href: '/products/taxflo' },
    ],
    resources: {
      all: { key: 'all-resources', label: 'All resources', href: '/resources' },
      groups: [
        {
          key: 'tax-cpa',
          heading: 'Tax & CPA workflow',
          links: [
            { key: 'tax-organizer', label: 'Tax organizer', href: '/tax-organizer' },
            { key: 'engagement-letter', label: 'Engagement letter', href: '/engagement-letter' },
            { key: 'document-request-list', label: 'Document request list', href: '/document-request-list' },
            { key: 'prior-year-return', label: 'Prior-year return', href: '/prior-year-return' },
          ],
        },
        {
          key: 'mortgage-lending',
          heading: 'Mortgage & lending',
          links: [
            { key: 'desktop-underwriter', label: 'Desktop Underwriter', href: '/desktop-underwriter' },
            { key: 'clear-to-close', label: 'Clear to close', href: '/clear-to-close' },
            { key: 'automated-underwriting', label: 'Automated underwriting', href: '/automated-underwriting' },
            { key: 'trid', label: 'TRID', href: '/trid' },
            { key: 'loan-origination-system', label: 'Loan origination system', href: '/loan-origination-system' },
            { key: 'verification-of-employment', label: 'Verification of employment', href: '/verification-of-employment' },
            { key: 'form-1003', label: 'Form 1003', href: '/form-1003' },
          ],
        },
        {
          key: 'document-intelligence',
          heading: 'Document intelligence',
          links: [
            { key: 'document-intelligence', label: 'Document intelligence', href: '/document-intelligence' },
          ],
        },
      ],
    },
    cta: { key: 'schedule-demo', label: 'Schedule a demo', href: '/schedule-demo' },
  },
  footer: {
    heading: 'Partner with us',
    tagline: 'Building infinite trust + intelligent infrastructure',
    columns: [
      {
        key: 'company',
        heading: 'Company',
        links: [
          { key: 'home', label: 'Home', href: '/' },
          { key: 'about', label: 'About Us', href: '/about' },
          { key: 'blogs', label: 'Blogs', href: '/blog/' },
          { key: 'contact', label: 'Contact Us', href: '/contact-us' },
        ],
      },
      {
        key: 'products',
        heading: 'Products',
        links: [
          { key: 'all-products', label: 'All Products', href: '/products' },
          { key: 'safevault', label: 'SafeVault', href: '/products/safevault' },
          { key: 'cliqloan', label: 'CliQloan', href: '/products/cliqloan' },
          { key: 'taxflo', label: 'TaxFlo', href: '/products/taxflo' },
        ],
      },
      {
        key: 'resources',
        heading: 'Resources',
        links: [
          { key: 'resources', label: 'Resources', href: '/resources' },
          { key: 'schedule-demo', label: 'Schedule Demo', href: '/schedule-demo' },
          { key: 'faq', label: 'FAQ', href: '/faq' },
        ],
      },
    ],
    contact: {
      heading: 'Get in touch',
      email: { label: 'support@amitasoft.com', href: 'mailto:support@amitasoft.com' },
      phone: { label: '+1 408-430-3650', href: 'tel:+14084303650' },
    },
    social: [
      { key: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/company/amitasoft/' },
      { key: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/amitasoft/' },
      { key: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61583589355202' },
      { key: 'x', label: 'X', href: 'https://x.com/amitasoft358151' },
    ],
    legal: [
      { key: 'privacy', label: 'Privacy Policy', href: '/privacy-policy' },
      { key: 'terms', label: 'Terms & Conditions', href: '/terms-conditions' },
    ],
  },
});

const socialPaths = {
  linkedin: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
  instagram: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 3.675A6.162 6.162 0 1 0 12 18.162 6.162 6.162 0 0 0 12 5.838zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 1 0 2.88 1.44 1.44 0 0 1 0-2.88z',
  facebook: 'M22.675 0h-21.35C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.114C23.407 24 24 23.407 24 22.675V1.325C24 .593 23.407 0 22.675 0z',
  x: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
};

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function isActive(href, currentPath) {
  if (href === '/') return currentPath === '/';
  if (href === '/products') return currentPath.startsWith('/products');
  if (href === '/resources') return currentPath === '/resources';
  if (href === '/blog/') return currentPath === '/blog' || currentPath.startsWith('/blog/');
  return currentPath === href;
}

function anchor(key, label, href, className, currentPath, extra = '') {
  const active = isActive(href, currentPath);
  return `<a data-shell-key="${escapeHtml(key)}" href="${escapeHtml(href)}" class="${escapeHtml(className)}${active ? ' is-active' : ''}"${active ? ' aria-current="page"' : ''}${extra}>${escapeHtml(label)}</a>`;
}

function brandAnchor(currentPath) {
  const active = isActive(shellManifest.brand.href, currentPath);
  return `<a data-shell-key="header.brand" href="${escapeHtml(shellManifest.brand.href)}" class="as-shell-brand${active ? ' is-active' : ''}" aria-label="${escapeHtml(shellManifest.brand.label)} home"${active ? ' aria-current="page"' : ''}><img class="as-shell-logo" src="${escapeHtml(shellManifest.brand.logoSrc)}" alt="${escapeHtml(shellManifest.brand.label)}"></a>`;
}

function socialAnchor(item) {
  return `<a data-shell-key="footer.social.${escapeHtml(item.key)}" href="${escapeHtml(item.href)}" class="as-shell-social-link" target="_blank" rel="noopener noreferrer" aria-label="AmitaSoft on ${escapeHtml(item.label)}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="${socialPaths[item.key]}"></path></svg></a>`;
}

function renderProductLinks(surface, currentPath) {
  return shellManifest.header.products
    .map((item) => anchor(`header.${surface}.products.${item.key}`, item.label, item.href, 'as-shell-panel-link', currentPath))
    .join('');
}

function renderResourceLinks(surface, currentPath) {
  const all = shellManifest.header.resources.all;
  const groups = shellManifest.header.resources.groups.map((group) => `
    <div class="as-shell-resource-group">
      <p class="as-shell-group-heading">${escapeHtml(group.heading)}</p>
      ${group.links.map((item) => anchor(`header.${surface}.resources.${item.key}`, item.label, item.href, 'as-shell-panel-link', currentPath)).join('')}
    </div>`).join('');
  return `${anchor(`header.${surface}.resources.${all.key}`, all.label, all.href, 'as-shell-all-resources', currentPath)}<div class="as-shell-resource-grid">${groups}</div>`;
}

function renderHeader(options = {}) {
  const currentPath = options.currentPath || '/';
  const primary = Object.fromEntries(shellManifest.header.primary.map((item) => [item.key, item]));
  return `<header class="as-shell as-shell-header">
  <div class="as-shell-container as-shell-header-row">
    ${brandAnchor(currentPath)}
    <nav class="as-shell-desktop-nav" aria-label="Primary navigation">
      ${anchor('header.desktop.home', primary.home.label, primary.home.href, 'as-shell-nav-link', currentPath)}
      ${anchor('header.desktop.about', primary.about.label, primary.about.href, 'as-shell-nav-link', currentPath)}
      <div class="as-shell-dropdown">
        ${anchor('header.desktop.products', primary.products.label, primary.products.href, 'as-shell-nav-link as-shell-dropdown-label', currentPath)}
        <div id="desktop-products-menu" class="as-shell-panel as-shell-products-panel">${renderProductLinks('desktop', currentPath)}</div>
      </div>
      <div class="as-shell-dropdown">
        ${anchor('header.desktop.resources', primary.resources.label, primary.resources.href, 'as-shell-nav-link as-shell-dropdown-label', currentPath)}
        <div id="desktop-resources-menu" class="as-shell-panel as-shell-resources-panel">${renderResourceLinks('desktop', currentPath)}</div>
      </div>
      ${anchor('header.desktop.blogs', primary.blogs.label, primary.blogs.href, 'as-shell-nav-link', currentPath)}
      ${anchor('header.desktop.contact', primary.contact.label, primary.contact.href, 'as-shell-nav-link', currentPath)}
      ${anchor('header.desktop.schedule-demo', shellManifest.header.cta.label, shellManifest.header.cta.href, 'as-shell-cta', currentPath, ' data-track="schedule-demo"')}
    </nav>
    <details class="as-shell-mobile-menu">
      <summary aria-label="Open menu"><span aria-hidden="true">☰</span><span class="as-shell-close" aria-hidden="true">×</span></summary>
      <nav class="as-shell-mobile-panel" aria-label="Mobile navigation">
        ${anchor('header.mobile.home', primary.home.label, primary.home.href, 'as-shell-mobile-link', currentPath)}
        ${anchor('header.mobile.about', primary.about.label, primary.about.href, 'as-shell-mobile-link', currentPath)}
        <details class="as-shell-mobile-group"><summary>Products</summary><div id="mobile-products-menu">${renderProductLinks('mobile', currentPath)}</div></details>
        <details class="as-shell-mobile-group"><summary>Resources</summary><div id="mobile-resources-menu">${renderResourceLinks('mobile', currentPath)}</div></details>
        ${anchor('header.mobile.blogs', primary.blogs.label, primary.blogs.href, 'as-shell-mobile-link', currentPath)}
        ${anchor('header.mobile.contact', primary.contact.label, primary.contact.href, 'as-shell-mobile-link', currentPath)}
        ${anchor('header.mobile.schedule-demo', shellManifest.header.cta.label, shellManifest.header.cta.href, 'as-shell-cta as-shell-mobile-cta', currentPath, ' data-track="schedule-demo"')}
      </nav>
    </details>
  </div>
</header>`;
}

function renderFooter(options = {}) {
  const currentPath = options.currentPath || '/';
  const year = options.year || new Date().getFullYear();
  const columns = shellManifest.footer.columns.map((column) => `
    <div class="as-shell-footer-column">
      <h3>${escapeHtml(column.heading)}</h3>
      <ul>${column.links.map((item) => `<li>${anchor(`footer.${column.key}.${item.key}`, item.label, item.href, 'as-shell-footer-link', currentPath)}</li>`).join('')}</ul>
    </div>`).join('');
  const social = shellManifest.footer.social.map(socialAnchor).join('');
  const legal = shellManifest.footer.legal.map((item) => anchor(`footer.legal.${item.key}`, item.label, item.href, 'as-shell-legal-link', currentPath)).join('<span aria-hidden="true">|</span>');
  return `<footer class="as-shell as-shell-footer">
  <div class="as-shell-container">
    <div class="as-shell-footer-grid">
      <div class="as-shell-footer-brand">
        <h2>${escapeHtml(shellManifest.footer.heading)}</h2>
        <p>${escapeHtml(shellManifest.footer.tagline)}</p>
        <div class="as-shell-social">${social}</div>
      </div>
      <div class="as-shell-footer-columns">${columns}</div>
      <div class="as-shell-contact-card">
        <h3>${escapeHtml(shellManifest.footer.contact.heading)}</h3>
        ${anchor('footer.contact.email', shellManifest.footer.contact.email.label, shellManifest.footer.contact.email.href, 'as-shell-contact-link', currentPath)}
        ${anchor('footer.contact.phone', shellManifest.footer.contact.phone.label, shellManifest.footer.contact.phone.href, 'as-shell-contact-link', currentPath)}
      </div>
    </div>
    <div class="as-shell-legal-row">
      <p>© ${escapeHtml(year)} AmitaSoft. All rights reserved.</p>
      <div>${legal}</div>
    </div>
  </div>
</footer>`;
}

function collectExpectedAnchors() {
  const anchors = [
    { key: 'header.brand', label: 'AmitaSoft', href: '/' },
  ];
  for (const surface of ['desktop', 'mobile']) {
    for (const item of shellManifest.header.primary.filter((item) => !['products', 'resources'].includes(item.key))) {
      anchors.push({ key: `header.${surface}.${item.key}`, label: item.label, href: item.href });
    }
    if (surface === 'desktop') {
      anchors.push({ key: 'header.desktop.products', label: 'Products', href: '/products' });
      anchors.push({ key: 'header.desktop.resources', label: 'Resources', href: '/resources' });
    }
    for (const item of shellManifest.header.products) anchors.push({ key: `header.${surface}.products.${item.key}`, label: item.label, href: item.href });
    anchors.push({ key: `header.${surface}.resources.all-resources`, label: 'All resources', href: '/resources' });
    for (const group of shellManifest.header.resources.groups) {
      for (const item of group.links) anchors.push({ key: `header.${surface}.resources.${item.key}`, label: item.label, href: item.href });
    }
    anchors.push({ key: `header.${surface}.schedule-demo`, label: 'Schedule a demo', href: '/schedule-demo' });
  }
  for (const column of shellManifest.footer.columns) {
    for (const item of column.links) anchors.push({ key: `footer.${column.key}.${item.key}`, label: item.label, href: item.href });
  }
  for (const item of shellManifest.footer.social) anchors.push({ key: `footer.social.${item.key}`, label: item.label, href: item.href });
  anchors.push({ key: 'footer.contact.email', label: shellManifest.footer.contact.email.label, href: shellManifest.footer.contact.email.href });
  anchors.push({ key: 'footer.contact.phone', label: shellManifest.footer.contact.phone.label, href: shellManifest.footer.contact.phone.href });
  for (const item of shellManifest.footer.legal) anchors.push({ key: `footer.legal.${item.key}`, label: item.label, href: item.href });
  return Object.freeze(anchors);
}

const expectedShellAnchors = collectExpectedAnchors();

module.exports = {
  expectedShellAnchors,
  renderFooter,
  renderHeader,
  shellManifest,
};
