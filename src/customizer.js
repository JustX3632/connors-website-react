#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

const indexCssPath = path.resolve(__dirname, 'src', 'index.css');
const navPath = path.resolve(__dirname, 'src', 'components', 'Nav.tsx');

async function main() {
  const { brandColor } = await inquirer.prompt([
    { type: 'input', name: 'brandColor', message: 'Enter primary brand color (hex, e.g. #7c3aed):', default: '#7c3aed' },
  ]);

  // Update index.css brand color variables
  let css = fs.readFileSync(indexCssPath, 'utf8');
  css = css.replace(/--color-brand:\s*#[a-fA-F0-9]{3,6};/, `--color-brand: ${brandColor};`);
  css = css.replace(/--color-brand-glow:\s*rgba\([^)]*\);/, `--color-brand-glow: rgba(${hexToRgba(brandColor, 0.3)});`);
  fs.writeFileSync(indexCssPath, css, 'utf8');
  console.log('Updated brand color in src/index.css');

  // Ask for nav links
  const navItems = [];
  let addMore = true;
  while (addMore) {
    const answers = await inquirer.prompt([
      { type: 'input', name: 'name', message: 'Nav item name:' },
      { type: 'input', name: 'to', message: 'Path (e.g. /aboutme):' },
    ]);
    navItems.push({ name: answers.name, to: answers.to });
    const { cont } = await inquirer.prompt([{ type: 'confirm', name: 'cont', message: 'Add another nav item?', default: false }]);
    addMore = cont;
  };

  // Rewrite Nav.tsx navItems array (keep existing imports and structure)
  let navSrc = fs.readFileSync(navPath, 'utf8');
  const navArrayStart = navSrc.indexOf('const navItems = [');
  const navArrayEnd = navSrc.indexOf('];', navArrayStart);
  const newArray = 'const navItems = [\n' +
    navItems.map(i => `    { name: \"${i.name}\", to: \"${i.to}\", icon: /* choose appropriate icon manually */ },`).join('\n') + '\n  ];';
  navSrc = navSrc.slice(0, navArrayStart) + newArray + navSrc.slice(navArrayEnd + 2);
  fs.writeFileSync(navPath, navSrc, 'utf8');
  console.log('Updated Nav.tsx nav items (icons need manual adjustment).');
}

function hexToRgba(hex, alpha) {
  let h = hex.replace('#', '');
  if (h.length === 3) h = h.split('').map(c => c + c).join('');
  const bigint = parseInt(h, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r}, ${g}, ${b}, ${alpha}`;
}

main();
