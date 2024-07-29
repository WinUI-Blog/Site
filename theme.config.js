import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";
import Logo from "./components/logo";
import Vercel from "./components/vercel";
import useLocalesMap from "./components/use-locales-map";
import {
  editTextMap,
  feedbackLinkMap,
  footerTextMap,
  gitTimestampMap,
  headDescriptionMap,
  languageMap,
  searchPlaceholderMap,
  tableOfContentsTitleMap,
  Banner,
  titleMap,
} from "./translations/text";
import { _config } from "./_config";

/** @type {import('nextra-theme-docs').DocsThemeConfig} */
const themeConfig = {
  project: {
    link: _config.repoUrl,
  },
  docsRepositoryBase: _config.docsRepositoryBase,
  useNextSeoProps() {
    return {
      titleTemplate: `%s – ${_config.title}`,
    };
  },
  toc: {
    backToTop: true,
    float: true,
    title: () => useLocalesMap(tableOfContentsTitleMap),
  },
  chat: {
    link: 'https://',
  },
  banner: {
    dismissible: false,
    key: 'Beta',
    text: (
      <a href="#" target="_blank">
      🐛 WinUI Blog is still in BETA you may expect bugs! Read more →
      </a>
    ),
  },
  search: {
    placeholder: () => useLocalesMap(searchPlaceholderMap),
  },
  sidebar: {
    defaultMenuCollapseLevel: 1, // Collapsed by default at level 1 (top-level folders only)
    toggleButton: true // Automatically collapse folders that do not contain an active/focused route
  },
  editLink: {
    text: () => useLocalesMap(editTextMap),
  },
  feedback: {
    content: () => useLocalesMap(feedbackLinkMap),
  },
  primaryHue: { dark: 10, light: 10 },
  primarySaturation: { dark: 100, light: 100 },
  logo: () => {
    const title = useLocalesMap(titleMap);
    return (
      <>
        <Logo height={60} />
        <span
          className="mx-2 font-extrabold italic hidden md:inline select-none"
          title={`${_config.title}: ${title}`}
        >
          {_config.title}
        </span>
      </>
    );
  },
  head: () => {
    const { route, locales, locale } = useRouter();
    const { frontMatter, title } = useConfig();
    const titleSuffix = useLocalesMap(titleMap);
    const description = useLocalesMap(headDescriptionMap);
  
    let imageUrl = "./public/assets/banner.png";
  
    if (!/\/index\.+/.test(route)) {
      imageUrl = `${imageUrl}?title=${encodeURIComponent(title || titleSuffix)}`;
    }
  
    const contentLanguage = locales.join(", ");
    const ogTitle = title
      ? `${title} – ${_config.title}`
      : `${_config.title}: ${titleSuffix}`;
    const ogDescription = frontMatter.description || description;
    const ogImage = frontMatter.image || imageUrl;
    
    return (
      <>
        {/* Favicons, meta */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <meta httpEquiv="Content-Language" content={contentLanguage} />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="apple-mobile-web-app-title" content={_config.title} />
        <meta name="description" content={ogDescription} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={`@${_config.title}`} />
        <meta name="twitter:image" content={ogImage} />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:locale" content={locale} />
        {locales
          .filter((l) => l !== locale)
          .map((l) => (
            <meta property="og:locale:alternate" content={l} key={l} />
          ))}
      </>
    );
  },
  footer: {
    text: () => {
      const { text, copyright } = useLocalesMap(footerTextMap);

      return (
        <div className="flex flex-col gap-1 items-center sm:items-start w-full">
          <a
            className="flex items-center gap-1 text-current"
            target="_blank"
            rel="noopener"
            title="vercel.com homepage"
            href="https://vercel.com"
          >
            <span>{text}</span>
            <Vercel />
          </a>
          <a
            href={_config.author.url}
            target="_block"
            rel="noopener"
            title="Author url"
          >
            <p className="mt-6 text-xs">
              {copyright}
            </p>
          </a>
        </div>
      );
    },
  },
  gitTimestamp({ timestamp }) {
    const { locale } = useRouter();
    const lastUpdatedOn = useLocalesMap(gitTimestampMap);

    return (
      <>
        {lastUpdatedOn}{" "}
        <time dateTime={timestamp.toISOString()}>
          {timestamp.toLocaleDateString(locale, {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </time>
      </>
    );
  },
  i18n: Object.entries(languageMap).map(([locale, text]) => ({
    locale,
    text,
  })),
};

export default themeConfig;
