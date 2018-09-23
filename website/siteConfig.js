/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'Kalkuli',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Kalkuli', // Title for your website.
  tagline: 'de notas para dados',
  url: 'https://fga-eps-mds.github.io', // Your website URL
  baseUrl: '/2018.2-Kalkuli/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: '2018.2-Kalkuli',
  organizationName: 'fga-eps-mds',

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: 'tap', label: 'Produto' },
    { doc: 'overview', label: 'Projeto' },
    { doc: 'psprint0', label: 'Release I' },
    // { doc: 'psprint0', label: 'Release II' },
    { blog: false },
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */

  favicon: 'img/knowledge.png',
  githubIcon: 'img/members/git.png',
  linkedinIcon: 'img/members/link.png',
  Bernardo: 'img/members/Bernardo.jpeg',
  Clarissa: 'img/members/Clarissa.jpg',
  Esio: 'img/members/Esio.jpg',
  Felipe: 'img/members/Felipe.jpeg',
  Jaco: 'img/members/Jaco.jpeg',
  Lucas: 'img/members/Lucas.jpeg',
  Mariana: 'img/members/Mariana.jpeg',
  Pedro: 'img/members/Pedro.jpeg',
  Saleh: 'img/members/Saleh.png',
  Youssef: 'img/members/Youssef.jpeg',

  members: [
    "Bernardo", "Clarissa", "Ésio", "Felipe",
    "Jacó", "Lucas", "Mariana", "Pedro", "Saleh", "Youssef"
  ],

  /* Colors for website */
  colors: {
    primaryColor: '#353535',
    secondaryColor: '#595959',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Kalkuli`,

  highlight: {
    // https://github.com/isagalaev/highlight.js/tree/master/src/styles
    theme: 'rainbow',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/docusaurus.png',
  twitterImage: 'img/docusaurus.png',

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
