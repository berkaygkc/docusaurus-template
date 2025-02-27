// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "DefterX",
    tagline: "DefterX uygulamasının kullanım kılavuzu ve dökümantasyonu",
    favicon: "img/favicon.ico",
    url: "https://ldocs.defterx.com.tr",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    i18n: {
        defaultLocale: "tr",
        locales: ["tr"],
    },
    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: "./sidebars.js",
                },
                theme: {
                    customCss: "./src/css/custom.css",
                },
            }),
        ],
    ],
    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: "DefterX",
                logo: {
                    alt: "DefterX Logo",
                    src: "img/icon.png",
                },
                items: [
                    {
                        type: "docSidebar",
                        sidebarId: "tutorialSidebar",
                        position: "left",
                        label: "Dökümanlar",
                    },
                    {
                        href: "https://lauth.defterx.com.tr/register",
                        label: "Kayıt Ol",
                        position: "right",
                    },
                    {
                        href: "https://lauth.defterx.com.tr/reset-password",
                        label: "Şifre Güncelle",
                        position: "right",
                    },
                    {
                        href: "https://lapp.defterx.com.tr/download",
                        label: "Uygulamayı İndir",
                        position: "left",
                    },
                ],
            },
            prism: {
                theme: prismThemes.jettwaveDark,
                darkTheme: prismThemes.dracula,
            },
        }),
};

export default config;
