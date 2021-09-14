const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'usukawa',
  tagline: 'OBS向けオーバーレイシステム',
  url: 'https://oshiteku.app/',
  baseUrl: '/usukawa-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'oshiteku',
  projectName: 'obs-usukawa',

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/oshiteku/usukawa-docs/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/oshiteku/usukawa-docs/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'usukawa',
        logo: {
          alt: 'usukawa logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'チュートリアル',
          },
          {to: '/blog', label: 'ブログ', position: 'left'},
          {
            href: 'https://github.com/oshiteku/obs-usukawa',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'ドキュメント',
            items: [
              {
                label: '配信者向けガイド',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'コミュニティ',
            items: [
              {
                label: 'Slack コミュニティ',
                href: 'https://join.slack.com/t/oshiteku/shared_invite/zt-umby2fh2-Hrf0E5BZ789Kz9mHOM8ekQ',
              },
              {
                label: '開発者 Twitter',
                href: 'https://twitter.com/oshiteku',
              },
            ],
          },
          {
            title: 'その他',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/oshiteku/obs-usukawa',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} oshiteku. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
