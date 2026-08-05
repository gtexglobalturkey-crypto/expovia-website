import { useEffect } from "react";

import { SITE_NAME } from "../../config/site";

const DEFAULT_SITE_NAME = SITE_NAME;

const DEFAULT_TITLE =
  "EXPOVIA | International Exhibition Representation";

const DEFAULT_DESCRIPTION =
  "EXPOVIA provides international exhibition representation and participation support for companies expanding into global markets.";

// TODO: set once a final EXPOVIA social share image exists — no og-image asset is available yet.
const DEFAULT_IMAGE = "";

function getOrCreateMeta(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");

    Object.entries(attributes).forEach(
      ([attribute, value]) => {
        element.setAttribute(attribute, value);
      },
    );

    document.head.appendChild(element);
  }

  return element;
}

function getOrCreateLink(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("link");

    Object.entries(attributes).forEach(
      ([attribute, value]) => {
        element.setAttribute(attribute, value);
      },
    );

    document.head.appendChild(element);
  }

  return element;
}

function getAbsoluteUrl(value) {
  if (!value) {
    return window.location.origin;
  }

  try {
    return new URL(value, window.location.origin).href;
  } catch {
    return window.location.origin;
  }
}

function SEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_IMAGE,
  canonical,
  type = "website",
  noIndex = false,
}) {
  useEffect(() => {
    const pageTitle = title.includes(DEFAULT_SITE_NAME)
      ? title
      : `${title} | ${DEFAULT_SITE_NAME}`;

    const canonicalUrl = getAbsoluteUrl(
      canonical ?? window.location.pathname,
    );

    const imageUrl = image ? getAbsoluteUrl(image) : null;

    document.title = pageTitle;

    const descriptionMeta = getOrCreateMeta(
      'meta[name="description"]',
      {
        name: "description",
      },
    );

    descriptionMeta.setAttribute(
      "content",
      description,
    );

    const robotsMeta = getOrCreateMeta(
      'meta[name="robots"]',
      {
        name: "robots",
      },
    );

    robotsMeta.setAttribute(
      "content",
      noIndex
        ? "noindex, nofollow"
        : "index, follow",
    );

    const canonicalLink = getOrCreateLink(
      'link[rel="canonical"]',
      {
        rel: "canonical",
      },
    );

    canonicalLink.setAttribute(
      "href",
      canonicalUrl,
    );

    const openGraphTags = [
      {
        property: "og:title",
        content: pageTitle,
      },
      {
        property: "og:description",
        content: description,
      },
      {
        property: "og:type",
        content: type,
      },
      {
        property: "og:url",
        content: canonicalUrl,
      },
      imageUrl && {
        property: "og:image",
        content: imageUrl,
      },
      {
        property: "og:site_name",
        content: DEFAULT_SITE_NAME,
      },
      {
        property: "og:locale",
        content: "en_US",
      },
    ].filter(Boolean);

    openGraphTags.forEach(
      ({ property, content }) => {
        const meta = getOrCreateMeta(
          `meta[property="${property}"]`,
          {
            property,
          },
        );

        meta.setAttribute("content", content);
      },
    );

    const twitterTags = [
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: pageTitle,
      },
      {
        name: "twitter:description",
        content: description,
      },
      imageUrl && {
        name: "twitter:image",
        content: imageUrl,
      },
    ].filter(Boolean);

    twitterTags.forEach(({ name, content }) => {
      const meta = getOrCreateMeta(
        `meta[name="${name}"]`,
        {
          name,
        },
      );

      meta.setAttribute("content", content);
    });
  }, [
    title,
    description,
    image,
    canonical,
    type,
    noIndex,
  ]);

  return null;
}

export default SEO;