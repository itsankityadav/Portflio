import { useEffect, useRef } from 'react';
import { booksHtml } from '../../data/sectionHtml';
import SectionRenderer from '../common/SectionRenderer';
import './Books.css';

const Books = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const root = sectionRef.current?.querySelector('.mySwiper');
    if (!root) return undefined;

    const track = root.querySelector('.swiper-wrapper');
    const nextButton = root.querySelector('.swiper-button-next');
    const prevButton = root.querySelector('.swiper-button-prev');

    if (!track) return undefined;

    const getScrollAmount = () => Math.max(track.clientWidth * 0.8, 280);

    const updateControls = () => {
      const maxScrollLeft = track.scrollWidth - track.clientWidth;
      prevButton?.classList.toggle('is-disabled', track.scrollLeft <= 8);
      nextButton?.classList.toggle('is-disabled', track.scrollLeft >= maxScrollLeft - 8);
    };

    const scrollTrack = (direction) => {
      track.scrollBy({
        left: direction * getScrollAmount(),
        behavior: 'smooth',
      });
    };

    const handleNext = () => scrollTrack(1);
    const handlePrev = () => scrollTrack(-1);

    nextButton?.addEventListener('click', handleNext);
    prevButton?.addEventListener('click', handlePrev);
    track.addEventListener('scroll', updateControls, { passive: true });
    window.addEventListener('resize', updateControls);
    updateControls();

    return () => {
      nextButton?.removeEventListener('click', handleNext);
      prevButton?.removeEventListener('click', handlePrev);
      track.removeEventListener('scroll', updateControls);
      window.removeEventListener('resize', updateControls);
    };
  }, []);

  return (
    <div ref={sectionRef}>
      <SectionRenderer html={booksHtml} />
    </div>
  );
};

export default Books;
