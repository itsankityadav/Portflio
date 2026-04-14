const SectionRenderer = ({ html, className = '' }) => {
  return <div className={className} dangerouslySetInnerHTML={{ __html: html }} />;
};

export default SectionRenderer;
