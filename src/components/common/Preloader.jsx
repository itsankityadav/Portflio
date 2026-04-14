import { useEffect, useState } from 'react';
import { preloaderHtml } from '../../data/sectionHtml';
import SectionRenderer from './SectionRenderer';
import './Preloader.css';

const Preloader = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return <SectionRenderer html={preloaderHtml} className={hidden ? 'preloader-shell hide' : 'preloader-shell'} />;
};

export default Preloader;
