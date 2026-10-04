const assert = require('node:assert/strict');
const { expectedShellAnchors, renderFooter, renderHeader, shellManifest } = require('./index');

const html = renderHeader({ currentPath: '/products' }) + renderFooter({ currentPath: '/products', year: 2026 });
const found = new Map();
for (const match of html.matchAll(/<a\b[^>]*data-shell-key="([^"]+)"[^>]*href="([^"]+)"[^>]*>/g)) {
  assert.equal(found.has(match[1]), false, `duplicate shell key: ${match[1]}`);
  found.set(match[1], match[2]);
}

for (const expected of expectedShellAnchors) {
  assert.equal(found.get(expected.key), expected.href, `${expected.key} must be a real anchor with the approved href`);
}
assert.equal(found.size, expectedShellAnchors.length, 'unexpected shell anchors');
assert.equal([...found.values()].includes('/blog'), false, 'internal blog links must use /blog/');
assert.equal(shellManifest.footer.contact.phone.href, 'tel:+14084303650');
assert.equal(shellManifest.footer.contact.phone.label, '+1 408-430-3650');
console.log(`PASS: ${found.size} approved shell anchors are present`);
console.log('PASS: all blog links use /blog/');
console.log('PASS: footer phone uses tel:+14084303650');
