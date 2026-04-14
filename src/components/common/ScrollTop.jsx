import { useEffect, useState } from 'react';

const ScrollTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      id="scrollTopBtn"
      className={show ? 'show' : ''}
      title="Go to top"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      UP
    </button>
  );
};

export default ScrollTop;
