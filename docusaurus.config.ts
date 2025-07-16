import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Classic Emulation Tutorials',
  tagline: "For the Horde! ...and the Alliance! (We don't take sides here)",
  favicon: 'https://raw.githubusercontent.com/wowemulation-dev/branding/refs/heads/main/assets/logo/icon.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://kaev.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/classic-emulation-wiki/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Kaev', // Usually your GitHub org/user name.
  projectName: 'classic-emulation-tutorials', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/kaev/classic-emulation-tutorials/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Classic Emulation Tutorials',
      logo: {
        alt: 'Classic Emulation Tutorials',
        src: 'https://raw.githubusercontent.com/wowemulation-dev/branding/refs/heads/main/assets/logo/icon.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Classic Emulation',
              to: '/docs/intro'
            },
            {
                label: 'TSWoW',
                to: '/docs/tswow/intro'
            },
            {
                label: 'Cascette-rs',
                to: '/docs/cascette-rs/intro'
            },
            {
                label: 'Warcraft-rs',
                to: '/docs/warcraft-rs/intro'
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'WoW Emulation Discord',
              href: 'https://discord.gg/9hRGqNjxAC',
            },
            {
              label: 'TSWoW Discord',
              href: 'https://discord.gg/JUD4VUc4eZ',
            },
            {
              label: 'WoW Modding Discord',
              href: 'https://discord.gg/NKprjqdhAn',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
                label: 'WoW Emulation Website',
                href: 'https://wowemulation.dev/'
            },
            {
              label: 'WoW Emulation on GitHub',
              href: 'https://github.com/wowemulation-dev',
            },
          ],
        },
      ],
      copyright: `Made with ♥ by the WoW emulation community. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
