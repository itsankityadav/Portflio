import { useEffect } from 'react';
import { progressHtml } from '../../data/sectionHtml';
import SectionRenderer from './SectionRenderer';

const ProgressBar = () => {
  useEffect(() => {
    const onScroll = () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      const bar = document.getElementById('progress-bar');
      if (bar) bar.style.width = `${scrolled}%`;
    };
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return <SectionRenderer html={progressHtml} />;
};

export default ProgressBar;
