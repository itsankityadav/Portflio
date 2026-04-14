import SectionRenderer from './SectionRenderer';

const HtmlSection = ({ html, className = '' }) => {
  return <SectionRenderer html={html} className={className} />;
};

export default HtmlSection;
