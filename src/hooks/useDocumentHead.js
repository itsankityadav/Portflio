import { useEffect } from 'react';

const syncHeadLink = (attributes, createdLinks) => {
  const selector = attributes.href ? `link[href="${attributes.href}"]` : null;
  let link = selector ? document.head.querySelector(selector) : null;

  if (link) {
    return;
  }

  link = document.createElement('link');
  Object.entries(attributes).forEach(([key, value]) => {
    if (key === 'crossOrigin') {
      link.crossOrigin = value;
      return;
    }

    link.setAttribute(key, value);
  });

  document.head.appendChild(link);
  createdLinks.push(link);
};

export const useDocumentHead = ({ lang, title, description, links = [], structuredData = [] }) => {
  useEffect(() => {
    const previousLang = document.documentElement.lang;
    const previousTitle = document.title;

    document.documentElement.lang = lang;
    document.title = title;

    let descriptionMeta = document.querySelector('meta[name="description"]');
    const descriptionAlreadyExists = Boolean(descriptionMeta);
    const previousDescription = descriptionMeta?.getAttribute('content') ?? '';

    if (!descriptionMeta) {
      descriptionMeta = document.createElement('meta');
      descriptionMeta.name = 'description';
      document.head.appendChild(descriptionMeta);
    }

    descriptionMeta.setAttribute('content', description);

    const createdLinks = [];
    links.forEach((linkAttributes) => syncHeadLink(linkAttributes, createdLinks));

    document.head.querySelectorAll('script[data-app-structured="true"]').forEach((node) => node.remove());
    const createdStructuredScripts = structuredData.map((item) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.dataset.appStructured = 'true';
      script.text = item;
      document.head.appendChild(script);
      return script;
    });

    return () => {
      document.documentElement.lang = previousLang;
      document.title = previousTitle;

      if (descriptionAlreadyExists) {
        descriptionMeta.setAttribute('content', previousDescription);
      } else {
        descriptionMeta.remove();
      }

      createdLinks.forEach((link) => link.remove());
      createdStructuredScripts.forEach((script) => script.remove());
    };
  }, [description, lang, links, structuredData, title]);
};
