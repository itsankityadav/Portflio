import HtmlSection from '../components/common/HtmlSection';
import Books from '../components/sections/Books';
import Contact from '../components/sections/Contact';
import {
  awardsHtml,
  conclusionHtml,
  courses_attendedHtml,
  experienceHtml,
  heroHtml,
  referencesHtml,
  research_totalHtml,
  researchHtml,
} from '../data/sectionHtml';

export const PAGE_SECTIONS = [
  { id: 'hero', Component: HtmlSection, props: { html: heroHtml } },
  { id: 'experience', Component: HtmlSection, props: { html: experienceHtml } },
  { id: 'courses', Component: HtmlSection, props: { html: courses_attendedHtml } },
  { id: 'research', Component: HtmlSection, props: { html: researchHtml } },
  { id: 'research-total', Component: HtmlSection, props: { html: research_totalHtml } },
  { id: 'references', Component: HtmlSection, props: { html: referencesHtml } },
  { id: 'conclusion', Component: HtmlSection, props: { html: conclusionHtml } },
  { id: 'books', Component: Books },
  { id: 'awards', Component: HtmlSection, props: { html: awardsHtml } },
  { id: 'contact', Component: Contact },
];
